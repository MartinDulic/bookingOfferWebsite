# PrimeBooker — tracking & attribution tasks

Written 2026-09-20. Assume you have forgotten everything; every item says what
the thing is, why it matters and where to find it.

---

## What this project was

The landing page had tracking on it, but it was producing numbers that could not
be trusted and it could not tell you where a lead came from. Three things were
actually broken, and one thing was missing entirely:

- **The phone button never reported a call.** `CallCta.jsx` (the phone button in the navbar) called `trackCtaClick("call_intent")`, which pushes an event named `cta_click` carrying the *text* "call_intent". The Google Tag Manager trigger listens for an event actually *named* `call_intent`. So it never matched. No GA4 call event, no Google Ads call conversion, no Meta "Contact" — which is why Meta's Events Manager showed zero Contact events in the pixel's entire history.
- **Every CTA click counted as a conversion.** `cta_click` was marked as a Key Event in GA4. All the gold buttons are `href="#atf"` — they just scroll down to the form. There are seven on the page. One interested visitor scrolling around registered as five-plus "conversions".
- **The Meta pixel fired twice.** The pixel snippet existed both in the site code (`metaPixel.jsx`) *and* as a Custom HTML tag in GTM. Both ran `fbq('init')` and `fbq('track','PageView')`, so every page view and every Lead was double-counted.
- **Nothing recorded traffic source.** No code anywhere read `utm_*`, `gclid` or `fbclid`. A lead arrived in HubSpot with a name and phone and no way to know if it came from Google, Meta or a flyer.

All four are now fixed in the `modern-gold` branch and in the live GTM container.

---

## The accounts and IDs (reference)

| System | ID / name | Where |
|---|---|---|
| Google Tag Manager | `GTM-THWF68CR`, account **Premier Services**, container **primebooker.com** | tagmanager.google.com, sign in as `primebookerads@gmail.com` |
| GA4 | `G-LMNG1Q9LL5` — property **Landing Page** (`522029619`), account **Prime Booker** (`382354920`) | analytics.google.com |
| Google Ads | `AW-17974401883` = account **519-754-3103** | ads.google.com |
| — form-submit conversion label | `pMKQCLKimf4bENu27vpC` | inside the GTM tag `GAds - Tag - Submit Form` |
| — call conversion label | `R1xUCK79xpscENu27vpC` | inside the GTM tag `GAds - Tag - Call intent` |
| Meta pixel | `930619076636982` — dataset **Primebooker Landing Page** | business.facebook.com → Events Manager |
| Meta (other dataset, unrelated) | `788759597639251` — **Dataset Makarska** | leave alone |
| Microsoft Clarity | `v8nubzutzz` | clarity.microsoft.com |
| HubSpot | portal `147789375`, EU data residency (`app-eu1.hubspot.com`), **free tier** | app-eu1.hubspot.com |

---

## How the tracking works now (so the tasks below make sense)

Data moves through four layers. Each one has to be configured separately, which
is why a single value like "traffic channel" shows up in four different places.

1. **The site code** pushes events into `window.dataLayer`, a list sitting in the visitor's browser. That is all the website itself does.
2. **Google Tag Manager** watches that list and decides which "tags" to fire. It is the router. This is why tracking can change without redeploying the site.
3. **Tags** send the data to GA4, Google Ads and Meta.
4. **GA4 custom dimensions** decide whether a parameter is *visible in reports*. Data arrives regardless; without a dimension there is nowhere to display it.

Separately, **HubSpot** receives the form submission directly from the form's
own `fetch()` call — GTM is not involved in getting the lead into the CRM.

**Attribution** is captured by an inline `<script>` in `<head>` that runs
*before* GTM loads (`src/lib/integrations/attributionScript.jsx`). It reads the
URL and referrer, works out which of eleven channels the visit came from, and
stores first touch in `localStorage` for 90 days and last touch in
`sessionStorage`. `src/lib/attribution.js` reads it back for form submissions.

**`lead_id`** is a random ID created at the moment a form is submitted. The same
value is sent to GA4, to Google Ads as `transaction_id`, to Meta as `eventID`,
and to HubSpot as `pb_lead_id`. It is the join key: it is what will later let you
say "this HubSpot contact became a paying client" and push that fact back to the
ad platform that produced the original click.

---

## DO NOW — before you deploy

- [ ] **Set the real conversion values.** In `src/lib/trackingUtils.js`, the constants `LEAD_VALUE_EUR` (currently `50`) and `CALL_VALUE_EUR` (currently `25`) are placeholders I invented. Google and Meta optimise *directly* against these numbers. Set them to (average contract value × the share of leads that close). This matters before deploy because you cannot retroactively add a value to conversions that were already recorded — whatever ships is baked into the history.

