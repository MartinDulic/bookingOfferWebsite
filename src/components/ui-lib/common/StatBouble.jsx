import React from 'react'
import Card from './Card'

const StatBouble = ({stat, text}) => {
  return (
    <Card className='p-4 font-default bg-white border-neutral-200 rounded-sm shadow-md text-center'>
      <div className='text-primary text-2xl font-bold'>{stat}</div>
      <div className='text-lg text-neutral-800'>{text}</div>
    </Card>
  )
}

export default StatBouble