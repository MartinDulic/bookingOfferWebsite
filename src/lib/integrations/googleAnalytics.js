import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LMNG1Q9LL5"></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LMNG1Q9LL5');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics