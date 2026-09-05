import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { RiArrowRightLine } from "react-icons/ri";
import CountUp from "@/components/ui-lib/gold/CountUp";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const comparisons = [
  { label: "Prva rezervacija", before: "20. lip", after: "15. svi" },
  { label: "Posljednja rezervacija", before: "5. ruj", after: "3. lis" },
  { label: "Noćenja u sezoni", before: "72", after: "134" },
];

const strategy = [
  {
    step: "01",
    title: "Maksimalna vidljivost",
    text: "Profesionalno fotografiranje, oglašavanje i optimizacija oglasa na svim ključnim platformama.",
  },
  {
    step: "02",
    title: "Maksimalna popunjenost",
    text: "Stalna prilagodba cijena i uvjeta iznajmljivanja kako bi se ostvarila maksimalna popunjenost i zarada.",
  },
  {
    step: "03",
    title: "Besprijekorno iskustvo gosta",
    text: "Trenutačan odgovor na sve upite i zahtjeve gosta od prvog upita do povratka kući. Digitalni vodič i preporuke.",
  },
  {
    step: "04",
    title: "Potpuna transparentnost",
    text: "Portal za vlasnike sa svim informacijama o rezervacijama, gostima, cijenama i statistici.",
  },
];

const CaseStudySection = () => (
  <section className="pb-gutter pb-block w-full bg-sand">
    <div className="mx-auto max-w-[81rem]">
      <Reveal>
        <Eyebrow>Primjer iz Makarske</Eyebrow>
      </Reveal>

      <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <Reveal as="h2" className="pb-h2 max-w-[24em] font-title text-ink text-pretty">
          Kako smo udvostručili zaradu jednosobnog apartmana
        </Reveal>
        <Reveal
          delay={120}
          className="flex shrink-0 items-baseline gap-3.5 font-title font-bold tracking-[-0.03em] tabular-nums sm:gap-[1.125rem]"
        >
          <span className="text-[clamp(1.375rem,0.95vw+1.14rem,2rem)] text-stone line-through decoration-2">
            11.000 €
          </span>
          <RiArrowRightLine className="self-center text-xl text-gold sm:text-[1.625rem]" />
          <span className="text-[clamp(2rem,1.14vw+1.72rem,2.75rem)] text-ink">
            <CountUp to={25000} grouping duration={1900} /> €
          </span>
        </Reveal>
      </div>

      <div className="mt-8 grid items-start gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
        <Reveal className="border border-line-soft bg-white p-2.5 sm:p-3">
          <ResponsiveImage
            desktopSrc="/images/general/DataCompact_w900.avif"
            alt="Statistika zarade apartmana prije i nakon suradnje"
            fill={false}
            width={901}
            height={565}
            className="block h-auto w-full"
          />
        </Reveal>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 border-t border-l border-line">
            {comparisons.map((row, index) => (
              <Reveal
                key={row.label}
                delay={index * 90}
                y={10}
                className="border-r border-b border-line p-[clamp(0.875rem,1.6vw,1.5rem)]"
              >
                <div className="pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-muted">
                  {row.label}
                </div>
                <div className="mt-3 flex items-center gap-2 font-title font-bold tracking-[-0.03em] tabular-nums">
                  <span className="text-[0.9375rem] text-stone sm:text-[1.1875rem]">
                    {row.before}
                  </span>
                  <RiArrowRightLine className="shrink-0 text-[0.9375rem] text-gold sm:text-[1.125rem]" />
                  <span className="text-[1.1875rem] text-ink sm:text-2xl">
                    {row.after}
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal
              delay={270}
              y={10}
              className="border-r border-b border-line bg-ink-deep p-[clamp(0.875rem,1.6vw,1.5rem)]"
            >
              <div className="pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-ash-cool">
                Povećanje zarade
              </div>
              <div className="mt-2.5 font-title text-[clamp(1.75rem,1.3vw+1.4rem,2.125rem)] leading-none font-bold tracking-[-0.04em] text-white tabular-nums">
                +<CountUp to={128} />
                <span className="text-gold">%</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-7 border-l-2 border-danger pl-5">
            <div className="pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-danger">
              Prije nas — ispodprosječni rezultati
            </div>
            <p className="pb-body mt-3 text-body text-pretty">
              Iako se nalazi na samoj plaži u centru Makarske i moderno je
              uređen, ovaj jednosobni apartman je loše zarađivao. Bez
              oglašavanja na više portala i uz nagađanje cijena, vlasnik je
              gubio više od pola prihoda.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 border-t border-line pt-9 sm:mt-[4.5rem] sm:pt-11">
        <Reveal as="div" className="pb-eyebrow mb-7 text-gold-deep sm:mb-10">
          Naša strategija iznajmljivanja
        </Reveal>
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {strategy.map((item, index) => (
            <Reveal key={item.step} delay={index * 100}>
              <div className="flex items-center gap-3.5">
                <span className="font-title text-[0.9375rem] font-bold text-gold-deep">
                  {item.step}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 mb-2.5 font-title text-[1.125rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.1875rem]">
                {item.title}
              </h3>
              <p className="text-[0.96875rem] leading-relaxed text-muted text-pretty sm:text-base">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:mt-14">
          <CtaWithFud event="caseStudyCta" />
        </Reveal>
      </div>
    </div>
  </section>
);

export default CaseStudySection;
