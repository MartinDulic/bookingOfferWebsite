import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className={`${className} mx-4 pt-8 text-4xl sm:text-5xl font-title font-bold text-neutral-800`}>
      {children}
    </div>
  )
}

export default Title