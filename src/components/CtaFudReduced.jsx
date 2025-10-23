import React from 'react'
import Cta from '@/components/Cta'
import IconedText from '@/components/IconedText'
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CtaFudReduced = ({className}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <Cta className="mb-2 w-fit" />
      <div className="flex gap-4 px-4 text-neutral-200">
        <IconedText 
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
        />
      </div>
    </div>
  )
}

export default CtaFudReduced