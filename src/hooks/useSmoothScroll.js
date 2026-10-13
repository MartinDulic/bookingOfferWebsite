"use client";
import { useCallback } from "react";

// The fixed-header offset comes from `scroll-padding-top` on <html> (globals.css),
// which scrollIntoView respects. Per-target tweaks: add a `scroll-mt-*` class.
export function useSmoothScroll() {
  const smoothScrollTo = useCallback((href) => {
    if (!href) return;

    const targetId = href.replace(/^#/, "");
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Update URL without reloading the page
    if (history.pushState) {
      history.pushState(null, "", `#${targetId}`);
    } else {
      window.location.hash = `#${targetId}`;
    }
  }, []);

  return smoothScrollTo;
}
