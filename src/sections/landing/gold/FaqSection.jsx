import React from "react";
import { GoDotFill } from "react-icons/go";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import FaqAccordionItem from "@/components/ui-lib/gold/FaqAccordionItem";
import Reveal from "@/components/ui-lib/gold/Reveal";

const controlPoints = [
  "Raspored rezervacija",
  "Cijene",
  "Troškove i prihode",
  "Detaljnu statistiku",
];

const FaqSection = () => (
  <section id="faq" className="pb-gutter pb-block w-full bg-sand">
    <div className="mx-auto max-w-[60rem]">
      <Reveal>
        <Eyebrow>Česta pitanja</Eyebrow>
        <h2 className="pb-h2 mt-5 mb-8 font-title text-ink sm:mb-14">
          Što vlasnici najčešće pitaju
        </h2>
      </Reveal>

      <Reveal delay={80} className="border-t border-line">
        <FaqAccordionItem question="Koliko Vaša usluga košta?">
          <p className="mb-4">
            Naša cijena ovisi o tome koje usluge trebate i uvijek je postotak od
            ostvarene zarade. To znači da ne plaćate ništa dok vam ne zaradimo
            novac.
          </p>
          <p>
            Nudimo više mogućnosti suradnje, od upravljanja bookingom do
            kompletnog upravljanja apsolutno svime, ovisno o lokaciji smještaja.
          </p>
        </FaqAccordionItem>

        <FaqAccordionItem question="Moram li se brinuti o čišćenju i održavanju?">
          <p>
            Ne morate — osim ako želite. Surađujemo s provjerenim partnerima i
            organiziramo sve za Vas kako bi Vaš smještaj uvijek bio spreman za
            goste.
          </p>
        </FaqAccordionItem>

        <FaqAccordionItem question="Hoću li izgubiti kontrolu nad svojim smještajem?">
          <p>
            Ne. Vi ste i dalje vlasnik smještaja i imate puni uvid u sve:
          </p>
          <div className="my-4 flex flex-col gap-2">
            {controlPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <GoDotFill className="shrink-0 text-gold-deep" />
                {point}
              </div>
            ))}
          </div>
          <p>
            Naša uloga je samo da radimo ono što vam štedi vrijeme i donosi više
            zarade.
          </p>
        </FaqAccordionItem>

        <FaqAccordionItem question="Kako funkcioniraju isplate?">
          <p>
            Mi obavljamo sve računovodstvene obveze i plaćamo sve naknade, a Vi
            svaki mjesec dobivate detaljan izvještaj o prihodima i troškovima.
            Isplata zarade na Vaš račun se vrši do 5. dana u mjesecu za
            prethodni mjesec.
          </p>
        </FaqAccordionItem>

        <FaqAccordionItem question="Koliko vremena je potrebno za početak suradnje?">
          <p>
            Ukoliko je smještaj spreman za iznajmljivanje potrebno je nekoliko
            dana za fotografiranje, uređivanje fotografija i objavu oglasa.
          </p>
        </FaqAccordionItem>

        <FaqAccordionItem question="Je li ovo dobra opcija ako tek počinjem?">
          <p>
            Da — novim iznajmljivačima je najviše potrebna profesionalna pomoć.
            Bez znanja i prave strategije, većina novih iznajmljivača gubi
            novac.
          </p>
        </FaqAccordionItem>
      </Reveal>
    </div>
  </section>
);

export default FaqSection;
