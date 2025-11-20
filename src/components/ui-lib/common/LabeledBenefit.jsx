import React from 'react'

const LabeledBenefit = ({number, subtitle, text, className}) => {
  return (

    <div className='flex flex-col '>
      <div className={`text-neutral-800 text-default flex items-center ${className}`}>
        <div className='bg-green-200 size-10 rounded-full flex items-center justify-center'>
          <div className='text-green-700 text-lg'>{number}</div>
        </div>
        <div className='pl-4 text-lg font-semibold'>{subtitle}</div>
      </div>
      <div className='text-neutral-800 mt-4 text-justify'>
        {text}
      </div>
    </div>
  )
}

export default LabeledBenefit