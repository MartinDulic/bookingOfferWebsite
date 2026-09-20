/**
 * Reads the attribution snapshot captured by `integrations/attributionScript.jsx`.
 *
 * The capture itself runs as a synchronous inline script in <head>, before GTM,
 * so the values are already in the dataLayer by the time any tag fires. This
 * module is the read side: it hands the same values to form payloads so a
 * HubSpot contact carries the source that produced it.
 *
 * Storage, not cookies: the site is a static export on GitHub Pages with a
 * single hostname, so there is no server to set a cookie and nothing to share
 * one with. Every read is wrapped — Safari private mode throws on access
 * rather than returning null.
 */

export const FIRST_TOUCH_KEY = "pb_attr_first";
export const LAST_TOUCH_KEY = "pb_attr_last";

const readJson = (store, key) => {
  try {
    const raw = store.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

/** First touch (localStorage, 90 days) and last touch (sessionStorage). */
export const getAttribution = () => {
  if (typeof window === "undefined") return { first: null, last: null };

  let first = null;
  let last = null;
  try {
    first = readJson(window.localStorage, FIRST_TOUCH_KEY);
  } catch {
    /* storage unavailable */
  }
  try {
    last = readJson(window.sessionStorage, LAST_TOUCH_KEY);
  } catch {
    /* storage unavailable */
  }
  return { first, last };
};

/**
 * HubSpot's own tracking cookie. Passing it as `context.hutk` is what lets
 * HubSpot join the submission to the visitor's browsing session — without it
 * every contact lands as "Offline Sources" no matter what else we send.
 */
export const getHubspotUtk = () => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match ? match[1] : null;
};

/**
 * A stable id minted once per submission and sent everywhere: GA4 param,
 * Google Ads transaction_id, Meta eventID, and a HubSpot property. It is the
 * join key that later lets a qualified lead in HubSpot be pushed back to
 * Google and Meta as an offline conversion against the right click.
 */
export const newLeadId = () => {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
  } catch {
    /* fall through */
  }
  return `pb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
};

const pick = (touch, key) => (touch && touch[key] ? String(touch[key]) : "");

/**
 * Flattens the attribution snapshot into HubSpot form fields.
 * Every name here must exist as a contact property in the portal or HubSpot
 * silently drops it — see docs/TRACKING.md for the property list.
 */
export const attributionFields = (leadId) => {
  const { first, last } = getAttribution();
  const source = last || first || {};

  const fields = [
    { name: "pb_lead_id", value: leadId || "" },
    { name: "pb_channel", value: pick(source, "channel") },
    { name: "pb_utm_source", value: pick(source, "utm_source") },
    { name: "pb_utm_medium", value: pick(source, "utm_medium") },
    { name: "pb_utm_campaign", value: pick(source, "utm_campaign") },
    { name: "pb_utm_content", value: pick(source, "utm_content") },
    { name: "pb_utm_term", value: pick(source, "utm_term") },
    { name: "pb_gclid", value: pick(source, "gclid") },
    { name: "pb_fbclid", value: pick(source, "fbclid") },
    { name: "pb_offline_code", value: pick(source, "pb_src") },
    { name: "pb_landing_page", value: pick(source, "landing_page") },
    { name: "pb_referrer", value: pick(source, "referrer") },
    { name: "pb_first_channel", value: pick(first, "channel") },
    { name: "pb_first_campaign", value: pick(first, "utm_campaign") },
  ];

  // HubSpot rejects the whole submission on some empty-value combinations;
  // sending only what we actually have keeps the payload clean.
  return fields.filter((field) => field.value !== "");
};

/** The same data shaped for a dataLayer push alongside a conversion event. */
export const attributionParams = () => {
  const { first, last } = getAttribution();
  const source = last || first || {};
  return {
    traffic_channel: pick(source, "channel") || "direct",
    campaign_source: pick(source, "utm_source"),
    campaign_medium: pick(source, "utm_medium"),
    campaign_name: pick(source, "utm_campaign"),
    offline_code: pick(source, "pb_src"),
    first_touch_channel: pick(first, "channel") || "direct",
  };
};
