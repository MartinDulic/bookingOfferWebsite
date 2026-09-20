import Script from 'next/script';

/**
 * HubSpot's tracking script for portal 147789375.
 *
 * The forms on this site post straight to the Forms API rather than rendering
 * an embedded HubSpot form, so nothing was loading this script — which meant
 * no `hubspotutk` cookie, and with no cookie HubSpot cannot join a submission
 * to the visitor's session. Every contact was landing under "Offline Sources"
 * with no original-source data at all.
 *
 * With this in place the forms can pass `context.hutk` and HubSpot resolves
 * the real source itself, independently of our own attribution capture.
 */
const HubSpotTracking = () => (
  <Script
    id="hs-script-loader"
    src="//js-eu1.hs-scripts.com/147789375.js"
    strategy="afterInteractive"
    async
    defer
  />
);

export default HubSpotTracking;
