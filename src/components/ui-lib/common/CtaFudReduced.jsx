"use client"
import React from 'react'
import Cta from '@/components/ui-lib/common/Cta'
import IconedText from '@/components/ui-lib/common/IconedText'
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CtaFudReduced = ({className, ctaClassName, fudsClassName, fudClassName}) => {

  return (
    <div className={`${className} flex flex-col items-center`}>
      <Cta className={`${ctaClassName} mb-2 w-fit`} />
      <div className={` flex gap-4 px-4 ${fudsClassName}`} >
        <IconedText 
          icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl '/>} 
          text={"Neobvezujuće"} 
          className={`font-semibold ${fudClassName}`} 
          textClassName={"sm:text-xl"}
        />
        <IconedText 
          icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} 
          text={"Konkretni savjeti"} 
          className={`font-semibold ${fudClassName}`} 
          textClassName={"sm:text-xl"}
        />
      </div>
    </div>
  )
}

export default CtaFudReduced