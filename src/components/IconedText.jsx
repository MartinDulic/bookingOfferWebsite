import React from 'react'

const IconedText = ({className, icon, text, textClassName}) => {
  return (
    <div className={`${className} flex gap-2 items-center`}>
      <div>{icon}</div>
      <p className={`${textClassName}`}>{text}</p>      
    </div>
  )
}

export default IconedText