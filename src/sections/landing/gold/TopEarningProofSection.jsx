import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { LuMoveHorizontal } from "react-icons/lu";
import CountUp from "@/components/ui-lib/gold/CountUp";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

/* Figures below are read straight off the market-data screenshot this section shows. */
const proofStats = [
  {
    label: "Ostvarena godišnja zarada",
    value: (
      <>
        <CountUp to={50700} grouping duration={1900} />{" "}
        <span className="text-gold">€</span>
      </>
    ),
  },
  {
    label: "Više od drugoplasiranog",
    value: (
      <>
        +<CountUp to={32} />
        <span className="text-gold">%</span>
      </>
    ),
  },
  {
    label: "Ocjena gostiju",
    value: (
      <>
        <CountUp to={4.92} decimals={2} />
        <span className="text-[0.52em] text-ash-cool">/5</span>
      </>
    ),
  },
  {
    label: "Prosječna cijena noćenja",
    value: (
      <>
        <CountUp to={199} /> <span className="text-gold">€</span>
      </>
    ),
  },
];

const TopEarningProofSection = () => (
  <section className="pb-gutter pb-block w-full bg-ink-deep">
    <div className="mx-auto max-w-[81rem]">
      <Reveal>
        <Eyebrow tone="dark">Dokaz iz tržišnih podataka</Eyebrow>
      </Reveal>

      <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
        <Reveal as="h2" className="pb-h2 font-title text-white text-pretty">
          Penthouse Big Blue — <span className="text-gold">#1 po zaradi</span>{" "}
          među 1.006 smještaja u Makarskoj
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="text-[clamp(1rem,0.19vw+0.96rem,1.09375rem)] leading-[1.75] text-cream-dimmer text-pretty"
        >
          Nezavisni tržišni podaci rangiraju smještaj kojim upravljamo na prvo
          mjesto po ostvarenoj godišnjoj zaradi — ispred 1.005 drugih oglasa
          iste kategorije. Isti pristup primjenjujemo na svaki smještaj koji nam
          povjerite.
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 border-t border-l border-white/15 sm:mt-14 lg:grid-cols-4">
        {proofStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 90}
            y={10}
            className="border-r border-b border-white/15 p-[clamp(1rem,1.8vw,1.75rem)]"
          >
            <div className="font-title text-[clamp(1.5rem,1.5vw+1.05rem,2.375rem)] leading-none font-bold tracking-[-0.04em] text-white tabular-nums">
              {stat.value}
            </div>
            <div className="pb-eyebrow mt-3 text-[0.65625rem] leading-snug tracking-[0.14em] text-ash-cool sm:text-[0.6875rem]">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 sm:mt-14">
        {/* Capped at the screenshot's native width so the table stays crisp;
            scrolls horizontally on narrow screens rather than shrinking to mush. */}
        <div className="mx-auto max-w-[49.5rem] overflow-x-auto border border-white/10 bg-white p-2.5 sm:p-3">
          <ResponsiveImage
            desktopSrc="/images/temp/Big_Blue_rank_1_proof.png"
            alt="Tržišni podaci za Makarsku sortirani po ostvarenoj zaradi — Penthouse Big Blue na prvom mjestu s 50.700 €"
            type="image/png"
            fill={false}
            width={793}
            height={777}
            className="block h-auto w-full min-w-[36rem]"
          />
        </div>
        <div className="mx-auto mt-4 flex max-w-[49.5rem] flex-col gap-2 text-[0.8125rem] leading-relaxed text-ash sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <p>
            Izvor: airRoi — tržišni podaci za Makarsku, smještaji do 4 gosta,
            sortirano po ostvarenoj zaradi.
          </p>
          <span className="flex shrink-0 items-center gap-1.5 text-gold-soft md:hidden">
            <LuMoveHorizontal className="text-[0.9375rem]" />
            Povucite tablicu za sve stupce
          </span>
        </div>
      </Reveal>

      <Reveal className="mt-10 sm:mt-14">
        <CtaWithFud tone="dark" event="topEarningCta" />
      </Reveal>
    </div>
  </section>
);

export default TopEarningProofSection;
