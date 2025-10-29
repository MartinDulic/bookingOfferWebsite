import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className={`uppercase pb-4 pt-8 text-3xl sm:text-4xl lg:text-5xl font-title font-semibold text-neutral-800 ${className}`}>
      {children}
    </div>
  )
}

export default Title