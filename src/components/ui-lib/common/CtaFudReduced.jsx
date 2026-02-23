"use client"
import React from 'react'
import Cta from '@/components/ui-lib/common/Cta'
import IconedText from '@/components/ui-lib/common/IconedText'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useGrowthBook } from "@growthbook/growthbook-react";

const CtaFudReduced = ({className, ctaClassName}) => {
  const gb = useGrowthBook();
  const variant = gb.getFeatureValue("conversion-funnel", "contact"); 
  // console.log("CTA FUD variant:", variant);
  const text = variant === "contact" ? "100% Besplatan Poziv" : "100% Besplatna Procjena";
  

  return (
    <div className={`${className} flex flex-col items-center`}>
      <Cta className={`${ctaClassName} mb-2 w-fit`} />
      <div className="flex gap-4 px-4 ">
        {/* <IconedText 
          icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} 
          text={"100% Besplatno"} 
          className={" font-semibold "}
          textClassName={"sm:text-xl"}
        />
        <IconedText 
          icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} 
          text={"8h - 20h"} 
          className={"font-semibold "} 
          textClassName={"sm:text-xl"}
        /> */}
        <IconedText 
          icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} 
          text={text} 
          className={"font-semibold "} 
          textClassName={"sm:text-xl"}
        />
      </div>
    </div>
  )
}

export default CtaFudReduced