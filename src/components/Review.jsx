import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';

const Review = ({href, image=null, guestName, guestCountry, apartment, text, sourceIcon, className}) => {
  return (
    <a 
      href={href} 
      className={`${className} p-4 relative flex flex-col gap-4 flex-1 sm:min-w-md basis-md max-w-xl
        rounded border hover:scale-105 transition-all duration-300
      `}
    >

      <div className='flex gap-4 justify-between'>
        <div className=' flex gap-2 '>
          <div className="size-16 sm:size-20 border-4 border-white rounded-full">
            <Image
              src={image}
              alt="Guest Image"
              width={0}
              height={0}
              className="object-contain h-full w-auto rounded-full "
            />
          </div>
          <div className='flex flex-col justify-center '>
            <div className='font-semibold text-lg sm:text-xl text-neutral-800'>{guestName}</div>
            <div className='text-neutral-600 text-sm'>{guestCountry}</div>
          </div>
        </div>
        
        <div className='flex flex-col gap-2 items-center justify-center w-32 xs:w-36'>
          <div className='flex gap-1 justify-center '>
            {/* <div className='text-xl'>{sourceIcon}</div> */}
            <div className='flex gap-1 mt-1 -mb-1 text-amber-400 text-xl '>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className='text-sm text-center'>{apartment}</div>
        </div>
      </div>

      <p className='h-full py-4 text-lg italic text-primary-700 text-justify  '>
        "{text}"
      </p>
      <div className='absolute text-3xl self-end bottom-2 right-2'>{sourceIcon}</div>
    </a>
  )
}

export default Review