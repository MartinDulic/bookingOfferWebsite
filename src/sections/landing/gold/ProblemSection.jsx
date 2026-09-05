import React from "react";
import { LuCheck } from "react-icons/lu";
import CountUp from "@/components/ui-lib/gold/CountUp";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const symptoms = [
  'Postavljate cijene "od oka" ili prema susjedima',
  "Smještaj vam nije stalno popunjen izvan vrhunca sezone?",
  "Nemate vremena za konstantnu brigu o oglasima, cijenama, smještaju i gostima?",
];

const remedies = [
  "Istovremeno oglašavanje na svim ključnim platformama (Airbnb, Booking.com, Expedia, Vrbo i dr.)",
  "Pametno prilagođavanje cijena na dnevnoj bazi ovisno o potražnji na tržištu",
  "Vrhunsku uslugu za goste koja donosi ocjene od 4.91/5 i stalne preporuke",
];

const sideStats = [
  {
    label: "Ocjena gostiju",
    value: (
      <>
        <CountUp to={4.91} decimals={2} />
        <span className="text-base text-gold-deep">/5</span>
      </>
    ),
  },
  { label: "Platformi oglašavanja", value: <CountUp to={9} /> },
  { label: "Dana upravljanja cijenama", value: <CountUp to={365} /> },
];

const CheckList = ({ items }) => (
  <div className="my-5 flex flex-col border-t border-line-soft sm:my-6">
    {items.map((item, index) => (
      <Reveal
        key={item}
        delay={index * 80}
        y={10}
        className="flex items-start gap-4 border-b border-line-soft py-4 sm:py-[1.125rem]"
      >
        <LuCheck className="mt-1 shrink-0 text-[1.1875rem] text-gold-deep" />
        <p className="m-0">{item}</p>
      </Reveal>
    ))}
  </div>
);

/*
 * One grid, three children. Stacked on small screens (headline, cost panel,
 * argument); on `lg` the panel moves into a second column and sticks while the
 * argument scrolls past it.
 */
const ProblemSection = () => (
  <section className="pb-gutter pb-block w-full bg-white">
    <div className="mx-auto flex max-w-[75rem] flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_23.75rem] lg:gap-x-[5.5rem]">
      <Reveal className="lg:col-start-1 lg:row-start-1">
        <Eyebrow>Problem</Eyebrow>
        <h2 className="pb-h2 mt-5 max-w-[22em] font-title text-ink text-pretty">
          Gubite 20% do 80% moguće zarade od svog smještaja, a da toga niste ni
          svjesni
        </h2>
      </Reveal>

      <Reveal
        delay={100}
        className="mt-8 border-t-2 border-gold bg-sand px-6 py-7 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mt-0 lg:self-start lg:px-[2.125rem] lg:py-9 lg:sticky lg:top-24"
      >
        <div className="pb-eyebrow text-gold-deep">Cijena neznanja</div>
        <div className="mt-4 font-title text-[clamp(2.375rem,1.1vw+2.1rem,3.25rem)] leading-none font-bold tracking-[-0.04em] text-ink tabular-nums lg:mt-5">
          <CountUp to={20} />–<CountUp to={80} />
          <span className="text-gold-deep">%</span>
        </div>
        <p className="mt-2.5 text-[0.90625rem] leading-relaxed text-muted lg:mt-3 lg:text-[0.9375rem]">
          moguće zarade koju vlasnici godišnje ostave na stolu.
        </p>

        <div className="my-6 h-px bg-line lg:my-7" />

        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-[1.375rem]">
          {sideStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} y={10}>
              <div className="font-title text-[1.375rem] font-bold text-ink tabular-nums lg:text-[1.625rem]">
                {stat.value}
              </div>
              <div className="pb-eyebrow mt-1.5 text-[0.6875rem] leading-snug tracking-[0.14em] text-muted lg:text-[0.75rem]">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <div className="pb-lead mt-8 max-w-[64ch] text-body sm:mt-11 lg:col-start-1 lg:row-start-2">
        <Reveal
          as="p"
          className="text-[clamp(1.0625rem,0.24vw+1.02rem,1.1875rem)] font-semibold text-ink"
        >
          Iznajmljujete apartman ili kuću i:
        </Reveal>

        <CheckList items={symptoms} />

        <Reveal as="p" className="mb-5">
          Istina je jednostavna: Maksimalna popunjenost i vrhunske cijene traže
          svakodnevni rad s podacima. Uz redovan posao i obiteljske obveze, to
          je gotovo nemoguće.
        </Reveal>
        <Reveal as="p" className="mb-5">
          Rezultat? Mnogi iznajmljivači svake godine nesvjesno{" "}
          <strong className="font-semibold text-ink shadow-[inset_0_-2px_0_var(--color-gold-soft)]">
            gube TISUĆE eura
          </strong>{" "}
          moguće zarade, trošeći pritom vlastite živce i energiju na posao koji
          ne daje maksimum.
        </Reveal>
        <Reveal as="p" className="mb-9">
          Naš tim pomaže iznajmljivačima da povećaju svoju zaradu u prosjeku 40%
          u odnosu na samostalno iznajmljivanje.
        </Reveal>

        <Reveal
          as="p"
          className="text-[clamp(1.0625rem,0.24vw+1.02rem,1.1875rem)] font-semibold text-ink"
        >
          To postižemo kroz:
        </Reveal>

        <CheckList items={remedies} />

        <Reveal
          as="p"
          className="mt-8 mb-7 text-[clamp(1.0625rem,0.24vw+1.02rem,1.1875rem)] text-ink"
        >
          Saznajte koliko zarade propuštate i zbog čega pomoću besplatne
          analize.
        </Reveal>

        <Reveal>
          <CtaWithFud event="painPointCta" align="start" />
        </Reveal>
      </div>
    </div>
  </section>
);

export default ProblemSection;
