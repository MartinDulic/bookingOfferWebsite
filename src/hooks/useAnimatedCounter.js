// // hooks/useAnimatedCounter.js
// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// export const useAnimatedCounter = (number, options = {}) => {
//   const {
//     triggerOnce = true,
//     threshold = 0.5,
//     duration = 2000,
//     easing = 'easeOutQuad'
//   } = options;

//   const [count, setCount] = useState(0);
//   const [ref, inView] = useInView({ triggerOnce, threshold });

//   useEffect(() => {
//     if (typeof number !== 'number' || isNaN(number) || !inView) return;

//     const startTime = Date.now();
    
//     // Easing functions
//     const easingFunctions = {
//       linear: (t) => t,
//       easeOutQuad: (t) => 1 - Math.pow(1 - t, 2),
//       easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
//       easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
//     };

//     const easingFn = easingFunctions[easing] || easingFunctions.easeOutQuad;

//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const easedProgress = easingFn(progress);
      
//       setCount(Math.floor(easedProgress * number));
      
//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     const animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [inView, number, duration, easing]);

//   return { count, ref, inView };
// };

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
  const [isIdle, setIsIdle] = useState(false); // Track if the browser is "ready"
  const [ref, inView] = useInView({ triggerOnce, threshold });

  // 1. Wait for Browser Idle before allowing the animation to start
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        const handle = window.requestIdleCallback(() => setIsIdle(true));
        return () => window.cancelIdleCallback(handle);
      } else {
        // Fallback for Safari (doesn't support idleCallback yet)
        const timer = setTimeout(() => setIsIdle(true), 200);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    // 2. Only start if the number is valid, it's in view, AND the browser is idle
    if (typeof number !== 'number' || isNaN(number) || !inView || !isIdle) return;

    const startTime = Date.now();
    
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
      
      // Use decimals if needed, or stick to floor for whole numbers
      setCount(Math.floor(easedProgress * number));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, isIdle, number, duration, easing]);

  return { count, ref, inView };
};