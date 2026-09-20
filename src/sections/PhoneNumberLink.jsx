"use client"
import { trackCallIntent } from '@/lib/trackingUtils';
import React from 'react'

/**
 * The inline phone number used inside contact/estimate copy.
 *
 * Deduplication now lives in trackCallIntent and is keyed to the session, so a
 * visitor who clicks the header button and then this link is counted once.
 * The old per-mount ref reset on every route change.
 */
const PhoneNumberLink = ({ placement = "contact_section" }) => {
  const handleCallClick = (e) => {
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    trackCallIntent({ placement, method: isMobile ? "phone" : "whatsapp" });

    if (!isMobile) {
      e.preventDefault();
      window.open(
        "https://wa.me/385992032607?text=Pozdrav,%20zanimaju%20me%20vaše%20usluge.",
        "_blank",
        "noopener"
      );
    }
  };

  return (
    <a href='tel:+385992032607' onClick={handleCallClick} className='font-bold text-primary underline'>+385 99 203 2607</a>
  )
}

export default PhoneNumberLink
