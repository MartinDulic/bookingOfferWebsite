// "use client";
// import {
//   GrowthBook,
//   GrowthBookProvider as ActualProvider,
// } from "@growthbook/growthbook-react";
// import { usePathname } from "next/navigation";
// import { useEffect } from "react";

// // Initialize GrowthBook instance
// const gb = new GrowthBook({
//   apiHost: "https://cdn.growthbook.io",
//   clientKey: "sdk-XMk9xUOPk7FcLilC",
//   enableDevMode: true,
//   subscribeToChanges: true,
//   stickyBucketAssignment: true,
//   trackingCallback: (experiment, result) => {
//     // Send to GA4
//     window.gtag?.("event", "experiment_viewed", {
//       event_category: "experiment",
//       experiment_id: experiment.key,
//       variation_id: result.key,
//     });

//     // Send to Clarity
//     if (window.clarity) {
//       window.clarity("set", "experiment", experiment.key);
//       window.clarity("set", "variation", result.key);
//     }
//   },
// });

// export default function GrowthBookWrapper({ children }) {
//   const pathname = usePathname();

//   useEffect(() => {
//     let id = localStorage.getItem("gb_visitor_id");

//     if (!id) {
//       id = Math.random().toString(36).substring(2, 15);
//       localStorage.setItem("gb_visitor_id", id);
//     }

//     gb.setAttributes({
//       id,
//       url: window.location.href,
//       path: window.location.pathname,
//     });

//     // 🔥 Load features and remove anti-flicker as soon as ready
//     gb.loadFeatures().then(() => {
//       document.documentElement.classList.remove("gb-flicker-control");
//       console.log("Gb loaded!")
//     });

//     // Optional: re-evaluate experiments on route change
//     gb.refreshFeatures();
//   }, [pathname]);

//   return <ActualProvider growthbook={gb}>{children}</ActualProvider>;
// }

"use client";
import { GrowthBook, GrowthBookProvider as ActualProvider } from "@growthbook/growthbook-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// 1. Import the static features
import staticFeatures from "../../../growthbook-features.json"; 

const gb = new GrowthBook({
  // 2. Pass the features directly
  features: staticFeatures, 
  enableDevMode: true,
  subscribeToChanges: true,
  // 3. Sticky Bucketing is now active
  stickyBucketAssignment: true, 
  trackingCallback: (experiment, result) => {
    window.gtag?.("event", "experiment_viewed", {
      experiment_id: experiment.key,
      variation_id: result.key,
    });
    if (window.clarity) {
      window.clarity("set", experiment.key, result.key);
    }
  },
});

export default function GrowthBookWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    let id = localStorage.getItem("gb_visitor_id");
    if (!id) {
      id = Math.random().toString(36).substring(2, 15);
      localStorage.setItem("gb_visitor_id", id);
    }

    gb.setAttributes({
      id,
      url: window.location.href,
      path: window.location.pathname,
    });

    // 4. NO NEED for gb.loadFeatures() anymore! 
    // Since features are passed in the constructor, they are ready immediately.
    document.documentElement.classList.remove("gb-flicker-control");
    
    // Optional: Only keep this if you want to check for updates *after* load
    // gb.refreshFeatures(); 
  }, [pathname]);

  return <ActualProvider growthbook={gb}>{children}</ActualProvider>;
}