- [ ] **Decide the branch.** `.github/workflows/deploy.yml` triggers on pushes to `main`. Your working branch is `modern-gold`. Either merge `modern-gold` into `main`, or change the workflow's trigger branch. Nothing deploys until this is resolved.

- [ ] **Deploy `modern-gold` to primebooker.com.** This is the unblocker for everything else. Until the new site is live, none of the new tracking values are ever pushed, so nothing can be tested and no data is collected.

---

## DO IMMEDIATELY AFTER DEPLOY — verification

This is not optional. Everything built so far is untested against a real page.
Budget twenty minutes.

- [ ] **Run GTM Preview.** In Tag Manager click **Preview** (top right), enter `https://primebooker.com/hr`. A debug panel opens alongside the site showing every tag that fires and the actual value of every variable. Then on the site: click a gold CTA, click the phone button in the navbar, and submit the form. Check that `traffic_channel` has a value and is not empty — that is the single most likely thing to be silently broken.

- [ ] **Test the source detection with fake URLs.** Load `https://primebooker.com/hr?gclid=test123` and confirm `traffic_channel` becomes `google_ads`. Then `https://primebooker.com/hr?pb_src=flyer-test` and confirm it becomes `offline` with `offline_code = flyer-test`. These two prove the attribution script works.

- [ ] **Check GA4 DebugView.** GA4 → Admin → DebugView shows events arriving in real time while GTM Preview is connected. Confirm `generate_lead` arrives carrying `traffic_channel`, `lead_id` and `form_placement`.

- [ ] **Check Meta Test Events.** Events Manager → your dataset → **Test events** tab. Paste the site URL, browse, and watch events appear live. Confirm `PageView` appears **once**, not twice.

---

## THINGS THAT WILL LOOK BROKEN BUT ARE NOT

Read this before you panic at the numbers.

- **GA4 conversions will drop sharply.** `cta_click` is no longer a Key Event. It was counting scroll-to-form clicks, seven per page. The new, lower number is the real one; the old number was inflated.
- **Meta PageView volume should roughly halve.** That is the duplicate pixel being gone. It is the fix working.
- **Google Ads conversion actions may show "Inactive" or "No recent conversions"** until real traffic flows. Expected.
- **HubSpot and Google Ads conversion totals will never match exactly.** HubSpot's own documentation says so — different attribution windows and models. Do not chase the discrepancy.

---

## DO THIS WEEK

- [ ] **Verify the domain `primebooker.com` in Meta.** There is an active diagnostic in Events Manager saying the domain is not verified. Go to Business Settings → Brand Safety → Domains → add the domain. On GitHub Pages the easiest method is the meta-tag one: Meta gives you a `<meta>` tag which goes in `src/app/layout.js` inside `<head>`. Until this is done you cannot configure Aggregated Event Measurement, which limits what you can optimise for on iOS traffic.

- [ ] **Configure Aggregated Event Measurement.** Only possible after domain verification. Events Manager → Aggregated Event Measurement → configure web events. Set the priority order: `Lead` first, `Contact` second, `PageView` last. This tells Meta which single event to report when Apple's privacy rules only allow one.

- [ ] **Enable Automatic Advanced Matching.** Events Manager → your dataset → Settings → toggle it on. It takes the email and phone from your form fields, hashes them, and sends them with the event so Meta can match the conversion to a real person. Significantly improves match quality and costs nothing.

- [ ] **Audit Primary vs Secondary conversion actions in Google Ads.** Google Ads → Goals → Conversions. Each action is marked Primary or Secondary; **only Primary actions are used for bidding**. Check nothing unexpected is Primary. In particular, if `cta_click` was ever imported from GA4 as a Primary conversion, your past campaigns were bidding toward people who scroll, which would explain a lot about past performance. (`cta_click` was removed as a GA4 Key Event on 2026-09-20, but that does not automatically remove an already-imported Ads conversion action.)

- [ ] **Define your flyer and offline codes.** Any offline material gets its own code appended to the URL, like `https://primebooker.com/hr?pb_src=flyer-makarska-09`. Put that URL behind the QR code. One code per batch / location / partner. It arrives as `traffic_channel = offline` and `offline_code = flyer-makarska-09`, visible in GA4 and written to the HubSpot contact as `pb_offline_code`. This is the only way offline spend ever appears in a report.

---

## OPTIONAL / LOW PRIORITY

