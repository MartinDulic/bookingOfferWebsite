import React from 'react'

const BodyText = ({className, children}) => {
  return (
    <div className={`${className} leading-relaxed text-lg sm:text-xl sm:text-justify`}>
      {children}
    </div>
  )
}

export default BodyText