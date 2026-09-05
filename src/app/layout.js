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
import CookieConsentBanner from "@/components/CookieConsentBanner";
import MetaPixel from "@/lib/integrations/metaPixel";

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
  title: "PrimeBooker - Agencija za Iznajmljivanje i Upravljanje Nekretninama",
  description: "Iskoristite puni potencijal svog smještaja. Uz PrimeBooker ostvarite maksimalnu popunjenost i zaradu. Besplatno profesionalno fotografiranje za nove klijente!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
            __html: `
              if (window.location.pathname === '/' || window.location.pathname === '') {
                window.location.replace('/hr');
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
        <GtmScript />
        <MicrosoftClarity />
        {/* <GoogleAnalytics /> */}
        <MetaPixel />
      </head>
      <body
        className={`${radioCanada.variable} ${libreFranklin.variable} antialiased font-default`}
      >
        <GtmNoscript />
        <GrowthBookProvider >
          {children}
        </GrowthBookProvider>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
