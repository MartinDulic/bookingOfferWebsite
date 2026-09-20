/**
 * Creates the pb_* attribution contact properties in HubSpot.
 *
 * Create-only and idempotent: it reads what already exists and creates only
 * what is missing. It never updates or deletes a property, so re-running it is
 * safe.
 *
 * The property list is parsed out of src/lib/attribution.js rather than
 * duplicated here — if the two ever drift, the form submission silently loses
 * attribution, so there is only one source of truth.
 *
 * Usage:
 *   HUBSPOT_TOKEN=pat-xxxx node scripts/create-hubspot-properties.mjs
 *   HUBSPOT_TOKEN=pat-xxxx node scripts/create-hubspot-properties.mjs --dry-run
 *
 * Token — use a Service Key (HubSpot's current recommendation for
 * system-to-system automation; public beta as of Sept 2026):
 *   Development → Keys → Service keys → Create service key
 *   Scope: crm.schemas.contacts.write        (Super admin required)
 *
 * Fallback if Service keys are not visible in your portal:
 *   Development → Legacy apps → Create legacy app → Private
 *   NOTE: HubSpot disables creation of NEW legacy private apps on
 *   2026-10-26 for accounts that existed before 2026-09-28 (this portal was
 *   created Feb 2026, so that is the applicable date). Existing legacy apps
 *   keep working indefinitely — only new creation stops.
 *
 * Either credential is a `pat-...` token sent as `Authorization: Bearer`,
 * so this script is unchanged either way. Keep it out of git.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const TOKEN = process.env.HUBSPOT_TOKEN;
const DRY_RUN = process.argv.includes("--dry-run");
const BASE = process.env.HUBSPOT_API_BASE || "https://api.hubapi.com";
const GROUP = "contactinformation";

if (!TOKEN) {
  console.error("Missing HUBSPOT_TOKEN.\n" +
    "  HUBSPOT_TOKEN=pat-xxxx node scripts/create-hubspot-properties.mjs");
  process.exit(1);
}

const LABELS = {
  pb_lead_id: ["PB Lead ID",
    "Unique id minted when the form is submitted. The same value goes to GA4, Google Ads (transaction_id) and Meta (eventID), so this contact can be matched back to the ad click for offline conversion import."],
  pb_channel: ["PB Channel",
    "Normalised source that produced this lead: google_ads, meta_ads, microsoft_ads, tiktok_ads, other_paid, other_campaign, organic_search, organic_social, referral, offline or direct."],
  pb_utm_source: ["PB UTM Source", "Raw utm_source from the landing URL."],
  pb_utm_medium: ["PB UTM Medium", "Raw utm_medium from the landing URL."],
  pb_utm_campaign: ["PB UTM Campaign", "Raw utm_campaign from the landing URL."],
  pb_utm_content: ["PB UTM Content", "Raw utm_content — usually identifies the specific ad or creative."],
  pb_utm_term: ["PB UTM Term", "Raw utm_term — usually the keyword."],
  pb_gclid: ["PB Google Click ID",
    "Backup copy of the gclid, captured by our own inline script. HubSpot's native hs_google_click_id is what the Google Ads integration reads; this one fills the gap when HubSpot's script is blocked."],
  pb_fbclid: ["PB Facebook Click ID",
    "Backup copy of the fbclid. HubSpot's native hs_facebook_click_id is what the Meta integration reads."],
  pb_offline_code: ["PB Offline Code",
    "Code from ?pb_src= on a flyer, QR code, billboard or partner link. The only way offline spend ever shows up in a report."],
  pb_landing_page: ["PB Landing Page", "Path and query string of the page the visitor first arrived on."],
  pb_referrer: ["PB Referrer", "The site that referred the visitor, when there was one."],
  pb_first_channel: ["PB First Touch Channel",
    "Channel of the visitor's very first visit, kept for 90 days. Catches the case where Meta found them but a later Google brand search closed them."],
  pb_first_campaign: ["PB First Touch Campaign", "utm_campaign of the visitor's first visit."],
};

// Single source of truth: the names the site actually sends.
const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(here, "..", "src", "lib", "attribution.js"), "utf8");
const names = [...source.matchAll(/name:\s*"(pb_[a-z_]+)"/g)].map((m) => m[1]);

if (!names.length) {
  console.error("Parsed no pb_* names out of src/lib/attribution.js — aborting rather than guessing.");
  process.exit(1);
}

const api = async (path, init = {}) => {
  const res = await fetch(BASE + path, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
};

const existing = await api("/crm/v3/properties/contacts");

let have = new Set();
let blindMode = false;

if (existing.ok) {
  have = new Set(existing.body.results.map((p) => p.name));
} else if (existing.status === 403) {
  // Read scope is missing but the token itself is valid. Creating still works:
  // fall through and let HubSpot reject duplicates with a 409, which we treat
  // as "already exists". Only a read-scope problem is recoverable this way.
  blindMode = true;
  console.warn(
    "Cannot list existing properties (HTTP 403 — missing read scope).\n" +
    "Continuing without the pre-check: each property will be attempted and an\n" +
    "'already exists' response counted as success.\n"
  );
  const wanted = existing.body?.errors?.flatMap((e) =>
    Object.values(e.context || {}).flat()
  );
  if (wanted?.length) {
    console.warn("HubSpot says these scopes would satisfy the read call:");
    console.warn("  " + [...new Set(wanted)].join("\n  ") + "\n");
  }
} else {
  console.error(`Could not read existing properties (HTTP ${existing.status}).`);
  if (existing.status === 401) {
    console.error("The token was rejected outright — check it was pasted in full.");
  }
  console.error(JSON.stringify(existing.body, null, 2));
  process.exit(1);
}

const missing = names.filter((n) => !have.has(n));

console.log(`${names.length} properties expected, ${names.length - missing.length} already present, ${missing.length} to create.\n`);

if (!missing.length) {
  console.log("Nothing to do — HubSpot already has every pb_* property.");
  process.exit(0);
}

if (DRY_RUN) {
  missing.forEach((n) => console.log(`  would create  ${n}  (${(LABELS[n] || [n])[0]})`));
  console.log(blindMode
    ? "\nDry run — could not verify what already exists, so this list may include properties that are already there."
    : "\nDry run — nothing was written.");
  process.exit(0);
}

let created = 0;
let skipped = 0;
let failed = 0;

for (const name of missing) {
  const [label, description] = LABELS[name] || [name, ""];
  const res = await api("/crm/v3/properties/contacts", {
    method: "POST",
    body: JSON.stringify({
      name,
      label,
      description,
      groupName: GROUP,
      type: "string",
      fieldType: "text",
      hasUniqueValue: false,
      hidden: false,
      formField: false, // set via the Forms API, not typed by a human
    }),
  });

  const alreadyExists =
    res.status === 409 || /already exists/i.test(JSON.stringify(res.body || ""));

  if (res.ok) {
    created++;
    console.log(`  created  ${name}`);
  } else if (alreadyExists) {
    skipped++;
    console.log(`  exists   ${name}`);
  } else {
    failed++;
    console.log(`  FAILED   ${name}  (HTTP ${res.status})`);
    console.log("           " + JSON.stringify(res.body?.message || res.body));
    if (res.status === 403) {
      const ctx = res.body?.errors?.flatMap((e) => Object.values(e.context || {}).flat());
      if (ctx?.length) console.log("           needs one of: " + [...new Set(ctx)].join(", "));
    }
  }
}

console.log(`\n${created} created, ${skipped} already existed, ${failed} failed.`);
process.exit(failed ? 1 : 0);
