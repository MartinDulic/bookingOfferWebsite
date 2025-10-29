import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaAirbnb } from "react-icons/fa";

const SocialProofTag = ({className}) => {
  return (
    <div className={`${className} max-w-md mr-4 xs:mr-6 p-2 sm:px-4 sm:py-3 flex justify-between items-center gap-4 bg-primary-50/95 rounded-r-xs border border-neutral-300 shadow-md shadow-black/40 `}>
      <div className='flex items-center gap-1 sm:text-xl'>
        <div className='flex gap-1 text-amber-400 '>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <FaAirbnb className='text-2xl xs:text-3xl text-red-700'/>
        <p className='font-bold text-md text-primary-700 mt-0.5'>
          4.9/5
        </p>
      </div>
      <p className='font-bold text-md text-primary-700 mt-0.5 sm:text-xl'>
        115+ Recenzija
      </p>

    </div>
  )
}

export default SocialProofTag