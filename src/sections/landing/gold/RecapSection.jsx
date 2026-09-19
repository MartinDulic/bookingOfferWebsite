import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { LuCheck, LuDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import GoldContactForm from "@/components/GoldContactForm";
import Reveal from "@/components/ui-lib/gold/Reveal";
import { PiMedalMilitaryFill } from "react-icons/pi";

const promises = [
  "Povećanje zarade za 20% - 80%",
  "Potpuna usluga - bez obveza za vas",
  "100% transparentno poslovanje",
];

const RecapSection = () => (
  <section className="grid w-full bg-ink-deep xl:min-h-svh xl:grid-cols-2">
    {/* Desktop: photo + form column */}
    <div className="relative hidden overflow-hidden xl:order-2 xl:flex xl:h-auto xl:min-h-[43.75rem] xl:items-center xl:justify-center xl:p-[clamp(2.5rem,4vw,6rem)]">
      <ResponsiveImage
        mobileSrc="/images/general/Villa_Pool_w800.avif"
        desktopSrc="/images/general/Villa_Pool_w1920.avif"
        alt="Vila s bazenom"
        className="inset-0 object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,18,20,.72)_0%,rgba(15,18,20,.46)_16%,rgba(15,18,20,.5)_100%)]" />

      <Reveal className="relative z-10 w-full max-w-[28.25rem]">
        <GoldContactForm />
      </Reveal>
    </div>

    {/* Sized to sit inside one viewport at the page bottom, so nothing of the
        closing pitch is cut off; min-h-svh stretches it back out on tall screens. */}
    <div className="flex flex-col justify-center xl:order-1 xl:py-[clamp(3rem,4vw,3.5rem)]">
      {/* Photo sits behind the badge/heading/paragraph on mobile; the xl copy
          column is a plain padded block since the photo lives in the right
          column there. */}
      <div className="relative xl:static">
        <div className="absolute inset-0 xl:hidden">
          <ResponsiveImage
            mobileSrc="/images/temp/Villa_Pool.jpg"
            desktopSrc="/images/temp/Villa_Pool.jpg"
            alt="Vila s bazenom"
            className="inset-0 object-[50%_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,18,20,.68)_0%,rgba(15,18,20,.7)_55%,rgba(15,18,20,.84)_80%,#0F1214_100%)]" />
        </div>

        <div className="pb-gutter relative pt-14 pb-[2.125rem] xl:px-[clamp(2.5rem,4.5vw,5.5rem)] xl:pt-0 xl:pb-0">
          <div className="mx-auto w-full max-w-[38rem] xl:mx-0">
            <Reveal className="inline-flex items-center gap-2.5 rounded-xs border border-gold/45 px-3.5 py-2">
              <ResponsiveImage
                desktopSrc="/images/tools/airbnb.svg"
                alt="Airbnb logo"
                type="image/svg+xml"
                fill={false}
                className="h-4 w-auto opacity-85 brightness-0 invert "
              />
              <span className="h-3.5 w-px bg-white/20" />
              <span className="pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-gold-soft flex items-center gap-1">
                <PiMedalMilitaryFill className="text-lg" /> <p>Superhost status</p>
              </span>
            </Reveal>

            <Reveal as="h2" delay={90} className="pb-h2 mt-7 font-title text-white text-pretty">
              Prestanite gubiti zaradu i vrijeme, zatražite besplatnu analizu i saznajte potencijal svog smještaja
            </Reveal>

            <Reveal delay={150} className="my-5 h-0.5 w-14 bg-gold sm:w-16" />

            <div className="text-[clamp(1rem,0.19vw+0.96rem,1.09375rem)] leading-[1.75] text-cream-dimmer">
              <Reveal
                as="p"
                delay={190}
                className="text-[clamp(1.0625rem,0.24vw+1.02rem,1.1875rem)] text-white"
              >
                Prosječno upravljanje košta vas vremena i novca. Javite nam se i saznajte kako biste mogli zaraditi više i istovremeno smanjiti stres i obaveze.
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist, testimonial and the mobile form sit on the plain
          background, below the photo. */}
      <div className="pb-gutter xl:px-[clamp(2.5rem,4.5vw,5.5rem)]">
        <div className="mx-auto w-full max-w-[38rem] pb-[clamp(3rem,4vw,3.5rem)] xl:mx-0 xl:pb-0">
          <div className=" flex flex-col border-t border-white/12 sm:my-9">
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

          <Reveal as="figure" className="mt-8 border-l-2 border-gold py-0.5 pl-6 sm:mt-9">
            <div className="text-[clamp(1.15625rem,0.24vw+1.1rem,1.25rem)] leading-[1.35] tracking-[-0.025em] font-bold text-white text-pretty">
              „Prvi gosti u samo dva dana.”
            </div>

            <blockquote className="mt-2.5 text-[clamp(1rem,0.19vw+0.96rem,1.09375rem)] leading-[1.75] text-cream-dim text-pretty">
              Kada sam počinjao s iznajmljivanjem odlučio sam dati priliku PrimeBooker-u jer sam htio
               da netko stručan vodi brigu o oglašavanju moje kuće. Do tada nisam surađivao s agencijama i 
               nisam znao što očekivati. 
              {" "}
              <strong className="font-bold text-white">
                Prvi gosti su došli 2 dana nakon početka suradnje 
              </strong>
               <p className="inline"> </p>i tada sam znao da sam donio ispravnu odluku.
            </blockquote>

            <figcaption className="mt-4 flex items-center gap-3.5">
              <ResponsiveImage
                desktopSrc="/images/people/Tihomir_J.webp"
                alt=""
                aria-hidden="true"
                fill={false}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-title text-[1.0625rem] font-bold tracking-[-0.02em] text-white">
                    Tihomir Jakovov
                  </span>
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }, (_, star) => (
                      <FaStar key={star} className="text-[0.8125rem]" />
                    ))}
                  </div>
                </div>
                <div className="pb-eyebrow mt-1 flex items-center text-[0.65625rem] tracking-[0.14em] text-ash-cool">
                  <span>Nova Bila</span>
                  <LuDot className="shrink-0" />
                  <span>A-frame kuća</span>
                </div>
              </div>
            </figcaption>
          </Reveal>

          <Reveal className="mt-9 xl:hidden">
            <GoldContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default RecapSection;
