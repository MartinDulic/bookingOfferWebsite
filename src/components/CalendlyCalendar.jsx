import React, { useState, useEffect } from 'react';

const CalendlyCalendar = ({ className }) => {
    const [height, setHeight] = useState('70vh'); // Default height for below 640px

    useEffect(() => {
      // Define media queries
      const smMediaQuery = window.matchMedia('(min-width: 640px)');
      const mdMediaQuery = window.matchMedia('(min-width: 1024px)');
      const lgMediaQuery = window.matchMedia('(min-width: 1280px)');

      const updateHeight = () => {
        if (lgMediaQuery.matches) {
            setHeight('80vh');
        } else if (mdMediaQuery.matches) {
            setHeight('70vh');
        } else if (smMediaQuery.matches) {
            setHeight('70vh');
        } else {
            setHeight('70vh');
        }
      };

      // Set the initial height
      updateHeight();

      // Add listeners for changes in screen size
      smMediaQuery.addEventListener('change', updateHeight);
      mdMediaQuery.addEventListener('change', updateHeight);
      lgMediaQuery.addEventListener('change', updateHeight);

      // Clean up event listeners on component unmount
      return () => {
        smMediaQuery.removeEventListener('change', updateHeight);
        mdMediaQuery.removeEventListener('change', updateHeight);
        lgMediaQuery.removeEventListener('change', updateHeight);
      };
    }, []);

    useEffect(() => {
      // Load the Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Clean up the script on component unmount
      return () => {
          document.body.removeChild(script);
      };
    }, []);

    return (
      <div
          className={`calendly-inline-widget w-4/5 ${className}`}
          data-url="https://calendly.com/fullbeds/15min"
          style={{ minWidth: '320px', height }}
      ></div>
    );
};

export default CalendlyCalendar;