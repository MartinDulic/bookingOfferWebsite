import React from 'react'

const BodyText = ({className, children}) => {
  return (
    <p className={`${className} leading-relaxed text-lg sm:text-xl sm:text-justify`}>
      {children}
    </p>
  )
}

export default BodyText