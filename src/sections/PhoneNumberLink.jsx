"use client"
import handleCallClick from '@/lib/handleCallClick';
import React from 'react'

/**
 * The inline phone number used inside contact/estimate copy.
 *
 * Deduplication now lives in trackCallIntent and is keyed to the session, so a
 * visitor who clicks the header button and then this link is counted once.
 * The old per-mount ref reset on every route change.
 */
const PhoneNumberLink = ({ placement = "contact_section" }) => {
  return (
    <a href='tel:+385992032607' onClick={(e) => handleCallClick(e, placement)} className='font-bold text-primary underline'>+385 99 203 2607</a>
  )
}

export default PhoneNumberLink
