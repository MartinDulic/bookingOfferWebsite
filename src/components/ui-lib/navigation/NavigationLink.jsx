import React from 'react'
import Link from 'next/link'
const NavigationLink = ({href, text, className}) => {

  return (
    <Link 
      href={href} 
      className={`pl-4 w-full min-h-20 flex items-center cursor-pointer text-neutral-900 font-semibold
      transition-transform transform duration-300 hover:scale-110 hover:text-primary ${className}`}
    >
      {text} 
    </Link>
  )
}

export default NavigationLink