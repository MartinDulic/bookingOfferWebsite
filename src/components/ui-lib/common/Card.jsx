import React from 'react'

const Card = ({className, children, borderColor}) => {
  return (
    <div className={`${className} rounded-sm shadow-lg border ${borderColor} m-4 `}>
      {children}
    </div>
  )
}

export default Card