"use client";
import React, { useState, useEffect, useRef } from "react";
import DropdownNavigationItem from "@/components/ui-lib/navigation/NavigationDropdownItem";
import CallCta from "./CallCta";
import HeaderCta from "./HeaderCta";
import MenuButton from "./MenuButton";
import DropdownNavbar from "./DropdownNavbar";
import { useClickOutside } from "@/hooks/useClickOutside";
import HeaderNavigationItem from "./HeaderNavigationItem";
import HeaderLogo from "./HeaderLogo";
import SmoothScrollLink from "./SmoothScrollLink";
import { FaPhone } from "react-icons/fa";

const Navigation = ({navigationData, language = "hr"}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.01;
      setIsHeaderVisible(window.scrollY > 1);
      if(window.scrollY <= scrollThreshold) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickOutside(dropdownRef, () => {setIsMenuOpen(false)}, [menuButtonRef]);

  // const mobileNavigation = navigationData.map(navigationObject => {
  //   return (
  //     <DropdownNavigationItem 
  //       key={navigationObject.to} 
  //       navigationObject={navigationObject}
  //     />
  //   );
  // });

  // const desktopNavigation = navigationData.map(navigationObject => {
  //   return (
  //     <HeaderNavigationItem
  //       key={navigationObject.to} 
  //       navigationObject={navigationObject}
  //     />
  //   )
  // });

  return (
    <>
      <div
        aria-label="Main navigation"
        className={`z-20 fixed top-0 w-full flex flex-col
          transition-colors ease-out duration-150
          ${isHeaderVisible ? "bg-neutral-900 shadow-md" : "bg-transparent "}
        `}
      >
        {/* <div className="flex items-center justify-center bg-neutral-white text-center text-neutral-50 h-12 text-xl font-bold">
          <FaPhone className="rounded-full bg-white text-neutral-900 p-1 size-7 mr-2" />
          <div>+385992032607</div>
        </div> */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 px-2 lg:px-4">
          <HeaderLogo/>
          <nav className="flex justify-end items-center gap-4">
            {/* Navigation links */}
            {/* <div className="pr-16 w-full hidden lg:flex justify-center items-center gap-12 text-xl text-white ">
          
              <SmoothScrollLink href={"#atf"}>{language == "hr" ? "Početna" : "Home"}</SmoothScrollLink>
              <SmoothScrollLink href={"#valueprop"}>{language == "hr" ? "Što Nudimo?" : "Our Offer"}</SmoothScrollLink>
              <SmoothScrollLink href={"#whyus"}>{language == "hr" ? "Zašto Mi?" : "Why Us?"}</SmoothScrollLink>
              <SmoothScrollLink href={"#faq"}>{language == "hr" ? "Česta Pitanja" : "FAQ"}</SmoothScrollLink>
            </div> */}

            <CallCta className={"mr-4 "}/>
            <HeaderCta className={"hidden lg:block"}/>
          </nav>
          {/* Mobile menu icon */}
          {/* <MenuButton isOpen={isMenuOpen} onToggle={()=> {setIsMenuOpen(!isMenuOpen)}} ref={menuButtonRef}/> */}
        </div>
      </div>
      {/* <DropdownNavbar isOpen={isMenuOpen} ref={dropdownRef} children={mobileNavigation}/> */}
    </>
  );
};

export default Navigation;

