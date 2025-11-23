import React from 'react'

const Differentiator = ({title, text}) => {
  return (
    <div className='flex flex-col gap-4 max-w-sm
    bg-neutral-900 text-white font-lato rounded-sm p-6 shadow-md
      hover:scale-105 transition-transform duration-300 '
    >
      <h3 className='text-2xl font-bold font-title'>{title}</h3>
      <p className='text-gray-300 leading-relaxed font-default text-justify'>{text}</p>
    </div>
  )
}

export default Differentiator