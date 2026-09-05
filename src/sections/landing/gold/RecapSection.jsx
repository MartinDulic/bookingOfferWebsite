import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { LuCheck } from "react-icons/lu";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Reveal from "@/components/ui-lib/gold/Reveal";

const promises = [
  "Povećanje zarade za 20% - 80%",
  "Potpuna usluga - bez obveza za vas",
  "100% transparentno poslovanje",
];

const RecapSection = () => (
  <section className="grid w-full bg-ink-deep xl:min-h-svh xl:grid-cols-2">
    <div className="relative h-[clamp(17rem,45vw,18.75rem)] xl:order-2 xl:h-auto xl:min-h-[43.75rem]">
      <ResponsiveImage
        mobileSrc="/images/general/RecapImage_w1100.avif"
        desktopSrc="/images/general/RecapImage_w1600.avif"
        alt="Gosti stižu u smještaj"
        className="object-[50%_30%] xl:object-center"
      />
    </div>

    {/* Sized to sit inside one viewport at the page bottom, so nothing of the
        closing pitch is cut off; min-h-svh stretches it back out on tall screens. */}
    <div className="pb-gutter flex flex-col justify-center py-[clamp(3rem,4vw,3.5rem)] xl:order-1 xl:px-[clamp(2.5rem,4.5vw,5.5rem)]">
      <div className="mx-auto w-full max-w-[38rem] xl:mx-0">
        <Reveal className="inline-flex items-center gap-2.5 rounded-xs border border-gold/45 px-3.5 py-2">
          <ResponsiveImage
            desktopSrc="/images/tools/booking.svg"
            alt="Booking.com"
            type="image/svg+xml"
            fill={false}
            width={189}
            height={32}
            className="h-3 w-auto opacity-85 brightness-0 invert"
          />
          <span className="h-3.5 w-px bg-white/20" />
          <span className="pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-gold-soft">
            Top 4% najviđenijih oglasa
          </span>
        </Reveal>

        <Reveal as="h2" delay={90} className="pb-h2 mt-7 font-title text-white text-pretty">
          Prestanite propuštati zaradu i gubiti vrijeme
        </Reveal>

        <Reveal delay={150} className="my-5 h-0.5 w-14 bg-gold sm:w-16" />

        <div className="text-[clamp(1rem,0.19vw+0.96rem,1.09375rem)] leading-[1.75] text-cream-dimmer">
          <Reveal
            as="p"
            delay={190}
            className="mb-4 text-[clamp(1.0625rem,0.24vw+1.02rem,1.1875rem)] font-semibold text-white"
          >
            Zašto čekati još jednu sezonu da biste vidjeli rezultate?
          </Reveal>
          <Reveal as="p" delay={230} className="mb-4">
            Svaki period bez rezervacije ili sa preniskom cijenom je izgubljena
            zarada. Ne dopustite da Vaš trud i kvaliteta smještaja ostanu
            neprimijećeni. S nama imate partnera koji razumije tržište, brine o
            svakom detalju i radi za Vaš maksimalni profit.
          </Reveal>
          <Reveal as="p" delay={270}>
            Kontaktirajte nas danas i osigurajte da svaki dan u sezoni radi u
            Vašu korist!
          </Reveal>
        </div>

        <div className="my-8 flex flex-col border-t border-white/12 sm:my-9">
          {promises.map((promise, index) => (
            <Reveal
              key={promise}
              delay={index * 90}
              y={10}
              className="flex items-center gap-3.5 border-b border-white/12 py-4 sm:py-[1.125rem]"
            >
              <LuCheck className="shrink-0 text-[1.1875rem] text-gold" />
              <span className="text-base text-cream sm:text-[1.0625rem]">
                {promise}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <CtaWithFud tone="dark" event="recapCta" align="start" />
        </Reveal>
      </div>
    </div>
  </section>
);

export default RecapSection;
