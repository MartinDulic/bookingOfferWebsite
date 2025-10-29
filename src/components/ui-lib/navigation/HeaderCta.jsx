import Link from 'next/link'
import React from 'react'

const HeaderCta = ({className}) => {
  return (
    <Link href="/kontakt" className={`${className} 
      text-2xl text-white font-semibold bg-primary rounded-xs border-2 border-primary-600
      hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <div className='px-5 py-2'>Kontakt</div>
    </Link>
  )
}

export default HeaderCta