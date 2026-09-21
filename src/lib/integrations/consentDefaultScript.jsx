/**
 * Google Consent Mode v2 — every signal granted, for every visitor.
 *
 * This is a deliberate business decision: the consent banner is disabled (see
 * layout.js) and no visitor choice is collected, so all tags measure everyone.
 *
 * Compliance note, left here on purpose: for EU/EEA traffic this conflicts
 * with ePrivacy/GDPR consent requirements and with Google's EU user consent
 * policy for Ads. To go back to asking, set these defaults to "denied" with
 * `wait_for_update`, and re-enable <CookieConsentBanner /> in layout.js — the
 * banner and its per-category logic are still in the codebase, untouched.
 *
 * Raw inline <script> rather than an effect for the same reason as
 * AttributionScript: consent state has to be in GTM's data model before
 * gtm.js runs its Initialization trigger, which a useEffect would miss.
 */

const CONSENT_DEFAULT_SCRIPT = `
(function () {
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted'
    });

    // Plain event as well, so tags that are not consent-aware have something
    // to trigger on.
    window.dataLayer.push({
      event: 'cookie_consent_update',
      consent_analytics: 'granted',
      consent_ad_storage: 'granted',
      consent_ad_user_data: 'granted',
      consent_ad_personalization: 'granted'
    });
  } catch (e) {
    // Never let measurement break the page.
  }
})();
`;

const ConsentDefaultScript = () => (
  <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }} />
);

export default ConsentDefaultScript;
