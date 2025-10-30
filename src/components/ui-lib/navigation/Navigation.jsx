"use client";
import React, { useState, useEffect, useRef } from "react";
import DropdownNavigationItem from "@/components/ui-lib/navigation/NavigationDropdownItem";
import HeaderCta from "./HeaderCta";
import MenuButton from "./MenuButton";
import DropdownNavbar from "./DropdownNavbar";
import { useClickOutside } from "@/hooks/useClickOutside";
import HeaderNavigationItem from "./HeaderNavigationItem";
import HeaderLogo from "./HeaderLogo";

const Navigation = ({navigationData}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.6;
      setIsHeaderVisible(window.scrollY > scrollThreshold);
      if(window.scrollY <= scrollThreshold) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(dropdownRef, () => {setIsMenuOpen(false)}, [menuButtonRef]);

  const mobileNavigation = navigationData.map(navigationObject => {
    return (
      <DropdownNavigationItem 
        key={navigationObject.to} 
        navigationObject={navigationObject}
      />
    );
  });

  const desktopNavigation = navigationData.map(navigationObject => {
    return (
      <HeaderNavigationItem
        key={navigationObject.to} 
        navigationObject={navigationObject}
      />
    )
  });

  return (
    <>
      <div
        aria-label="Main navigation"
        className={`z-20 fixed top-0 h-20 w-full grid grid-cols-[auto_1fr_auto_auto] items-center
          bg-primary-50 shadow-md transition-all ease-in-out duration-1000
          ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <HeaderLogo/>

        <nav className="flex justify-end items-center">

          {/* Navigation links */}
          <div className="pr-16 hidden lg:flex justify-center items-center gap-16 text-xl text-white ">
            {desktopNavigation}
          </div>

          <HeaderCta className={"lg:mr-6"}/>
        </nav>

        {/* Mobile menu icon */}
        <MenuButton isOpen={isMenuOpen} onToggle={()=> {setIsMenuOpen(!isMenuOpen)}} ref={menuButtonRef}/>
      </div>
      <DropdownNavbar isOpen={isMenuOpen} ref={dropdownRef} children={mobileNavigation}/>
    </>
  );
};

export default Navigation;

