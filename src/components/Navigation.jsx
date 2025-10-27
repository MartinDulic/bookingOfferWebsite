"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeaderLink from "@/components/HeaderLink";
import { RiMenu3Fill } from "react-icons/ri";
import HeaderCta from "./HeaderCta";
import { IoMdArrowDropdown } from "react-icons/io";


const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`z-10 fixed top-0 h-20 w-full 
        grid grid-cols-[auto_1fr_auto_auto] items-center
        bg-primary-50 shadow-md transition-all ease-in-out duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center h-full">
        <div className="h-12">
          <Image
            src="/images/temp/logo.png"
            alt="Logo"
            width={0}
            height={0}
            className="object-contain h-full w-auto"
          />
        </div>
      </div>



      <div className="flex justify-end items-center pr-4">

        {/* Navigation links */}
        <div className="pr-16 hidden lg:flex justify-center items-center gap-16 text-xl text-white uppercase">
          <HeaderLink href="#hero">Home</HeaderLink>
          <HeaderLink href="#why">Why take us</HeaderLink>
          <HeaderLink href="#how">How it works</HeaderLink>
          <HeaderLink href="#faq">FAQ</HeaderLink>
        </div>

        {/* CTA button */}
        <HeaderCta />
      </div>

      {/* Mobile menu icon */}
      <div className="flex justify-center items-center mx-4 lg:hidden">
        <RiMenu3Fill className="text-3xl text-white" />
      </div>
    </nav>
  );
};

export default Navigation;
