"use client"
import { trackCallIntent } from '@/lib/trackCallIntent'
import React from 'react'

const PhoneNumberLink = () => {
  return (
    <a href='tel:+385992032607' onClick={() => trackCallIntent()} className='font-bold text-primary underline'>+385 99 203 2607</a>
  )
}

export default PhoneNumberLink