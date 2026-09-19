"use client";
import { trackCtaClick } from '@/lib/trackingUtils';
import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa";

/**
 * `alwaysShowNumber` drops the narrow-screen "Nazovi" label and keeps the full
 * number at every width — for pages where calling us is the point rather than a
 * secondary header action.
 */
const CallCta = ({
  className = "",
  language = "hr",
  event = "headerCta",
  alwaysShowNumber = false,
}) => {
  return (
    <Link
      onClick={() => trackCtaClick(event)}
      href={"tel:+385992032607"}
      className={`${className}
        flex items-center gap-2 text-sm font-medium text-cream
        transition-colors duration-200 hover:text-white
        lg:gap-[0.5625rem] lg:text-[0.9375rem]`}
    >
      <FaPhone className="text-[0.875rem] text-gold lg:text-[0.9375rem]" />
      {alwaysShowNumber ? (
        <span>+385 99 203 2607</span>
      ) : (
        <>
          <span className='lg:hidden'>Nazovi</span>
          <span className='hidden lg:inline'>+385 99 203 2607</span>
        </>
      )}
    </Link>
  )
}

export default CallCta
