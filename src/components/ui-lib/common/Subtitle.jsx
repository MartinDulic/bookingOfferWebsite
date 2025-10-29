import React from 'react'

const Subtitle = ({className, children}) => {
  return (
    <div className={`${className} mt-4 px-4 text-2xl font-title font-semibold`}>
      {children}
    </div>
  )
}

export default Subtitle