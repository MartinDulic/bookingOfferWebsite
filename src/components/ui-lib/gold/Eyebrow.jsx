import React from "react";

/** Rule + uppercase label that opens every section of the gold design. */
const Eyebrow = ({ children, tone = "light", className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="h-px w-6 shrink-0 bg-gold sm:w-7" />
    <span
      className={`pb-eyebrow ${tone === "dark" ? "text-gold-soft" : "text-gold-deep"}`}
    >
      {children}
    </span>
  </div>
);

export default Eyebrow;
