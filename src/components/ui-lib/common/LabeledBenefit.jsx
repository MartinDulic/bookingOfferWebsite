import React from 'react'

const LabeledBenefit = ({number, subtitle, text, className}) => {
  return (

    <div className='flex flex-col '>
      <div className={`text-neutral-800 text-default flex items-center ${className}`}>
        <div className='bg-green-200 size-10 rounded-full flex items-center justify-center flex-shrink-0'>
          <div className='text-green-700 text-lg 2xl:text-xl'>{number}</div>
        </div>
        <div className='pl-4 text-lg font-semibold 2xl:text-xl'>{subtitle}</div>
      </div>
      <div className='text-neutral-800 mt-4 text-justify 2xl:text-lg'>
        {text}
      </div>
    </div>
  )
}

export default LabeledBenefit