"use client";
import React from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const DataPoint = ({ 
  numberPrefix, 
  number, 
  numberSuffix, 
  text, 
  className, 
  numberClassName = "text-3xl xs:text-4xl", 
  textClassName = "text-md",
  animationOptions = {}
}) => {
  const { count, ref } = useAnimatedCounter(number, animationOptions);

  return (
    <div ref={ref} className={`flex-1 font-default flex flex-col items-center justify-center ${className}`}>
      <div className={`flex-1 font-bold ${numberClassName}`}>
        {numberPrefix}{count}{numberSuffix}
      </div>
      <div className={`flex-2 flex items-center capitalize text-center tracking-wider font-semibold ${textClassName}`}>
        {text}
      </div>
    </div>
  );
};

export default DataPoint;