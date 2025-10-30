import React from 'react'
import Link from 'next/link'

const NavigationLink = ({ href, text, className = "", icon, ...props }) => {
  return (
    <Link 
      href={href} 
      className={`
        inline-flex items-center cursor-pointer text-neutral-700 font-semibold 
        transition-all duration-200 hover:text-primary active:scale-95
        ${className}
      `}
      {...props}
    >
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      {text} 
    </Link>
  )
}

export default NavigationLink