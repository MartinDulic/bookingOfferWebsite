import React from 'react'

const NumberedStep = ({number, title, text}) => {
  return (
    <div className='font-default max-w-sm text-center'>
      <div className='text-3xl font-bold mb-4 font-title'>{number}.</div>
      <p className='text-2xl uppercase text-gray-800 font-bold font-title'>{title}</p>
      <p className='mt-2 text-lg text-gray-800 text-justify'>{text}</p>
    </div>
  )
}

export default NumberedStep