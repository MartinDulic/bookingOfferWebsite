import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className={`uppercase mx-4 pt-4 text-3xl xs:text-4xl sm:text-5xl font-title font-bold text-neutral-800 ${className}`}>
      {children}
    </div>
  )
}

export default Title