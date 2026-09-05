"use client";
import React, { useId, useState } from "react";
import { LuChevronRight } from "react-icons/lu";

/** One question row. Collapses with a grid-rows transition, so no fixed heights. */
const FaqAccordionItem = ({ question, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="group flex w-full cursor-pointer items-center justify-between gap-4 py-6 text-left sm:gap-6 sm:py-7"
      >
        <span className="text-[clamp(1.0625rem,0.36vw+1rem,1.25rem)] font-semibold tracking-[-0.015em] text-ink transition-colors duration-200 group-hover:text-gold-deep">
          {question}
        </span>
        <LuChevronRight
          className={`shrink-0 text-[1.375rem] text-gold-deep transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        className={`pb-collapse ${open ? "pb-collapse-open" : ""}`}
      >
        <div>
          <div
            className={`pb-body max-w-[70ch] pb-7 text-body transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
