"use client";
import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownMenu = ({text, children, className}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${className} w-full bg-neutral-900`}>
      {/* Category header that toggles the dropdown */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pl-4 w-full min-h-12 flex items-center cursor-pointer text-neutral-200 font-semibold
          transition-colors duration-300"
      >
        {text} <IoMdArrowDropdown className={`ml-2 text-xl transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown content using grid */}
      <div className={`grid transition-all duration-400 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu;