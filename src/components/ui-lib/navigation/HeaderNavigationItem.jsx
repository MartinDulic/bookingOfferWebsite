import React, { useState, useRef, useEffect } from 'react'
import NavigationLink from './NavigationLink'
import HoveringCard from '../common/HoveringCard';
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderNavigationItem = ({navigationObject}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const cardRef = useRef(null);

    // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Handle hover with delay to prevent accidental triggers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  if(!navigationObject.children && navigationObject.to) {
    return (
      <NavigationLink href={navigationObject.url} text={navigationObject.to} className={"hover:scale-110"}/>
    );
  }

  const links = navigationObject.children.map(link => (
    <div key={link.to} className='min-w-fit flex gap-4 items-center p-3 rounded hover:bg-white hover:shadow-sm transition-all duration-200 group'>
      <div className='text-2xl bg-primary-100/40 rounded p-2 text-primary group-hover:scale-110 transition-transform duration-200'>
        {link.icon}
      </div>
      <NavigationLink
        href={link.url}
        text={link.to}
        className="max-h-fit whitespace-nowrap group-hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 relative
          after:h-0.5 after:bg-primary after:transition-all after:duration-500 after:ease-out
          after:w-0 group-hover:after:w-full" // Add indentation for subitems
      />
    </div>
  ));

  // Calculate grid columns based on number of items
  let gridColsClass = "grid-cols-1"; // default for less than 6 items
  console.log(links.length)
  if (links.length >= 9) {
    gridColsClass = "grid-cols-3";
  } else if (links.length >= 6) {
    gridColsClass = "grid-cols-2";
  }
  
  return (
    <div ref={cardRef}         onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className="relative flex justify-center">
      <div

        className={`min-h-20 text-neutral-700 font-semibold flex items-center cursor-pointer
        transition-transform transform duration-300 
        ${isOpen ? "text-primary scale-105" : "hover:text-primary"}`}
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
          text-lg bg-primary-50 rounded-xs shadow-md border border-neutral-200 shadow-black/20`}
        >
          {links}
        </div>
      </HoveringCard>
    </div>
  );

}

export default HeaderNavigationItem