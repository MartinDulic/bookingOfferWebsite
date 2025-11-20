import React from 'react'
import Card from './Card'

const StatBouble = ({stat, text, className}) => {
  return (
    <div className={`p-4 flex flex-col items-cneter justify-evenly text-center
      font-default bg-white border-neutral-200 rounded-sm shadow-md border 
      ${className}`}
    >
      <div className='text-primary text-2xl font-bold'>{stat}</div>
      <div className='text-lg text-neutral-800'>{text}</div>
    </div>
  )
}

export default StatBouble