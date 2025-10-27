import React from 'react'
import { FaStar } from "react-icons/fa6";

const Testimonial = ({className, image, alt, name, info, text}) => {
  return (
    <div className={`${className} p-6 flex flex-col sm:flex-row items-stretch  bg-primary-50/95 backdrop-blur-2xl border border-neutral-200 rounded-xs shadow-lg 2xl:shadow-black/40 `}>
      <div className=' sm:mr-8 mb-4 sm:mb-0 w-full sm:w-[160px]  text-center flex sm:flex-col items-center sm:justify-center gap-6 sm:gap-4 '>
        <div className="size-20 2xl:size-24 rounded-full">
          <img src={image} alt={alt} className="rounded-full shadow-lg"/>
        </div>
        <div className='flex flex-col items-start sm:items-center '>
          <div className="text-xl font-semibold text-primary-700 ">{name}</div>
          <div className='text-primary-600 text-start sm:text-center'>{info}</div>
          <div className='flex sm:hidden gap-1 text-amber-400 text-2xl '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
      <div className='flex-3 flex flex-col gap-2'>
        <div className='mt-2 hidden sm:flex gap-1 text-amber-400 text-2xl '>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className='flex-1 flex items-center'>
          <p className="text-primary-700 italic text-xl">"{text}"</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial