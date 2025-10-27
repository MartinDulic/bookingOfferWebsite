"use client";
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownLink = ({ href, children, className = ''}) => {

  return (
    <div 
      href={href} 
      className={`cursor-pointer text-neutral-900 font-semibold
      transition-transform transform duration-300 hover:scale-110 hover:text-neutral-700 ${className}`}
    >
      {children} <IoMdArrowDropdown className='inline-block text-lg'/>
    </div>
  );
};

export default DropdownLink;