import { Libre_Franklin, Merriweather_Sans, Radio_Canada, Rethink_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/integrations/googleAnalytics";
import MicrosoftClarity from "@/lib/integrations/microsofClarity";
import GrowthBookProvider from "@/lib/integrations/growthBookProvider";
import AntiFlicker from "@/lib/integrations/antiFlicker";
import LanguageRedirectScript from "@/lib/langRedirectScript";
import Script from "next/script";

// const libreFranklin = Libre_Franklin({
//   variable: "--font-libre-franklin",
//   subsets: ["latin"],
// });

// const rethinkSans = Rethink_Sans({
//   variable: "--font-rethink-sans",
//   subsets: ["latin"],
// });

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["700"],
  display: 'swap',
});

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
        
        {/* Add other external integrations too */}
        {/* <link rel="preconnect" href="https://www.googletagmanager.com" /> */}
        
        {/* <AntiFlicker /> */}
        <MicrosoftClarity />
        <GoogleAnalytics />
      </head>
      <body
        className={`${merriweatherSans.variable} ${radioCanada.variable} antialiased font-default`}
      >
        <GrowthBookProvider >
          {children}
        </GrowthBookProvider>
      </body>
    </html>
  );
}
