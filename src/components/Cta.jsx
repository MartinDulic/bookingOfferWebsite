import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";


const Cta = ({className}) => {
  return (
    <Link href="/kontakt" className={`${className} flex 
      text-xl xs:text-2xl sm:text-3xl text-white font-semibold rounded bg-primary
      hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <div className='px-5 py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-4 min-w-fit'>Kontaktirajte Nas</div>
      <div className='px-3 py-2 xs:px-4 sm:px-6 flex-1 bg-primary-600 flex items-center justify-center rounded'>
        <RiArrowRightLine className='text-3xl sm:text-4xl' />
      </div>
    </Link>
  )
}

export default Cta