- [ ] **Create the Form Start trigger and tag in GTM.** The site pushes an event called `form_start_custom` when someone first touches a form field, but no GTM trigger listens for it, so it is currently ignored. Creating it would let you measure form abandonment. Low stakes because GA4's built-in enhanced measurement already fires its own `form_start`. The trigger definition is in `gtm/gtm-additions.json` if you want it: Custom Event trigger, event name `form_start_custom`, then a GA4 event tag using it.

---

## DO LATER — when there is actually traffic and closed clients

This whole section is pointless until you have won deals to report. Do not build
it early.

- [ ] **The offline conversion loop — the real payoff.** The idea: when a lead in HubSpot becomes a paying client, tell Google and Meta *that specific click produced a customer*. The ad platforms then stop optimising for "people who fill in forms" and start optimising for "people who become clients". This is the difference between cheap leads and good leads.

- [ ] **Understand why it is currently blocked.** HubSpot can do this automatically via **ad conversion events** that trigger on lifecycle stage changes — but that feature requires **Marketing Hub Starter or above**. This portal is on the **free** tier (confirmed: the API reports `CAMPAIGN: REQUIRES_ACCOUNT_MODIFICATION`, and the portal shows an "Upgrade to Starter" prompt). The ad account *connections* work fine on free; it is only the push-back that needs a paid plan.

- [ ] **Option A — manual CSV upload (free).** Export contacts who reached `Customer` with their click ID or email, conversion time and value. Upload to Google Ads → Tools → Conversions → **Import**, and to Meta → Events Manager → **Offline event sets**. Monthly is plenty at low volume. Same optimisation signal, zero cost.

- [ ] **Option B — upgrade to Marketing Hub Starter.** Then: HubSpot → Marketing → Ads → **Create → Event**. Create four events (each network needs its own): "Qualified Lead" triggering on lifecycle **Sales Qualified Lead**, and "Client Won" triggering on lifecycle **Customer**, one of each for Google and for Meta. Starter allows 5 events total. Two gotchas: **only stage changes that happen after the event is created are counted**, and under "choose contacts to share" pick *contacts who interacted with your ads*, not all contacts — otherwise you teach Google to take credit for organic and flyer leads.

- [ ] **Then make "Client Won" the Primary conversion in Google Ads.** Leave it Secondary until it is firing reliably; promoting an untested conversion to Primary destabilises bidding immediately. This is the final step of the whole project.

- [ ] **Your lifecycle stages already support this.** The portal has: Engaged Lead → Sales Qualified Lead → Opportunity → Customer, plus Unqualified and Failed. **No deal pipeline is required** — lifecycle stage changes are the supported trigger. Deals only become necessary if you want *different values per client* (a 12-bed villa is worth more than a studio), because a lifecycle stage cannot carry an amount.

- [ ] **Meta Conversions API.** Sends conversions from a server instead of the browser, recovering the events that ad blockers and iOS privacy settings destroy. GitHub Pages has no server, so this needs a free Cloudflare Worker as a relay. Already half-prepared: `lead_id` is wired as Meta's `eventID`, so browser and server events will deduplicate automatically.

- [ ] **Derive lead value from the form.** The estimate form already collects beds, guests and baths — which genuinely predict contract size. Computing the conversion value from those instead of a flat constant is the highest-leverage use of value-based bidding available, and needs no new infrastructure.

- [ ] **Check your average sales cycle length.** This decides which matching method works. Google's `gclid` matching generally requires the click to be within ~90 days. If closing a property owner routinely takes longer than three months, the click ID will have expired and you must use the email-based path instead (Google calls it "enhanced conversions for leads").

---

## KNOWN GAPS — deliberate decisions, not oversights

- [ ] **Cookie consent is not properly implemented.** Tags currently fire before the visitor consents, and no Google Consent Mode v2 signal is sent. This was deliberately deferred on 2026-09-20 to keep momentum. Two consequences: it is a GDPR/ePrivacy exposure in Croatia, and it costs you Google's modelled conversions (Google fills gaps from non-consenting users only if you send proper consent signals). The code is structured so Consent Mode drops into `src/app/layout.js` without touching the event layer — roughly an hour's work.

- **`lead_id` is intentionally NOT a GA4 custom dimension.** It has a unique value per lead, so it is useless as a report breakdown and would hit GA4's high-cardinality limit, collapsing rows into "(other)". It is still sent and still does its real job in Google Ads, Meta and HubSpot.

- **`value` and `currency` are intentionally NOT custom dimensions.** GA4 treats them as built-in and uses them for the Event Value metric automatically.

- **`page_location` is a registered custom dimension and is redundant** — GA4 has page location built in. That slot can be freed.

- [ ] **HubSpot portal locale is wrong.** It is set to US/Eastern timezone and USD currency for a Croatian business. This skews date-based reporting and any deal values. Settings → Account defaults.

