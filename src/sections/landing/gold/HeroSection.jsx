import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { FaTrophy, FaStar } from "react-icons/fa6";
import { LuCheck } from "react-icons/lu";
import GoldContactForm from "@/components/GoldContactForm";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";

const ratings = [
  {
    logo: "/images/tools/airbnb.svg",
    alt: "Airbnb",
    score: "4.9",
    reviews: "130+ recenzija",
    renderedHeight: 15,
    width: 156,
    height: 48,
  },
  {
    logo: "/images/tools/booking.svg",
    alt: "Booking.com",
    score: "9.7",
    reviews: "269+ recenzija",
    renderedHeight: 13,
    width: 189,
    height: 32,
  },
];

/*
 * The photo plus the scrim that keeps the copy legible on top of it. Rendered
 * in two places — see the backdrop comments below — but only ever one of them
 * is displayed, so the same file is fetched once and each instance only shows
 * the gradient for its own breakpoint.
 */
const Backdrop = () => (
  <>
    <ResponsiveImage
      mobileSrc="/images/general/HeroImage_w1000.avif"
      desktopSrc="/images/general/HeroImage_w1920.avif"
      alt="Pogled na obalu iz apartmana"
      priority
      className="object-[51%_50%] md:object-center"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,16,.8)_0%,rgba(11,14,16,.66)_38%,rgba(13,16,18,.9)_80%,#0F1214_100%)] lg:bg-[linear-gradient(100deg,rgba(11,14,16,.93)_0%,rgba(11,14,16,.86)_34%,rgba(11,14,16,.62)_62%,rgba(11,14,16,.5)_100%)]" />
  </>
);

/*
 * Deliberately not scroll-revealed: the hero is above the fold, so it paints at
 * full opacity on the first frame instead of waiting on the intersection
 * observer. Everything below the fold still fades in.
 */
const HeroSection = () => (
  <section
    id="atf"
    className="relative flex min-h-svh w-full flex-col overflow-hidden bg-ink-deep"
  >
    {/* Backdrop, side-by-side layout: the form sits on the photo, so it covers
        the whole section. */}
    <div className="absolute inset-0 hidden overflow-hidden lg:block">
      <Backdrop />
    </div>

    {/* Content — pt clears the fixed site header */}
    <div className="pb-gutter relative z-10 mx-auto flex w-full max-w-[81rem] flex-1 flex-col justify-start gap-10 pt-[clamp(5.5rem,10vw,7.5rem)] pb-[clamp(2.5rem,5vw,4.5rem)] lg:flex-row lg:items-center lg:justify-center lg:gap-20">
      <div className="relative flex min-w-0 flex-col lg:flex-1">
        {/* Backdrop, stacked layout: tied to this column instead of the section
            so it stops just above the form — covering the full column would
            stretch the photo over a portrait box twice the viewport height. It
            bleeds sideways to the viewport edges and up past the header
            padding, and the scrim resolves into the section background. */}
        <div className="absolute -bottom-5 left-1/2 top-[calc(clamp(5.5rem,10vw,7.5rem)*-1)] -z-10 w-screen -translate-x-1/2 overflow-hidden lg:hidden">
          <Backdrop />
        </div>

        <div className="flex items-center gap-3 self-start rounded-xs border border-gold/45 bg-ink-deep/50 px-3.5 py-3">
          <FaTrophy className="shrink-0 text-base text-gold" />
          <span className="text-[0.78125rem] leading-snug text-cream sm:text-[0.84375rem]">
            Ostvarili smo{" "}
            <strong className="font-bold text-gold-soft">#1 zaradu</strong> u
            Makarskoj (do 4 osobe)
          </span>
        </div>

        <h1 className="pb-h1 mt-7 font-title text-white text-pretty sm:mt-8">
          Zaradite 40% više od iznajmljivanja bez ikakvih obveza
        </h1>

        <div className="my-6 h-0.5 w-14 bg-gold sm:w-16" />

        <p className="max-w-[34em] text-[clamp(1rem,0.31vw+0.95rem,1.1875rem)] leading-relaxed text-cream-dim text-pretty">
          Nemate vremena za konstantnu brigu o oglasima, cijenama, smještaju i
          gostima? Naš tim preuzima i optimizira sve kako biste ostvarili
          maksimalnu zaradu.
        </p>

        <div className="mt-7 flex flex-col items-start gap-2.5 min-[640px]:flex-row min-[640px]:items-center sm:mt-9 sm:gap-3.5">
          {ratings.map((rating) => (
            <div
              key={rating.alt}
              className="flex items-center gap-3 rounded-xs border border-gold/50 bg-ink-deep/70 px-4 py-2.5 shadow-[0_0_0_1px_rgba(201,162,39,.1),0_10px_26px_-14px_rgba(0,0,0,.7)]"
            >
              <ResponsiveImage
                desktopSrc={rating.logo}
                alt={rating.alt}
                type="image/svg+xml"
                fill={false}
                width={rating.width}
                height={rating.height}
                style={{ height: rating.renderedHeight }}
                className="w-auto brightness-0 invert"
              />
              <span className="h-4 w-px bg-gold/35" />
              <FaStar className="text-base text-gold" />
              <span className="font-title text-[1.125rem] font-bold text-white">
                {rating.score}
              </span>
              <span className="text-xs text-cream-dimmer">{rating.reviews}</span>
            </div>
          ))}
        </div>

        {/* On large screens the form sits beside this column, so the CTA takes over */}
        {/* <div className="mt-11 hidden lg:block">
          <CtaWithFud tone="dark" event="atfCta" align="start" />
        </div> */}
      </div>

      <div className="w-full lg:w-[28.25rem] lg:shrink-0">
        <GoldContactForm />
        <div className="mt-4 flex justify-center gap-5 lg:hidden">
          {["Neobvezujuće", "Konkretni savjeti"].map((note) => (
            <div
              key={note}
              className="flex items-center gap-1.5 text-[0.8125rem] text-cream-dim"
            >
              <LuCheck className="text-[0.9375rem] text-gold" />
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
