"use client";
import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownMenu = ({text, children, className}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${className} w-full`}>
      {/* Category header that toggles the dropdown */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pl-4 w-full min-h-20 flex items-center cursor-pointer text-neutral-900 font-semibold uppercase
          transition-colors duration-300 hover:text-primary"
      >
        {text} <IoMdArrowDropdown className='ml-2 text-xl' />
      </button>
      
      {/* Dropdown content */}
      <div className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        {children} 
      </div>
    </div>
  )
}

export default DropdownMenu