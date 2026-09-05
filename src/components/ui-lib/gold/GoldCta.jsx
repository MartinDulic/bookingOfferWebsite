"use client";
import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { trackCtaClick } from "@/lib/trackingUtils";

/**
 * The split gold button: label block plus a darker arrow block.
 * Sized to its label at every width — stretching it would open a gap between
 * the text and the arrow. Callers centre it; see CtaWithFud.
 */
const GoldCta = ({
  href = "/hr/kontakt",
  label = "Zatražite besplatnu analizu",
  event = "contactCta",
  className = "",
}) => (
  <Link
    href={href}
    onClick={() => trackCtaClick(event)}
    className={`group inline-flex max-w-full items-stretch overflow-hidden rounded-xs
      bg-gold transition-colors duration-200 hover:bg-gold-dark ${className}`}
  >
    <span className="px-5 py-4 text-[clamp(1rem,0.3vw+0.95rem,1.125rem)] font-bold tracking-[-0.015em] text-ink sm:px-7 sm:py-[1.125rem]">
      {label}
    </span>
    <span className="flex shrink-0 items-center justify-center bg-gold-dark px-4 text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-gold sm:px-[1.125rem]">
      <RiArrowRightLine className="text-2xl transition-transform duration-200 group-hover:translate-x-1" />
    </span>
  </Link>
);

export default GoldCta;
