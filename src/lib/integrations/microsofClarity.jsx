import Script from 'next/script';

const MicrosoftClarity = () => {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);

          // Check local storage immediately on script load
          const consent = localStorage.getItem("cookie-consent");
          if (consent === "granted") {
          }
            c[a]("consentv2", {
              ad_Storage: "granted",
              analytics_Storage: "granted"
            });
        })(window, document, "clarity", "script", "v8nubzutzz");
      `}
    </Script>
  );
};

export default MicrosoftClarity