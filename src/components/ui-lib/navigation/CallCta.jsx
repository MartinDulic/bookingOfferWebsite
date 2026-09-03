"use client";
import { trackCtaClick } from '@/lib/trackingUtils';
import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa";

const CallCta = ({className, language = "hr"}) => {
  return (
    <Link 
      onClick={() => trackCtaClick("headerCta")} 
      href={language == "hr" ? "/hr/kontakt" : "/en/contact"}
      className={`${className} 
        flex items-center gap-2 
        text-lg text-white font-semibold rounded-xs
        hover:scale-105  hover:border-white transition-all duration-300 ease-in-out`}
    >
      <FaPhone />
      <div className='lg:hidden'>Nazovi</div>
      <div className='hidden lg:inline underline'>+385 99 203 2607</div>
    </Link>
  )
}

export default CallCta