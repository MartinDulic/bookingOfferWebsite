import React from "react";
import CountUp from "@/components/ui-lib/gold/CountUp";
import Reveal from "@/components/ui-lib/gold/Reveal";

const stats = [
  {
    label: "Prosječni rast zarade",
    value: (
      <>
        +<CountUp to={40} />
        <span className="text-gold">%</span>
      </>
    ),
  },
  {
    label: "Noćenja više u prosjeku",
    value: (
      <>
        <span className="text-gold">+</span>
        <CountUp to={64} />
      </>
    ),
  },
  {
    label: "Prosječna ocjena gostiju",
    value: (
      <>
        <CountUp to={9.7} decimals={1} />
        <span className="text-[0.52em] text-ash-cool">/10</span>
      </>
    ),
  },
  {
    label: "Godina iskustva",
    value: (
      <>
        <CountUp to={5} />
        <span className="text-gold">+</span>
      </>
    ),
  },
];

/*
 * Two columns up to `lg`, four across from there. Every cell carries the same
 * padding so the row reads as centred, and the rules sit between cells rather
 * than at the outer edges.
 *
 * The rows butt up against each other (no row gap) and each cell pads itself
 * symmetrically, so the vertical rule runs unbroken past the horizontal one
 * instead of stopping short in row one and overshooting in row two.
 */
const cellDividers = (index) => {
  if (index === 0) return "";

  const left =
    index % 2 === 1
      ? "border-l border-white/15"
      : "lg:border-l lg:border-white/15";
  const top = index > 1 ? "border-t border-white/15 lg:border-t-0" : "";

  return `${left} ${top}`;
};

const StatsSection = () => (
  <section className="pb-gutter w-full border-t-2 border-gold bg-ink-deep py-[clamp(1.5rem,4vw,4rem)]">
    <div className="mx-auto grid max-w-[81rem] grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          delay={index * 90}
          className={`flex flex-col items-center px-[clamp(0.5rem,2vw,2.5rem)] py-6 text-center lg:py-0 ${cellDividers(index)}`}
        >
          <div className="pb-stat font-title text-white">{stat.value}</div>
          <div className="pb-eyebrow mt-3 leading-snug text-ash-cool sm:mt-4">
            {stat.label}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default StatsSection;
