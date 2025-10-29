"use client";
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const MenuButton = ({className, isOpen, onToggle, ref}) => {

  const handleClick = (e) => {
    e.preventDefault();
    onToggle(!isOpen);
  }

  return (
    <div ref={ref} className={`${className} z-30 h-full flex justify-center items-center px-6 lg:hidden cursor-pointer`} 
      onClick={handleClick}
    >
      {isOpen ? (
        <IoMdClose className="text-4xl text-neutral-800 transition-all duration-500 rotate-180" />
      ) : (
        <RiMenu3Fill className="text-4xl text-neutral-800 transition-all duration-500 rotate-0" />
      )}
    </div>
  )
}

export default MenuButton;