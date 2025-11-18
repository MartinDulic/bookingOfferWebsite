import React from 'react'
import Link from 'next/link'

const NavigationLink = ({ href, text, className = "", icon, ...props }) => {
  return (
    <Link 
      href={href} 
      className={`
        inline-flex items-center cursor-pointer font-semibold 
        transition-all duration-200  active:scale-95
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