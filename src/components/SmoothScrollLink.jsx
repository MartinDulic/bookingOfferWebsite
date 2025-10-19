"use client";
import React from 'react';

const SmoothScrollLink = ({ 
  href, 
  offset = 80, // Default offset (matches your header height)
  children,
  className = '',
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Remove hash if present (clean ID)
    const targetId = href.replace(/^#/, '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate scroll position with offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL without page reload (Next.js compatible)
      if (history.pushState) {
        history.pushState(null, null, `#${targetId}`);
      } else {
        window.location.hash = `#${targetId}`;
      }
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`cursor-pointer text-neutral-200 transition-transform transform duration-300
        hover:scale-110 hover:text-white ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;