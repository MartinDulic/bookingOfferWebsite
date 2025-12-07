import React from 'react'
import Cta from '@/components/ui-lib/common/Cta'
import IconedText from '@/components/ui-lib/common/IconedText'
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CtaFudReduced = ({className, ctaClassName}) => {
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
          text={"100% Besplatan Poziv"} 
          className={"font-semibold "} 
          textClassName={"sm:text-xl"}
        />
      </div>
    </div>
  )
}

export default CtaFudReduced