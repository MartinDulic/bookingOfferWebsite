"use client";
import React, {useState, useRef} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const FaqItem = ({className, question, text}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`shadow-md border font-default rounded-sm border-neutral-200 overflow-hidden w-full max-w-4xl ${className}`}>
      <div 
        className='p-4 py-2 flex justify-between items-center bg-neutral-900 text-white cursor-pointer'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className='text-2xl '>{question}</div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className='p-2 focus:outline-none'
          aria-label='Expand answer'
        >
          <MdKeyboardArrowRight className={`text-4xl transition-transform duration-300 ${isExpanded ? "rotate-90" : "rotate-0"}`} />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-neutral-800 text-xl">{text}</div>
      </div>
    </div>
  );
};

export default FaqItem;