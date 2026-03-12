"use client";
import { useState, useEffect } from "react";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "granted") {
      activateTracking();
    }
  }, []);

  const activateTracking = () => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "cookieConsent", true);
      window.clarity("consentv2", {
        ad_Storage: "granted",
        analytics_Storage: "granted"
      });
    }
    // If using GA/GTM, trigger their consent here too
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "granted");
    setShowBanner(false);
    activateTracking();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "denied");
    setShowBanner(false);
    // Clarity stays in 'anonymous' mode by default
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] p-6 bg-white border border-neutral-200 shadow-2xl rounded-sm md:max-w-xl md:left-auto">
      <p className="text-lg font-bold text-neutral-900">Kolačići i privatnost</p>
      <p className="mt-2 text-sm text-neutral-600">
        Koristimo kolačiće kako bismo poboljšali vaše iskustvo i osigurali da naša stranica radi ispravno. 
        Klikom na "Prihvati", pristajete na našu upotrebu kolačića.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-primary text-white font-semibold rounded-xs hover:bg-primary-600 transition-colors"
        >
          Prihvati sve
        </button>
        <button
          onClick={handleDecline}
          className="px-6 py-2 bg-neutral-100 text-neutral-700 font-semibold rounded-xs hover:bg-neutral-200 transition-colors"
        >
          Odbij
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;