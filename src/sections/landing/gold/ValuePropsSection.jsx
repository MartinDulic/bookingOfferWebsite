import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const valueProps = [
  {
    eyebrow: "Zaradite više",
    title: "Ostvarite maksimalnu popunjenost",
    text: "Svakodnevno pratimo tržište i prilagođavamo strategiju kako bismo vaš smještaj popunili po najvišoj mogućoj cijeni u svakom dijelu godine, uključujući i tijekom zime.",
    image: "/images/temp/Kalendar_pun_2026-2.png",
    type: "image/png",
    alt: "Popunjen kalendar rezervacija",
    objectPosition: "object-left",
    reversed: false,
  },
  {
    eyebrow: "Prepustite sve nama",
    title: "Riješite se obveza, uštedite vrijeme",
    text: "Tu smo kako bi vam pomogli u svemu, od oglašavanja i komunikacije s gostima do prijave gostiju, računa i naplate. Nudimo vam kompletnu uslugu upravljanja smještajem kako biste bili potpuno bezbrižni.",
    mobileImage: "/images/general/ManAtPool_w800.avif",
    image: "/images/general/ManAtPool_w1920.avif",
    alt: "Opušteni vlasnik smještaja uz bazen",
    objectPosition: "object-right",
    reversed: true,
  },
  {
    eyebrow: "Poslujte profesionalno",
    title: "Osigurajte dugoročan uspjeh",
    text: "Održavamo visoku razinu kvalitete usluge kako bi osigurali odlične recenzije i dugoročan rast zarade. Zadovoljni gosti promoviraju smještaj, vraćaju se i plaćaju više.",
    image: "/images/temp/valueprop/friends-smiling-sunbathing-drinking-cocktails-lying-near-swimming-pool.jpg",
    type: "image/jpeg",
    alt: "Obitelj ulazi u iznajmljeni smještaj",
    objectPosition: "object-top",
    reversed: false,
  },
];

const ValuePropsSection = () => (
  <section id="valueprop" className="w-full bg-white">
    {valueProps.map((prop, index) => (
      <div
        key={prop.title}
        className="grid items-stretch lg:grid-cols-2"
      >
        <div
          className={`relative h-[clamp(15rem,40vw,17.5rem)] lg:h-auto lg:min-h-[35rem] ${
            prop.reversed ? "lg:order-2" : ""
          }`}
        >
          <ResponsiveImage
            mobileSrc={prop.mobileImage}
            desktopSrc={prop.image}
            alt={prop.alt}
            type={prop.type ?? "image/avif"}
            className={prop.objectPosition}
          />
        </div>

        <div
          className={`pb-gutter flex flex-col justify-center py-[clamp(2.75rem,5vw,6.5rem)] lg:px-[clamp(3rem,5.5vw,5.5rem)] ${
            prop.reversed ? "lg:order-1" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-[36rem] lg:mx-0">
            <Reveal delay={index === 0 ? 0 : 60}>
              <Eyebrow>{prop.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={90} className="pb-h3 mt-4 font-title text-ink text-pretty">
              {prop.title}
            </Reveal>
            <Reveal
              as="p"
              delay={150}
              className="mt-4 max-w-[52ch] text-[clamp(1rem,0.21vw+0.96rem,1.125rem)] leading-relaxed text-body text-pretty sm:mt-6"
            >
              {prop.text}
            </Reveal>
            <Reveal delay={210} className="mt-7 sm:mt-9">
              <Link
                href="/hr/kontakt"
                className="group inline-flex items-center gap-2.5 border-b-2 border-gold pb-1.5 text-[0.96875rem] font-bold text-ink transition-colors duration-200 hover:text-gold-deep sm:text-base"
              >
                Zatražite besplatnu analizu
                <RiArrowRightLine className="text-xl text-gold-deep transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default ValuePropsSection;
