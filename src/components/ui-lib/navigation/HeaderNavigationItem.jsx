import React, { useState, useRef, useEffect } from 'react'
import NavigationLink from './NavigationLink'
import HoveringCard from '../common/HoveringCard';
import { IoMdArrowDropdown } from "react-icons/io";
import isTouchScreen from '@/lib/isTouchScreen';
import { useClickOutside } from '@/hooks/useClickOutside';

const HeaderNavigationItem = ({navigationObject}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const cardRef = useRef(null);

  useClickOutside(cardRef, () => { setIsOpen(false) });
  
  const handleMouseEnter = () => {
    if(isTouchScreen()) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if(isTouchScreen()) return
    timeoutRef.current = setTimeout(() => setIsOpen(false), 250);
  };

  const handleClick = (e) => {
    // Detect touch or small screens
    if (window.matchMedia("(hover: none)").matches || window.innerWidth < 1024) {
      e.stopPropagation();
      setIsOpen(prev => !prev);
    }
  }

  if(!navigationObject.children && navigationObject.to) {
    return (
      <NavigationLink href={navigationObject.url} text={navigationObject.to} className={"py-2.5 px-4 rounded-xs hover:scale-110 text-neutral-200 hover:bg-neutral-200 hover:text-primary"}/>
    );
  }

  const links = navigationObject.children.map(link => (
    <div key={link.to} className='min-w-fit flex gap-4 items-center p-3 rounded hover:bg-white hover:shadow-sm transition-all duration-200 group'>
      <div className='text-2xl bg-neutral-700 group-hover:bg-primary-100/40 rounded p-2 text-neutral-200 group-hover:text-primary group-hover:scale-110 transition-transform duration-200'>
        {link.icon}
      </div>
      <NavigationLink
        href={link.url}
        text={link.to}
        className="max-h-fit whitespace-nowrap text-neutral-200  group-hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 relative
          after:h-0.5 after:bg-primary after:transition-all after:duration-500 after:ease-out
          after:w-0 group-hover:after:w-full" // Add indentation for subitems
      />
    </div>
  ));

  // Calculate grid columns based on number of items
  let gridColsClass = "grid-cols-1"; // default for less than 6 items
  if (links.length >= 9) {
    gridColsClass = "grid-cols-3";
  } else if (links.length >= 6) {
    gridColsClass = "grid-cols-2";
  }
  
  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} 
      className="relative flex justify-center">
      <div

        className={`px-4 py-2.5 rounded-xs text-neutral-200 font-semibold flex items-center cursor-pointer
        transition-all transform duration-300 
        ${isOpen ? "text-primary scale-105 bg-neutral-200" : "hover:text-primary  hover:bg-neutral-200"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {navigationObject.to} <IoMdArrowDropdown className={`ml-1 text-xl transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}  />
      </div>

      <HoveringCard 
        className={`min-w-max top-20 pt-6 
      text-neutral-900 font-semibold transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-2 pointer-events-none"}`}
      >
        <div
          className={`w-fit grid ${gridColsClass} items-center gap-y-10 p-4
          text-lg bg-neutral-900 rounded-xs shadow-md border border-neutral-700 shadow-black/20`}
        >
          {links}
        </div>
      </HoveringCard>
    </div>
  );

}

export default HeaderNavigationItem