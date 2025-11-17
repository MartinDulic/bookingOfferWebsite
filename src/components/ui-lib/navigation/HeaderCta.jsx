import Link from 'next/link'
import React from 'react'

const HeaderCta = ({className}) => {
  return (
    <Link href="/kontakt" className={`${className} 
      text-xl text-white font-semibold bg-linear-to-br from-0% to-60% from-primary-600 to-primary rounded-xs border border-primary-600
      hover:scale-105 transition-transform duration-300 ease-in-out`}
    >
      <div className='px-4 py-2'>Kontakt</div>
    </Link>
  )
}

export default HeaderCta