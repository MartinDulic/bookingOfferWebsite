"use client";
import React from 'react';
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { trackCtaClick } from "@/lib/trackingUtils";

// Unstyled hash link that smooth-scrolls via useSmoothScroll (header offset
// comes from scroll-padding-top in globals.css). Lets server components use it.
// Pass `event` (and optionally `placement`) to track the click as a CTA.
const SmoothScrollLink = ({
  href,
  event,
  placement = '',
  children,
  className = '',
  ...props
}) => {
  const smoothScrollTo = useSmoothScroll();

  const handleClick = (e) => {
    e.preventDefault();
    if (event) trackCtaClick(event, placement);
    smoothScrollTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
