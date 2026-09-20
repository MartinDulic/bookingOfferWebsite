# PrimeBooker tracking & attribution

How traffic source, conversions and lead identity flow through this site.
Everything here is client-side: the site is a static Next.js export on GitHub
Pages, so there is no server to set cookies, proxy requests or hold secrets.

## Accounts

| System | ID |
|---|---|
| GTM container | `GTM-THWF68CR` (account *Premier Services*, admin `primebookerads@gmail.com`) |
| GA4 property | `G-LMNG1Q9LL5` — *Landing Page*, property `522029619`, account `382354920` |
| Google Ads | `AW-17974401883` — account `519-754-3103`, linked to GA4 |
| Meta pixel | `930619076636982` — dataset *Primebooker Landing Page* |
| Microsoft Clarity | `v8nubzutzz` |
| HubSpot | portal `147789375` (EU1 — `app-eu1.hubspot.com`) |

## Event schema

Every event is pushed to `window.dataLayer` from `src/lib/trackingUtils.js`
and picked up by GTM. Nothing in the app talks to `gtag` or `fbq` directly.

| dataLayer event | When | Parameters |
|---|---|---|
| `generate_lead` | HubSpot form submitted successfully | `form_id`, `form_placement`, `lead_id`, `value`, `currency`, `attribution_dropped` |
| `call_intent` | Phone / WhatsApp control clicked (once per session) | `call_placement`, `call_method` (`phone`\|`whatsapp`), `value`, `currency` |
| `form_start_custom` | First field of a form touched (once per session per form) | `form_id` |
| `cta_click` | Any gold CTA clicked — **engagement, not a conversion** | `button_name`, `cta_placement` |
| `experiment_viewed` | GrowthBook A/B variant shown | `experiment_id`, `variation_id` |

Every one of these also carries the attribution parameters below.

### Why `cta_click` must never be a Key Event

All the gold CTAs are `href="#atf"` — they smooth-scroll to the hero form
rather than navigating. There are seven on the landing page, so one engaged
visitor can fire five or more. It was marked as a Key Event in GA4 until
2026-09-20, which is why historical conversion counts are inflated.

## Attribution

`src/lib/integrations/attributionScript.jsx` runs as a synchronous inline
script in `<head>`, **before** the GTM snippet, so its `dataLayer` push is in
GTM's data model by the time the Initialization trigger fires. A `useEffect`
would be far too late.

`src/lib/attribution.js` is the read side, used by form payloads.

### Channel classification

Resolved in this order from query string and referrer:

| Channel | Matched by |
|---|---|
| `offline` | `?pb_src=` present |
| `google_ads` | `gclid`, `gbraid`, `wbraid`, or `utm_source=google` + paid medium |
| `meta_ads` | `fbclid`, or `utm_source` of facebook/instagram/meta/fb/ig |
| `microsoft_ads` / `tiktok_ads` | `msclkid` / `ttclid` |
| `other_paid` | `utm_medium` matching cpc/ppc/paid |
| `other_campaign` | any other `utm_source`/`utm_medium` |
| `direct` | no referrer, or referrer is our own host |
| `organic_search` | referrer is google/bing/duckduckgo/yahoo/ecosia/yandex |
| `organic_social` | referrer is a social network |
| `referral` | anything else |

### Storage

- **First touch** — `localStorage.pb_attr_first`, 90-day TTL, never overwritten inside that window.
- **Last touch** — `sessionStorage.pb_attr_last`, overwritten only by a visit that actually carries campaign parameters, so an internal navigation or a direct return mid-session cannot wipe the source that brought the visitor in.

All reads and writes are wrapped — Safari private mode throws on access rather
than returning null. If storage is unavailable the events still fire; only
persistence is lost.

### dataLayer variables published by the capture script

`traffic_channel`, `campaign_source`, `campaign_medium`, `campaign_name`,
`campaign_content`, `campaign_term`, `offline_code`, `landing_page`,
`first_touch_channel`, `first_touch_campaign`.

## Offline / flyer traffic

Give every offline batch its own code and put it on the QR target:

```
https://primebooker.com/hr?pb_src=flyer-makarska-09
https://primebooker.com/hr?pb_src=billboard-split-a
https://primebooker.com/hr?pb_src=partner-agency-x
```

The code lands in `traffic_channel=offline`, `offline_code=<code>`, and is
written to the HubSpot contact as `pb_offline_code`.

