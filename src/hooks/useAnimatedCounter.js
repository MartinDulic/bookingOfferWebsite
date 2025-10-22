// hooks/useAnimatedCounter.js
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useAnimatedCounter = (number, options = {}) => {
  const {
    triggerOnce = true,
    threshold = 0.5,
    duration = 2000,
    easing = 'easeOutQuad'
  } = options;

  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (typeof number !== 'number' || isNaN(number) || !inView) return;

    const startTime = Date.now();
    
    // Easing functions
    const easingFunctions = {
      linear: (t) => t,
      easeOutQuad: (t) => 1 - Math.pow(1 - t, 2),
      easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
      easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    };

    const easingFn = easingFunctions[easing] || easingFunctions.easeOutQuad;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);
      
      setCount(Math.floor(easedProgress * number));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, number, duration, easing]);

  return { count, ref, inView };
};