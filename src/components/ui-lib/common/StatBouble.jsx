import React from 'react'
import Card from './Card'

const StatBouble = ({stat, text, className}) => {
  return (
    <div className={`p-3 flex flex-col items-cneter justify-evenly text-center
      font-default bg-neutral-900 border-neutral-800 rounded-sm shadow-md border 
      ${className}`}
    >
      <div className='text-white text-2xl font-bold'>{stat}</div>
      <div className='text-lg text-neutral-300'>{text}</div>
    </div>
  )
}

export default StatBouble