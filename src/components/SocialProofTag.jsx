import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaAirbnb } from "react-icons/fa";

const SocialProofTag = ({className}) => {
  return (
    <div className={`${className} sm:max-w-sm p-2 flex justify-between items-center gap-4 bg-primary-50/90 rounded border border-neutral-300 shadow-md shadow-black/40 `}>
      <div className='flex items-center gap-1 '>
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
      <p className='font-bold text-md text-primary-700 mt-0.5'>
        115+ Recenzija
      </p>

    </div>
  )
}

export default SocialProofTag