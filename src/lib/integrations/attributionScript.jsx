/**
 * Captures traffic source on landing and puts it in the dataLayer before GTM.
 *
 * This is a raw inline <script> rather than a React effect on purpose. It has
 * to run synchronously in <head>, ahead of the GTM snippet, because values
 * pushed to dataLayer before gtm.js loads are merged into GTM's data model in
 * time for the Initialization trigger. A useEffect would run after hydration —
 * long after the first tags have already fired with empty variables.
 *
 * Reading side: src/lib/attribution.js.
 */

const ATTRIBUTION_SCRIPT = `
(function () {
  try {
    var FIRST = 'pb_attr_first';
    var LAST = 'pb_attr_last';
    var TTL = 90 * 24 * 60 * 60 * 1000;

    var UTM = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id'];
    var CLICK = ['gclid','gbraid','wbraid','fbclid','ttclid','msclkid'];

    var q = new URLSearchParams(window.location.search);
    var host = window.location.hostname.replace(/^www\\./, '');
    var ref = document.referrer || '';
    var refHost = '';
    try { refHost = ref ? new URL(ref).hostname.replace(/^www\\./, '') : ''; } catch (e) {}

    function store(kind) { try { return window[kind]; } catch (e) { return null; } }
    function read(s, k) { try { return s ? JSON.parse(s.getItem(k)) : null; } catch (e) { return null; } }
    function write(s, k, v) { try { if (s) s.setItem(k, JSON.stringify(v)); } catch (e) {} }

    var touch = { ts: Date.now() };
    UTM.concat(CLICK).forEach(function (k) {
      var v = q.get(k);
      if (v) touch[k] = v;
    });
    var offline = q.get('pb_src');
    if (offline) touch.pb_src = offline;
    touch.landing_page = window.location.pathname + window.location.search;
    touch.referrer = ref;

    var src = (touch.utm_source || '').toLowerCase();
    var med = (touch.utm_medium || '').toLowerCase();
    var paid = /cpc|ppc|paid/.test(med);

    var channel;
    if (touch.pb_src) channel = 'offline';
    else if (touch.gclid || touch.gbraid || touch.wbraid || (src === 'google' && paid)) channel = 'google_ads';
    else if (touch.fbclid || /facebook|instagram|meta|^fb$|^ig$/.test(src)) channel = 'meta_ads';
    else if (touch.msclkid) channel = 'microsoft_ads';
    else if (touch.ttclid) channel = 'tiktok_ads';
    else if (paid) channel = 'other_paid';
    else if (src || med) channel = 'other_campaign';
    else if (!refHost || refHost === host || refHost.indexOf(host) > -1) channel = 'direct';
    else if (/google\\.|bing\\.|duckduckgo|yahoo\\.|ecosia|yandex/.test(refHost)) channel = 'organic_search';
    else if (/facebook|instagram|linkedin|t\\.co|twitter|x\\.com|tiktok|youtube|pinterest|reddit/.test(refHost)) channel = 'organic_social';
    else channel = 'referral';
    touch.channel = channel;

    // A visit only overwrites last-touch when it actually carries campaign
    // information. Otherwise an internal navigation or a direct return inside
    // the same session would wipe the source that brought the visitor in.
    var carriesSource = !!(touch.pb_src || touch.gclid || touch.gbraid || touch.wbraid ||
      touch.fbclid || touch.msclkid || touch.ttclid || touch.utm_source ||
      touch.utm_medium || touch.utm_campaign);

    var session = store('sessionStorage');
    var local = store('localStorage');

    var last = read(session, LAST);
    if (carriesSource || !last) {
      last = touch;
      write(session, LAST, last);
    }

    var first = read(local, FIRST);
    if (!first || !first.ts || (Date.now() - first.ts) > TTL) {
      first = last;
      write(local, FIRST, first);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      traffic_channel: last.channel,
      campaign_source: last.utm_source || '',
      campaign_medium: last.utm_medium || '',
      campaign_name: last.utm_campaign || '',
      campaign_content: last.utm_content || '',
      campaign_term: last.utm_term || '',
      offline_code: last.pb_src || '',
      landing_page: last.landing_page || '',
      first_touch_channel: first.channel || '',
      first_touch_campaign: first.utm_campaign || ''
    });
  } catch (e) {
    // Never let measurement break the page.
  }
})();
`;

const AttributionScript = () => (
  <script dangerouslySetInnerHTML={{ __html: ATTRIBUTION_SCRIPT }} />
);

export default AttributionScript;
