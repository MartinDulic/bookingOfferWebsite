import { Libre_Franklin, Radio_Canada } from "next/font/google";
// import { Merriweather_Sans, Rethink_Sans, Alata } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/integrations/googleAnalytics";
import MicrosoftClarity from "@/lib/integrations/microsofClarity";
import GrowthBookProvider from "@/lib/integrations/growthBookProvider";
import AntiFlicker from "@/lib/integrations/antiFlicker";
import LanguageRedirectScript from "@/lib/langRedirectScript";
import Script from "next/script";
import GtmScript from "@/lib/integrations/gtmScript";
import GtmNoscript from "@/lib/integrations/gtmNoscript";
// Consent banner disabled — see ConsentDefaultScript. The component and its
// per-category logic (src/lib/consent.js) are kept for when it comes back.
// import CookieConsentBanner from "@/components/CookieConsentBanner";
import ConsentDefaultScript from "@/lib/integrations/consentDefaultScript";
import AttributionScript from "@/lib/integrations/attributionScript";
import HubSpotTracking from "@/lib/integrations/hubspotTracking";

// Body copy, eyebrows, UI — everything that is not a title.
const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// const rethinkSans = Rethink_Sans({
//   variable: "--font-rethink-sans",
//   subsets: ["latin"],
// });

// const merriweatherSans = Merriweather_Sans({
//   variable: "--font-merriweather-sans",
//   subsets: ["latin"],
//   weight: ["700"],
//   display: 'swap',
// });

// const alata = Alata({
//   variable: "--font-alata",
//   subsets: ["latin"],
//   weight: ["400"],
//   display: 'swap',
// });

// Titles only. Radio Canada tops out at 700 — there is no 800 to request.
const radioCanada = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata = {
  title: "PrimeBooker - Agencija za Iznajmljivanje i Upravljanje Smještajem",
  description: "Iskoristite puni potencijal svog smještaja. Uz PrimeBooker ostvarite maksimalnu popunjenost i zaradu. Besplatan početak suradnje!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
            __html: `
              // Carry the query string and hash across the redirect. A bare
              // replace('/hr') silently discards everything after the "?",
              // which destroys gclid, fbclid, utm_* and our own pb_src flyer
              // codes for anyone landing on the bare domain — the visit then
              // looks like direct traffic and the ad that paid for it gets no
              // credit.
              if (window.location.pathname === '/' || window.location.pathname === '') {
                window.location.replace('/hr' + window.location.search + window.location.hash);
              }
            `
          }} />
        {/* <LanguageRedirectScript/> */}
        {/* <Script  id="language-redirect" strategy="beforeInteractive">
          {`try {
              if (window.location.pathname === '/') {
                window.location.replace("/hr");
              }
            } catch (e) {
              console.error("Language redirect failed:", e);
            }
          `}
        </Script> */}

        {/* Helps with some "Best Practice" checks */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Scroll-reveal animations are JS driven; without JS the content must still show. */}
        <noscript>
          <style>{`.pb-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        
        {/* <AntiFlicker /> */}
        {/* Order matters: consent and attribution both push to dataLayer before
            gtm.js loads, so the values are in GTM's data model by the
            Initialization trigger. */}
        <ConsentDefaultScript />
        <AttributionScript />
        <GtmScript />
        <MicrosoftClarity />
        <HubSpotTracking />
        {/* GA4 runs through GTM. The Meta pixel now lives only in the GTM
            container — having it here as well fired every PageView twice. */}
        {/* <GoogleAnalytics /> */}
      </head>
      <body
        className={`${radioCanada.variable} ${libreFranklin.variable} antialiased font-default`}
      >
        <GtmNoscript />
        <GrowthBookProvider >
          {children}
        </GrowthBookProvider>
        {/* <CookieConsentBanner /> */}
      </body>
    </html>
  );
}
