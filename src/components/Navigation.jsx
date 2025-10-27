"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SmoothScrollLink from '@/components/SmoothScrollLink';
import Cta from './Cta';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use viewport height (what the user sees)
      const scrollThreshold = window.innerHeight * 0.6;
      
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      aria-label="Main navigation" 
      className={`z-10 fixed top-0 h-20 w-full grid grid-cols-3 items-center 
        bg-neutral-900 shadow-md transition-all ease-in-out duration-1000 
        ${isVisible ? " opacity-100 translate-y-0" : " opacity -translate-y-full"}
      `}
    >
      <div className='bg-red-400 '>
        <div className='relative h-20 w-44'>
          <Image fill={true} src={"images/temp/logo.png"} alt='Logo'/>
        </div>
      </div>
      <div className='bg-purple-400 hidden lg:flex lg:justify-center lg:items-center gap-16 text-xl text-white uppercase text-center'>
        <SmoothScrollLink href="#hero">Home</SmoothScrollLink>
        <SmoothScrollLink href="#why">Why take us</SmoothScrollLink>
        <SmoothScrollLink href="#how">How it works</SmoothScrollLink>
        <SmoothScrollLink href="#faq">FAQ</SmoothScrollLink>
      </div>
      <div className='bg-amber-400 flex-1/4 pr-4 flex justify-end'>
        <Cta/>
      </div>
    </nav>
  );
};

export default Navigation;