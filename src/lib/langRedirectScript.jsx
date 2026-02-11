import Script from 'next/script';

const LanguageRedirectScript = () => {
  return (
    <Script id="language-redirect" strategy="beforeInteractive">
      {`
        (function() {
          try {
            if (window.location.pathname === '/') {
              var lang = (navigator.languages && navigator.languages[0]) || navigator.language;
              var langCode = lang.split('-')[0];
              var target = langCode === 'hr' ? '/hr' : '/en';
              window.location.replace(target);
            }
          } catch (e) {
            console.error("Language redirect failed:", e);
          }
        })();
      `}
    </Script>
  );
};

export default LanguageRedirectScript;