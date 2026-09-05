import React from "react";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const differentiators = [
  {
    title: "Prilagođena strategija",
    text: "Svaki smještaj je jedinstven, stoga razvijamo prilagođenu strategiju oglašavanja koja odgovara vašem smještaju, ističe njegove prednosti i donosi bolje rezultate.",
  },
  {
    title: "Kompletna usluga",
    text: "Nudimo sveobuhvatnu uslugu upravljanja smještajem koja odgovara svim Vašim potrebama. Od oglašavanja i upravljanja rezervacijama do komunikacije s gostima i održavanja smještaja, mi se brinemo o svemu.",
  },
  {
    title: "Upravljanje cijenama",
    text: "Kontinuirano pratimo tržište i na temelju podataka prilagođavamo cijene i uvjete najma kako bismo osigurali maksimalnu popunjenost i profitabilnost Vašeg smještaja.",
  },
  {
    title: "Besplatan početak",
    text: "Izvrsna prezentacija smještaja je ključna za uspjeh. Nudimo besplatno profesionalno fotografiranje i uređivanje fotografija kako bi osigurali potpuno besplatan početak suradnje s nama.",
  },
  {
    title: "Transparentnost",
    text: "Vjerujemo u otvorenu komunikaciju i transparentnost. Putem vlasničkog portala imate uvid u sve informacije o rezervacijama, gostima i financijama, kao i detaljnu statistiku poslovanja.",
  },
  {
    title: "Cijelodnevna podrška",
    text: "Dostupni smo u bilo kojem trenutku za sve hitne situacije i upite, kako za goste tako i za Vas. Naš cilj je osigurati gostu što bolje iskustvo, a Vama bezbrižno poslovanje.",
  },
];

const DifferentiatorsSection = () => (
  <section id="whyus" className="pb-gutter pb-block w-full bg-sand">
    <div className="mx-auto max-w-[81rem]">
      <Reveal>
        <Eyebrow>Zašto PrimeBooker</Eyebrow>
        <h2 className="pb-h2 mt-5 mb-9 max-w-[26em] font-title text-ink text-pretty sm:mb-[4.5rem]">
          Prepustite iznajmljivanje nama i ostvarite maksimalnu zaradu
        </h2>
      </Reveal>

      {/* Cell borders on md+; a simple stacked list below that */}
      <div className="border-t border-line md:grid md:grid-cols-2 md:border-l lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <Reveal
            key={item.title}
            delay={(index % 3) * 90}
            className="border-b border-line py-7 md:border-r md:p-8 lg:p-10"
          >
            <h3 className="pb-h4 mb-3 font-title text-ink sm:mb-4">
              {item.title}
            </h3>
            <p className="text-[1rem] leading-[1.75] text-muted text-pretty sm:text-[1.03125rem]">
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 sm:mt-14">
        <CtaWithFud event="differentiatorsCta" />
      </Reveal>
    </div>
  </section>
);

export default DifferentiatorsSection;
