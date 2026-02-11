"use client";
import { GrowthBook, GrowthBookProvider as ActualProvider } from "@growthbook/growthbook-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Initialize GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-XMk9xUOPk7FcLilC",
  enableDevMode: true,
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    // Send to GA4
    window.gtag("event", "experiment_viewed", {
      event_category: "experiment",
      experiment_id: experiment.key,
      variation_id: result.key,
    });
    // Send to Clarity
    if (window.clarity) {
      window.clarity("set", "experiment", experiment.key);
      window.clarity("set", "variation", result.key);
    }
  }
});

export default function GrowthBookWrapper({ children }) {
  const pathname = usePathname()
  useEffect(() => {
    // Get or create ID
    let id = localStorage.getItem("gb_visitor_id");
    if (!id) {
      id = Math.random().toString(36).substring(2, 15);
      localStorage.setItem("gb_visitor_id", id);
    }

    // Load features and set attributes
    gb.setAttributes({
      id: id,
      url: window.location.href,
      path: window.location.pathname,
    });
    
    gb.init();
  }, [pathname]);

  return (
    <ActualProvider growthbook={gb}>
      {children}
    </ActualProvider>
  );
}