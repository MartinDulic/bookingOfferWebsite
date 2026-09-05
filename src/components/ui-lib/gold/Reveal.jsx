"use client";
import React, { useEffect, useRef } from "react";

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * The reveal class is toggled straight on the node rather than through state —
 * there is nothing for React to re-render, and it keeps the observer callback
 * off the render path. Reduced motion and the no-JS case are handled in CSS
 * (`.pb-reveal` in globals.css), so the content is never left hidden.
 */
const Reveal = ({
  as: Tag = "div",
  delay = 0,
  y = 18,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("pb-reveal-in");

    if (!("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`pb-reveal ${className}`}
      style={{ "--pb-delay": `${delay}ms`, "--pb-y": `${y}px` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
