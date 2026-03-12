"use client"
import { trackCallIntent } from '@/lib/gtmUtils';
import React, { useRef } from 'react'

const PhoneNumberLink = () => {
  // Ref persists for the duration of the component's lifecycle on the page
  const hasTrackedThisVisit = useRef(false);
  const handleCallClick = (e) => {
    if (!hasTrackedThisVisit.current) {
      trackCallIntent();
      hasTrackedThisVisit.current = true;
    }
    // 2. Check if the user is on a mobile device
    const isMobile = /iPhone|Android/i.test(navigator.userAgent);

    // 3. If not on mobile, prevent the default 'tel:' behavior and open WhatsApp
    if (!isMobile) {
      e.preventDefault();
      const whatsappUrl = "https://wa.me/385992032607?text=Pozdrav,%20zanimaju%20me%20vaše%20usluge.";
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <a href='tel:+385992032607' onClick={handleCallClick} className='font-bold text-primary underline'>+385 99 203 2607</a>
  )
}

export default PhoneNumberLink