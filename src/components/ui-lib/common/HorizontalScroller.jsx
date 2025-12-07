"use client";
import React, { useState, useEffect, useRef } from 'react';

const HorizontalScroller = ({
  children,
  className,
  speed = 1,
  pauseOnHover = true,
  pauseOnClick = true,
}) => {
  const [offset, setOffset] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const requestRef = useRef();
  const itemsRef = useRef([]);
  const [isPaused, setIsPaused] = useState(false);

  // Set up observers for dynamic content
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      let highest = 0;
      itemsRef.current.forEach(item => {
        if (item) highest = Math.max(highest, item.clientHeight);
      });
      setMaxHeight(highest);
    });

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [children]);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const animate = () => {
      if (!isPaused) {
        setOffset(prev => {
          const contentWidth = contentRef.current.scrollWidth / 2; // Since we duplicate
          const newOffset = prev + speed;
          return newOffset >= contentWidth ? 0 : newOffset;
        });
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [speed, isPaused]);

  // Handle pause/resume based on interaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    if (pauseOnHover) {
      container.addEventListener('mouseenter', pause, { passive: true });
      container.addEventListener('mouseleave', resume, { passive: true });
    }

    if (pauseOnClick) {
      container.addEventListener('mousedown', pause, { passive: true });
      container.addEventListener('mouseup', resume, { passive: true });
      container.addEventListener('touchstart', pause, { passive: true });
      container.addEventListener('touchend', resume, { passive: true });
    }

    return () => {
      if (pauseOnHover) {
        container.removeEventListener('mouseenter', pause);
        container.removeEventListener('mouseleave', resume);
      }

      if (pauseOnClick) {
        container.removeEventListener('mousedown', pause);
        container.removeEventListener('mouseup', resume);
        container.removeEventListener('touchstart', pause);
        container.removeEventListener('touchend', resume);
      }
    };
  }, [pauseOnHover, pauseOnClick]);

  return (
    <div 
      ref={containerRef}
      className={`w-full overflow-hidden relative border-gray-200 ${className}`}
    >
      <div
        ref={contentRef}
        className="flex"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: 'transform',
        }}
      >
        {/* Original items */}
        {React.Children.map(children, (child, index) => (
          <div 
            ref={el => itemsRef.current[index] = el}
            key={`item-${index}`}
            className="flex-none mx-3 flex"
            style={{ 
              // height: maxHeight > 0 ? maxHeight : 'auto',
              minWidth: '200px' 
            }}
          >
            <div className="w-full">
              {child}
            </div>
          </div>
        ))}
        
        {/* Clones for seamless looping */}
        {React.Children.map(children, (child, index) => (
          <div 
            ref={el => itemsRef.current[index + React.Children.count(children)] = el}
            key={`clone-${index}`}
            className="flex-none mx-3 flex"
            style={{ 
              // height: maxHeight > 0 ? maxHeight : 'auto',
              minWidth: '200px' 
            }}
          >
            <div className="w-full">
              {child}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroller;