"use client";
import { useEffect } from 'react';

export const useClickOutside = (ref, callback, excludeRefs = []) => {
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const isExcluded = excludeRefs.some(excludeRef => 
          excludeRef.current && excludeRef.current.contains(event.target)
        );
        
        if (!isExcluded) {
          callback();
        }
      }
    };

    // Also listen for touch events for mobile devices
    const handleTouchStart = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const isExcluded = excludeRefs.some(excludeRef => 
          excludeRef.current && excludeRef.current.contains(event.target)
        );
        
        if (!isExcluded) {
          callback();
        }
      }
    };

    document.addEventListener('click', handleMouseDown);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('click', handleMouseDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [ref, callback, excludeRefs]);
};