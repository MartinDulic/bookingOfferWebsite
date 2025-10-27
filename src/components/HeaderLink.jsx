"use client";
import Link from 'next/link';
import React from 'react';

const HeaderLink = ({ href, children, className = ''}) => {

  return (
    <Link 
      href={href} 
      className={`cursor-pointer text-neutral-900 font-semibold
      transition-transform transform duration-300 hover:scale-110 hover:text-primary ${className}`}
    >
      {children} 
    </Link>
  );
};

export default HeaderLink;