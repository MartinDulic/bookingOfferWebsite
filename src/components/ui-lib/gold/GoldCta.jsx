"use client";
import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { trackCtaClick } from "@/lib/trackingUtils";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

/**
 * The split gold button: label block plus a darker arrow block.
 * Sized to its label at every width — stretching it would open a gap between
 * the text and the arrow. Callers centre it; see CtaWithFud.
 */
const GoldCta = ({
  // href = "/hr/kontakt",
  href = "#atf",
  label = "Zatražite besplatnu analizu",
  event = "contactCta",
  className = "",
}) => {
  const smoothScrollTo = useSmoothScroll(0);
  const isHash = href.startsWith("#");

  // next/link swallows a same-page hash click once the URL already carries that
  // hash — it pushes an identical route and never scrolls. Drive hash targets
  // ourselves so every CTA on the page keeps working.
  const handleClick = (e) => {
    trackCtaClick(event);
    if (isHash) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  const Component = isHash ? "a" : Link;

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={`group inline-flex max-w-full items-stretch overflow-hidden rounded-xs
      bg-gold transition-colors duration-200 hover:bg-gold-dark ${className}`}
    >
      <span className="px-5 py-4 text-[clamp(1rem,0.3vw+0.95rem,1.125rem)] font-bold tracking-[-0.015em] text-ink sm:px-7 sm:py-[1.125rem]">
        {label}
      </span>
      <span className="flex shrink-0 items-center justify-center bg-gold-dark px-4 text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-gold sm:px-[1.125rem]">
        <RiArrowRightLine className="text-2xl transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Component>
  );
};

export default GoldCta;