## `lead_id` — the join key

Each successful submission mints a UUID (`src/lib/attribution.js → newLeadId`)
that is sent to **all four** systems:

- GA4 — `lead_id` event parameter
- Google Ads — `transaction_id` on the conversion tag (deduplication)
- Meta — `eventID` on the Lead event (browser/CAPI deduplication)
- HubSpot — `pb_lead_id` contact property

This is what makes the offline conversion loop possible: when a contact later
becomes a client in HubSpot, that row can be pushed back to Google Ads and Meta
as an offline conversion matched to the original click.

## Required HubSpot contact properties

**These must exist or the attribution fields are rejected.** The submission
helper (`src/lib/hubspotSubmit.js`) detects a property error, retries with the
core contact fields only and flags `attribution_dropped=true` on the GA4 event —
so a missing property costs attribution but never a lead.

Create as single-line text, group "Contact information":

`pb_lead_id`, `pb_channel`, `pb_utm_source`, `pb_utm_medium`,
`pb_utm_campaign`, `pb_utm_content`, `pb_utm_term`, `pb_gclid`, `pb_fbclid`,
`pb_offline_code`, `pb_landing_page`, `pb_referrer`, `pb_first_channel`,
`pb_first_campaign`

## GTM container state (as configured 2026-09-20)

Changes are saved in workspace 10 of `GTM-THWF68CR` but **not yet published**.

### Variables added (9 Data Layer Variables)

`DLV - lead_id`, `DLV - value`, `DLV - currency`, `DLV - traffic_channel`,
`DLV - offline_code`, `DLV - first_touch_channel`, `DLV - call_method`,
`DLV - call_placement`, `DLV - form_placement`

`utm_*` are deliberately **not** duplicated as variables — GA4 resolves those
natively and custom dimension slots are limited.

### Tags edited

| Tag | Change |
|---|---|
| `GAds - Tag - Submit Form` | value `{{DLV - value}}`, currency `{{DLV - currency}}`, **transaction ID `{{DLV - lead_id}}`** |
| `GAds - Tag - Call intent` | value `{{DLV - value}}`, currency `{{DLV - currency}}` |
| `Meta - Event - Lead` | rewritten: value/currency, **`eventID`** for CAPI deduplication, null-safe |
| `Meta - Event - Contact` | rewritten: value/currency, `eventID`, `content_name` = call method |
| `GA4 - Event - Generate Lead` | + `lead_id`, `form_placement`, `traffic_channel`, `offline_code`, `first_touch_channel`, `value`, `currency` |
| `GA4 - Event - Call Intent` | + `call_method`, `call_placement`, `lead_id`, `traffic_channel`, `offline_code`, `first_touch_channel`, `value`, `currency` |
| `GA4 - Event - Cta Click` | + `traffic_channel` |

The Meta tags are null-safe by construction: if a variable is empty the
property is omitted rather than emitted as `undefined`, so the tags behave
correctly on the current live build, which does not yet push these values.

### Still to do in GTM

1. `transaction_id` = `{{DLV - lead_id}}` on `GAds - Tag - Call intent` (dedup for calls).
2. New trigger **Event - Form Start** (Custom Event, `form_start_custom`) and a GA4 event tag using it. The import package at `gtm/gtm-additions.json` contains this trigger definition.
3. Preview, verify, publish.

### GA4 custom dimensions to register

Event-scoped, matching the parameter names above:

`traffic_channel`, `offline_code`, `first_touch_channel`, `lead_id`,
`call_method`, `call_placement`, `form_placement`

Without these the parameters are collected but invisible in reports.
`page_location` is already registered as a custom dimension and is redundant —
GA4 has it built in, so that slot can be freed.

## Known gaps

- **Consent.** Tags fire before consent and no Google Consent Mode v2 signal is sent. Deliberately deferred; the code is structured so Consent Mode can be added in `layout.js` without touching the event layer. This is a GDPR/ePrivacy exposure in Croatia and it also costs Google's modelled conversions.
- **Meta domain verification.** `primebooker.com` is not yet verified/allowlisted in Meta Business — required for Aggregated Event Measurement.
- **`LEAD_VALUE_EUR` / `CALL_VALUE_EUR`** in `trackingUtils.js` are placeholders. Set them to (average contract value x close rate) before turning on value-based bidding.
- **HubSpot portal locale** is US/Eastern + USD for a Croatian business — worth correcting in HubSpot settings.
