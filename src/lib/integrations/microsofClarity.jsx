import Script from 'next/script';

/**
 * Microsoft Clarity.
 *
 * The previous version had an `if (consent === "granted") { }` with an empty
 * body, then called consentv2 with everything granted regardless — so the
 * consent check did nothing at all. Consent is now read properly and Clarity
 * starts in its cookieless mode until the visitor accepts; CookieConsentBanner
 * calls clarity("consentv2", ...) on accept.
 */
const MicrosoftClarity = () => {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);

          var consent = null;
          try { consent = localStorage.getItem("cookie-consent"); } catch (e) {}

          if (consent === "granted") {
            c[a]("consentv2", {
              ad_Storage: "granted",
              analytics_Storage: "granted"
            });
          }
        })(window, document, "clarity", "script", "v8nubzutzz");
      `}
    </Script>
  );
};

export default MicrosoftClarity
