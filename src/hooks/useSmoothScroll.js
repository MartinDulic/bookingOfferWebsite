"use client";
import { useCallback } from "react";

export function useSmoothScroll(defaultOffset = 80) {
  const smoothScrollTo = useCallback(
    (href, offset = defaultOffset) => {
      if (!href) return;

      const targetId = href.replace(/^#/, "");
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL without reloading the page
      if (history.pushState) {
        history.pushState(null, "", `#${targetId}`);
      } else {
        window.location.hash = `#${targetId}`;
      }
    },
    [defaultOffset]
  );

  return smoothScrollTo;
}