- [ ] **HubSpot legacy private app creation is being sunset** on **2026-10-26** for this portal. Existing apps keep working forever; only new creation stops. The replacement is **Service Keys** (Development → Keys → Service keys). The properties script works with either, since both are `pat-...` tokens sent as `Authorization: Bearer`.

---

## NICE TO HAVE, SOMEDAY

- [ ] **Link Microsoft Clarity to GA4.** Lets you watch session recordings of the people who actually converted, rather than random sessions.
- [ ] **Turn on GA4 → BigQuery export.** Free, and the only way to do real analysis on this data later. It also preserves raw event parameters even for dimensions you never registered — the one escape hatch from the "dimensions do not backfill" problem.
- [ ] **Per-channel call tracking numbers.** A different phone number per channel gives genuine call attribution rather than click-intent, which is all a `tel:` link can ever measure.

---

## WHAT IS ALREADY DONE (2026-09-20)

**Code, on the `modern-gold` branch — written and tested, deployed only when you deploy:**

- `src/lib/integrations/attributionScript.jsx` — inline `<head>` script, runs before GTM, classifies traffic into 11 channels, stores first touch (localStorage, 90 days) and last touch (sessionStorage), pushes 10 variables to the dataLayer. Tested against 11 simulated landing scenarios plus private-browsing mode.
- `src/lib/attribution.js` — the read side; also reads HubSpot's `hubspotutk` cookie and mints `lead_id`.
- `src/lib/trackingUtils.js` — rewritten event layer. `trackMetaEvent` deleted entirely so GTM is the only thing that touches `fbq`.
- `src/lib/hubspotSubmit.js` — submits the form, and if HubSpot rejects a custom property it retries with core fields only. **A missing property can cost attribution but never a lead.**
- `src/lib/integrations/hubspotTracking.jsx` — HubSpot's tracking script, which was missing entirely. Without it there is no `hubspotutk` cookie and HubSpot files every contact under "Offline Sources".
- `CallCta.jsx` — the phone-button bug fixed, plus desktop-to-WhatsApp handling (a `tel:` link does nothing on desktop, so counting those as calls inflated the number) and once-per-session deduplication.
- Forms now send `hutk`, the attribution set and `lead_id`; the hero and recap form instances are distinguishable.
- Meta pixel removed from site code; the dead `if (consent === "granted") { }` empty block in the Clarity snippet fixed.
- `docs/TRACKING.md` — full technical spec.

**Google Tag Manager — published and verified against the live served container:**

- 9 new Data Layer Variables: `lead_id`, `value`, `currency`, `traffic_channel`, `offline_code`, `first_touch_channel`, `call_method`, `call_placement`, `form_placement`.
- Both Google Ads conversion tags carry value, currency and `transaction_id` = `lead_id`.
- Both Meta tags rewritten with `eventID` for Conversions API deduplication, and written to be null-safe so they behave correctly even before the new site is live.
- GA4 event tags carry the attribution parameters.

**GA4:**

- `cta_click` un-marked as a Key Event.
- 6 event-scoped custom dimensions registered: `traffic_channel`, `offline_code`, `first_touch_channel`, `call_method`, `call_placement`, `form_placement`.

**HubSpot:**

- 14 `pb_` contact properties created and verified via the API. Created with `scripts/create-hubspot-properties.mjs`, which reads the names out of `src/lib/attribution.js` so code and CRM can never drift apart. Note it needs **both** `crm.schemas.contacts.read` and `crm.schemas.contacts.write` — write does not imply read.
- Google Ads (519-754-3103) and Meta ad accounts connected, auto-tracking on. HubSpot now populates `hs_google_click_id` and `hs_facebook_click_id` by itself.

**Google Ads:**

- Auto-tagging turned on. This is mandatory — without it no `gclid` is ever captured and the entire offline conversion loop is impossible.

---

## FILES IN THIS REPO WORTH KNOWING ABOUT

- `docs/TRACKING.md` — the technical spec: event schema, channel classification rules, storage model, the `lead_id` join key, the required HubSpot properties.
- `scripts/create-hubspot-properties.mjs` — recreates the 14 HubSpot properties. Idempotent and create-only, so re-running it is safe. Run with `HUBSPOT_TOKEN=pat-xxxx node scripts/create-hubspot-properties.mjs`.
- `gtm/gtm-additions.json` — GTM import package containing the variable definitions and the Form Start trigger. Useful if you ever rebuild the container or point the site at a different one.
- `src/lib/trackingUtils.js` — the only file the site uses to talk to the dataLayer. If you add a new tracked action, it goes here.
