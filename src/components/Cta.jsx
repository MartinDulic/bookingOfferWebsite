import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";


const Cta = ({className}) => {
  return (
    <Link href="/kontakt" className={`${className} flex 
      text-xl xs:text-2xl text-white font-semibold rounded  bg-primary
        shadow-xl shadow-black/40 `}>
      <div className='px-3 py-2 min-w-fit'>Kontaktirajte Nas</div>
      <div className='p-2 flex-1 bg-primary-600 flex items-center justify-center'>
        <RiArrowRightLine className='text-3xl' />
      </div>
    </Link>
  )
}

export default Cta