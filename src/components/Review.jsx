import React from 'react'
import { FaStar } from "react-icons/fa6";
import Image from 'next/image';

const Review = ({href, image=null, guestName, guestCountry, apartment, text, sourceIcon, className}) => {
  return (
    <a 
      href={href} 
      className={`${className} p-4 flex flex-col 
        rounded border 
      `}
    >

      <div className='flex gap-4'>
        <div className='text-neutral-600 '>
          <div className="size-12 ">
            <Image
              src={image}
              alt="Guest Image"
              width={0}
              height={0}
              className="object-contain h-full w-auto rounded-full"
            />
          </div>
          <div>{guestName}</div>
          <div>{guestCountry}</div>
        </div>
        
        <div>
          <div>{apartment}</div>
          <div className='flex'>
            <div className='text-2xl'>{sourceIcon}</div>
            <div className='flex gap-1 text-amber-400 text-2xl '>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>

      <p className='italic'>
        {text}
      </p>
    </a>
  )
}

export default Review