"use client";
import { trackCTAClick } from '@/lib/trackCtaClickGa';
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import { useFeatureValue } from "@growthbook/growthbook-react";
import { useGrowthBook } from "@growthbook/growthbook-react";

const Cta = ({className, language = "hr"}) => {
  const gb = useGrowthBook();
  const variant = gb.getFeatureValue("conversion-funnel", "contact"); 
  // const variant = useFeatureValue("conversion-funnel", "contact"); 

  if(variant == "contact") {
    return (
      <Link onClick={() => trackCTAClick("standardCta")} href={language == "hr" ? "/hr/kontakt" : "/en/contact"} className={`${className} flex 
        text-xl xs:text-2xl sm:text-3xl text-white font-semibold bg-primary rounded-xs
        hover:scale-105 transition-transform duration-300 ease-in-out`}
      >
        <div className='px-5 py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-4 min-w-fit'>{language == "hr" ? "Kontaktirajte Nas" : "Contact us"}</div>
        <div className='px-3 py-2 xs:px-4 sm:px-6 flex-1 bg-primary-600 flex items-center justify-center rounded-xs'>
          <RiArrowRightLine className='text-3xl sm:text-4xl' />
        </div>
      </Link>
    )
  }

  return (
    <Link onClick={() => trackCTAClick("standardCta")} href={language == "hr" ? "/hr/procjena" : "/en/estimate"} className={`${className} flex w-fit
        text-xl xs:text-2xl sm:text-3xl text-white font-semibold bg-primary rounded-xs
        hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <span className='w-57 xs:w-69 sm:w-83 px-5 py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-4 text-balance'>{language == "hr" ? "Zatražite Besplatnu Procjenu Zarade" : "Get My Free Earning Estimate"}</span>
      <div className='px-3 py-2 xs:px-4 sm:px-6 flex-shrink-0 bg-primary-600 flex items-center justify-center rounded-xs'>
        <RiArrowRightLine className='text-3xl sm:text-4xl' />
      </div>
    </Link>
  )
}

export default Cta