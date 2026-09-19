import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { MdApartment } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { RiArrowRightLine } from "react-icons/ri";
import CountUp from "@/components/ui-lib/gold/CountUp";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

/* Figures below are read straight off the market-data screenshot this section shows. */
const proofStats = [
  {
    label: "Ostvareni godišnji promet",
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
    label: "Pozicija u kategoriji",
    value: (
      <>
        <span className="text-gold">#</span>1
        <span className="text-[0.52em] text-ash-cool">/1.006</span>
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
];

const leaderboard = [
  {
    rank: "01",
    title: "Penthouse Big Blue",
    share: 100,
    earnings: "50.700 €",
    highlight: true,
  },
  {
    rank: "02",
    title: "Luxurious Apartment Jelena App 10. Cres",
    share: 75.8,
    earnings: "38.445 €",
  },
  {
    rank: "03",
    title: "Olive Garden • Peace & Quiet",
    share: 75.3,
    earnings: "38.193 €",
  },
  {
    rank: "04",
    title: "Olive Lounge House",
    share: 73.1,
    earnings: "37.068 €",
  },
  {
    rank: "05",
    title: "Pool oasis in centre of the town",
    share: 72,
    earnings: "36.521 €",
  },
  {
    rank: "06",
    title: 'Luxury apartment "Black Pearl" with jacuzzi',
    share: 68.1,
    earnings: "34.526 €",
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
          <span className="text-gold">#1 po zaradi</span> među 1.006 smještaja
          do 4 osobe u Makarskoj
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="text-[clamp(1rem,0.19vw+0.96rem,1.09375rem)] leading-[1.75] text-cream-dimmer text-pretty"
        >
          Penthouse Big Blue nije na najtraženijoj lokaciji u gradu. Ipak,
          nezavisni tržišni podaci stavljaju ga na prvo mjesto po ostvarenoj
          godišnjoj zaradi — ispred 1.005 oglasa iste kategorije,
          uključujući one u prvom redu. To je rezultat koji čini profesionalno
          upravljanje.
        </Reveal>
      </div>

      {/* Property photo + starting position → result */}
      <Reveal
        delay={80}
        className="mt-9 grid border border-white/15 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
      >
        <div className="relative h-56 overflow-hidden border-b border-white/15 sm:h-72 lg:h-auto lg:border-r lg:border-b-0">
          <ResponsiveImage
            mobileSrc="/images/general/BigBlue_w800.avif"
            desktopSrc="/images/general/BigBlue_w800.avif"
            alt="Penthouse Big Blue — smještaj pod našim upravljanjem"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-2.5 bg-ink-deep/90 px-4 py-3">
            <MdApartment className="shrink-0 text-base text-gold" />
            <span className="text-[0.84375rem] font-semibold text-cream">
              Penthouse Big Blue · 4 gosta
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-7 sm:p-9">
            <div className="pb-eyebrow text-ash-cool">Smještaj</div>
            <div className="mt-3.5 text-[clamp(1.15rem,0.85vw+1rem,1.625rem)] leading-[1.25] font-bold tracking-[-0.03em] text-cream text-pretty">
              Udaljen 750m od plaže
            </div>
            <div className="mt-3 text-[0.9375rem] leading-relaxed text-ash-cool">
              Kvalitetan smještaj ali 10 minuta hoda do plaže
            </div>
          </div>

          <div className="flex items-center justify-center text-gold">
            <RiArrowRightLine className="rotate-90 text-2xl" />
          </div>

          <div className="border-t-2 border-gold bg-ink-card p-7 sm:p-9">
            <div className="pb-eyebrow text-gold-soft">Rezultat</div>
            <div className="mt-3.5 text-[clamp(1.15rem,0.85vw+1rem,1.625rem)] leading-[1.25] font-bold tracking-[-0.03em] text-white text-pretty">
              Prvo mjesto po zaradi u cijeloj kategoriji
            </div>
            <div className="mt-3 text-[0.9375rem] leading-relaxed text-cream-dimmer">
              32 % više zarade od drugoplasiranog oglasa
            </div>
          </div>
        </div>
      </Reveal>

      {/* Stat band */}
      <div className="mt-9 grid grid-cols-2 border-t border-l border-white/15 sm:mt-12 lg:mt-14 lg:grid-cols-4">
        {proofStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 90}
            y={10}
            className={`border-r border-b border-white/15 p-[clamp(1rem,1.8vw,1.75rem)] ${
              index === 0 ? "-mt-px border-t-2 border-t-gold" : ""
            }`}
          >
            <div className="font-title text-[clamp(1.5rem,1.5vw+1.05rem,2.375rem)] leading-none font-bold tracking-[-0.04em] text-white tabular-nums">
              {stat.value}
            </div>
            <div className="pb-eyebrow mt-3 text-[0.65625rem] leading-snug tracking-[0.1em] break-words text-ash-cool sm:text-[0.6875rem] sm:tracking-[0.14em]">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Leaderboard + source screenshot */}
      <Reveal
        delay={120}
        className="mt-9 grid grid-cols-[minmax(0,1fr)] gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-12"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-white/15 pb-4">
            <div className="pb-eyebrow text-ash-cool">
              Godišnja zarada — top 6 od 1.006
            </div>
            <div className="hidden items-center gap-6 text-xs text-ash-cool sm:flex">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 bg-gold" />
                Pod našim upravljanjem
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 bg-ash-cool" />
                Ostali oglasi
              </span>
            </div>
          </div>

          <div className="hidden grid-cols-[3rem_minmax(0,1fr)_15rem] gap-4 border-b border-white/10 py-3 sm:grid">
            <span className="pb-eyebrow text-[0.625rem] text-ash-cool">#</span>
            <span className="pb-eyebrow text-[0.625rem] text-ash-cool">
              Oglas
            </span>
            <span className="pb-eyebrow text-right text-[0.625rem] text-ash-cool">
              Godišnja zarada
            </span>
          </div>

          {leaderboard.map((row) => (
            <div
              key={row.rank}
              className={`flex flex-col gap-2.5 border-b border-white/10 py-4 sm:grid sm:grid-cols-[3rem_minmax(0,1fr)_15rem] sm:items-center sm:gap-4 ${
                row.highlight
                  ? "border-l-2 border-gold bg-ink-card px-4 py-5 sm:-mx-1 sm:px-6"
                  : ""
              }`}
            >
              <div className="flex items-baseline gap-3 sm:contents">
                <span
                  className={
                    row.highlight
                      ? "font-title text-xl font-bold tracking-[-0.03em] text-gold tabular-nums"
                      : "text-[0.9375rem] font-bold text-ash-cool tabular-nums"
                  }
                >
                  {row.rank}
                </span>
                <div className="min-w-0">
                  <div
                    className={
                      row.highlight
                        ? "font-title text-lg font-bold tracking-[-0.02em] text-white"
                        : "truncate text-[0.96875rem] text-cream-dim"
                    }
                  >
                    {row.title}
                  </div>
                  
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2.5 flex-1 bg-white/10">
                  <div
                    className={`h-full ${row.highlight ? "bg-gold" : "bg-ash-cool"}`}
                    style={{ width: `${row.share}%` }}
                  />
                </div>
                <div
                  className={
                    row.highlight
                      ? "w-24 shrink-0 text-right font-title text-xl font-bold tracking-[-0.03em] text-white tabular-nums"
                      : "w-24 shrink-0 text-right text-[0.9375rem] font-semibold text-cream-dim tabular-nums"
                  }
                >
                  {row.earnings}
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3 py-4 text-[0.8125rem] text-ash-cool">
            <span className="tracking-[0.2em]">···</span>
            preostalih 1.000 oglasa
          </div>
        </div>

        <div className="flex flex-col">
          <div className="pb-eyebrow border-b border-white/15 pb-4 text-ash-cool">
            Izvorni podatci
          </div>
          <div className="mt-5 border border-white/10 bg-white p-2.5 sm:p-3">
            <ResponsiveImage
              desktopSrc="/images/general/Big_Blue_rank_1_proof.avif"
              alt="Tržišni podaci za Makarsku sortirani po ostvarenoj zaradi — Penthouse Big Blue na prvom mjestu s 50.700 €"
              type="image/png"
              fill={false}
              width={793}
              height={777}
              className="block h-auto w-full"
            />
          </div>
          <p className="mt-3.5 text-[0.8125rem] leading-relaxed text-ash-cool text-pretty">
            Izvor: airRoi — tržišni podaci za Makarsku, smještaji do 4 gosta,
            sortirano po ostvarenoj zaradi.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-10 sm:mt-14">
        <CtaWithFud tone="dark" event="topEarningCta" />
      </Reveal>
    </div>
  </section>
);

export default TopEarningProofSection;
