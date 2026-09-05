"use client";
import React, { useEffect, useRef } from "react";

const formatValue = (value, decimals, grouping) => {
  let text = value.toFixed(decimals);
  if (!grouping) return text;

  const [whole, fraction] = text.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return fraction ? `${grouped}.${fraction}` : grouped;
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Ramps a number up to its final value once it scrolls into view.
 *
 * The final value is what React renders, and the animation only rewrites
 * textContent — so the served HTML already carries the real figure and there
 * is no hydration mismatch.
 */
const CountUp = ({
  to,
  from = 0,
  decimals = 0,
  duration = 1600,
  grouping = false,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let startedAt = 0;

    const step = (now) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      const value = from + (to - from) * easeOutCubic(progress);
      el.textContent = formatValue(value, decimals, grouping);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.textContent = formatValue(from, decimals, grouping);
        frame = requestAnimationFrame(step);
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, from, decimals, duration, grouping]);

  return (
    <span ref={ref} className={className}>
      {formatValue(to, decimals, grouping)}
    </span>
  );
};

export default CountUp;
