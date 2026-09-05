"use client";
import { trackCtaClick } from '@/lib/trackingUtils';
import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa";

const CallCta = ({className = "", language = "hr"}) => {
  return (
    <Link
      onClick={() => trackCtaClick("headerCta")}
      href={language == "hr" ? "/hr/kontakt" : "/en/contact"}
      className={`${className}
        flex items-center gap-2 text-sm font-medium text-cream
        transition-colors duration-200 hover:text-white
        lg:gap-[0.5625rem] lg:text-[0.9375rem]`}
    >
      <FaPhone className="text-[0.875rem] text-gold lg:text-[0.9375rem]" />
      <span className='lg:hidden'>Nazovi</span>
      <span className='hidden lg:inline'>+385 99 203 2607</span>
    </Link>
  )
}

export default CallCta
