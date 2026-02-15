import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-LMNG1Q9LL5" 
        strategy="worker" 
      />
      <Script id="google-analytics" strategy="worker">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LMNG1Q9LL5');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics