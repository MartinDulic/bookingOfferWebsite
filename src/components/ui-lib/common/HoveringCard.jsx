import React from 'react'

const HoveringCard = ({ className, children, ...props }) => {
  return (
    <div 
      className={`${className} z-10 absolute transition-all duration-200`}
      {...props}
    >
      {children}
    </div>
  )
}

export default HoveringCard