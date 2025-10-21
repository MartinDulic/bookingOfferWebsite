"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const DataPoint = ({ number, text, className, 
  numberClassName="text-3xl xs:text-4xl", textClassName="text-md", numberSuffix 
}) => {
  const [count, setCount] = useState(0);

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  
  useEffect(() => {
    if (typeof number !== 'number' || isNaN(number)) return;
    
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (quadratic ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      
      setCount(Math.floor(easedProgress * number));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [textInView]);

  return (
    <div ref={textRef} className={`font-default flex flex-col items-center justify-center ${className}`}>
      <div className={` font-bold ${numberClassName}`}>{count}{numberSuffix}</div>
      <div className={`capitalize text-center tracking-wider ${textClassName}`}>{text}</div>
    </div>
  );
};

export default DataPoint;