import React from 'react'

const BodyText = ({className, children}) => {
  return (
    <p className={`${className} px-4 leading-relaxed text-lg text-justify`}>
      {children}
    </p>
  )
}

export default BodyText