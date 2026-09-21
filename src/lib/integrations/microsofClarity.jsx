import Script from 'next/script';

/**
 * Microsoft Clarity.
 *
 * Consent is granted unconditionally — the banner is disabled (see
 * consentDefaultScript.jsx), so there is no visitor choice to read. The
 * consent-aware version is kept commented out below: restoring it is a matter
 * of swapping the two blocks back and re-enabling <CookieConsentBanner /> in
 * layout.js.
 */
const MicrosoftClarity = () => {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);

          c[a]("consentv2", {
            ad_Storage: "granted",
            analytics_Storage: "granted"
          });

          // --- Consent-aware version, disabled ---------------------------
          // var ads = false, analytics = false;
          // try {
          //   var raw = localStorage.getItem("cookie-consent-v2");
          //   if (raw) {
          //     var parsed = JSON.parse(raw);
          //     var cats = (parsed && parsed.categories) || {};
          //     ads = cats.ad_storage === true;
          //     analytics = cats.analytics_storage === true;
          //   } else if (localStorage.getItem("cookie-consent") === "granted") {
          //     ads = true; analytics = true;
          //   }
          // } catch (e) {}
          //
          // if (ads || analytics) {
          //   c[a]("consentv2", {
          //     ad_Storage: ads ? "granted" : "denied",
          //     analytics_Storage: analytics ? "granted" : "denied"
          //   });
          // }
          // ----------------------------------------------------------------
        })(window, document, "clarity", "script", "v8nubzutzz");
      `}
    </Script>
  );
};

export default MicrosoftClarity
