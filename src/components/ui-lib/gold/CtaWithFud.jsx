import React from "react";
import { LuCheck } from "react-icons/lu";
import GoldCta from "./GoldCta";

const reassurances = ["Neobvezujuće", "Konkretni savjeti"];

/**
 * Primary CTA with the two risk-reversal notes stacked underneath it.
 *
 * `align="start"` left-aligns the block from `sm` up (for CTAs that sit inside
 * a text column); it stays centred on narrow screens either way.
 */
const CtaWithFud = ({
  tone = "light",
  align = "center",
  className = "",
  ...ctaProps
}) => {
  const alignment =
    align === "start" ? "items-center sm:items-start" : "items-center";
  const noteColor = tone === "dark" ? "text-cream-dim" : "text-muted";
  const iconColor = tone === "dark" ? "text-gold" : "text-gold-deep";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <GoldCta {...ctaProps} />
      <div className="flex gap-5">
        {reassurances.map((note) => (
          <div
            key={note}
            className={`flex items-center gap-2 text-[0.84375rem] ${noteColor}`}
          >
            <LuCheck className={`text-base ${iconColor}`} />
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtaWithFud;
