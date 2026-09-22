# ChatGPT Ads — GTM setup

Pixel ID: `EbEsVPZpKd27yD5pu4US6L`
Container: `GTM-THWF68CR`, workspace 12. **Do not publish yet.**

Code changes on the site side are already done and tested (see bottom).

---

## 1. Variable — DONE

`Const - ChatGPT Pixel ID` (Constant) = `EbEsVPZpKd27yD5pu4US6L`.
Verified after a full page reload.

Keeping the ID in a variable rather than inline in three tags means it only
ever has to be changed in one place.

---

## 2. Tag — `ChatGPT - Base Pixel` — DONE (tag id 41)

- Type: **Custom HTML**
- Trigger: **Initialization - All Pages**

```html
<script>
!function (w, d, s, u) {
  if (w.oaiq) return;
  var q = function () { q.q.push(arguments); };
  q.q = []; w.oaiq = q;
  var j = d.createElement(s); j.async = 1; j.src = u;
  var f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
}(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");
oaiq("init", { pixelId: "{{Const - ChatGPT Pixel ID}}" });
</script>
```

**`debug:true` is deliberately omitted.** It was in the snippet OpenAI gave you
and is fine while testing, but it logs to the browser console on every page for
every visitor. If you want it during verification, add `, debug: true` inside
the init object and take it out before publishing.

---

## 3. Tag — `ChatGPT - Event - Lead` — DONE (tag id 42)

- Type: **Custom HTML**
- Trigger: **Event - Generate Lead** (the existing one)
- Advanced settings → Tag sequencing → **Setup tag: `ChatGPT - Base Pixel`**
  (so the SDK is guaranteed loaded first, exactly like the Meta tags)

```html
<script>(function(){
  var v  = Number("{{DLV - value}}") || 0;
  var c  = "{{DLV - currency}}" || "EUR";
  var id = "{{DLV - lead_id}}";
  // type: "customer_action" is what OpenAI's own conversion snippet sends.
  // It tells them this was a real action by a person, not a pageview.
  var p  = { type: "customer_action" };
  if (v)  { p.value = v; p.currency = c; }
  // Sent as a plain property, not a reserved dedup field. If you later add
  // OpenAI's Conversions API, check their docs for the correct deduplication
  // key and rename this — do not assume it matches Meta's eventID.
  if (id) { p.lead_id = id; }
  if (window.oaiq) window.oaiq("measure", "lead_created", p);
})();</script>
```

`lead_created` is one of OpenAI's documented standard events.

---

## 4. Tag — `ChatGPT - Event - Contact` — DONE (tag id 43)

- Type: **Custom HTML**
- Trigger: **Event - Call Intent** (the existing one)
- Setup tag: `ChatGPT - Base Pixel`

```html
<script>(function(){
  var m  = "{{DLV - call_method}}";
  var id = "{{DLV - lead_id}}";
  var p  = { type: "customer_action" };
  if (m)  { p.call_method = m; }
  if (id) { p.lead_id = id; }
  // OpenAI has no standard event for a phone-tap, so this is a custom event.
  // Custom events are supported; the name is ours to choose.
  if (window.oaiq) window.oaiq("measure", "call_intent", p);
})();</script>
```

Delete this tag if you only want to optimise on form submissions.

---

## 5. Verify before publishing

1. GTM **Preview** against `https://primebooker.com/hr`
2. Confirm `ChatGPT - Base Pixel` fires on Initialization and that
   `{{Const - ChatGPT Pixel ID}}` resolves to `EbEsVPZpKd27yD5pu4US6L`
   (not the placeholder)
3. Submit the form; confirm `ChatGPT - Event - Lead` fires
4. In the browser console, check the SDK actually loaded:

```js
typeof window.oaiq   // "function" once the base tag has run
```

5. Test the channel detection: load `https://primebooker.com/hr?oppref=test123`
   and confirm `DLV - traffic_channel` reads `chatgpt_ads`

---

## Site code — already done

- `attributionScript.jsx` — `oppref` added to the click-id list, and a new
  `chatgpt_ads` channel ahead of the `microsoft_ads` branch
- `attribution.js` — new `pb_oppref` field sent to HubSpot
- Tested: 7/7 channel scenarios pass (ChatGPT plus all six existing ones — no
  regressions), and `oppref` correctly persists into last-touch storage so it
  survives to the form submission

**These changes need a redeploy to take effect**, same as the root-redirect fix.

## HubSpot

Re-run the properties script once, to create the single new `pb_oppref`
property. It is idempotent — it will create only that one and skip the other 14:

```
node scripts/create-hubspot-properties.mjs --dry-run
node scripts/create-hubspot-properties.mjs
```
