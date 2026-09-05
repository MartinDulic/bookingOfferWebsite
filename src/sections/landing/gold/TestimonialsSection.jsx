import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { FaStar } from "react-icons/fa6";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const testimonials = [
  {
    name: "Marija L.",
    city: "Zadar",
    image: "/images/people/Marija_L.avif",
    quoteBefore:
      "Nakon nekoliko sezona iznajmljivanja odlučila sam unajmiti agenciju jer je moj apartman skupio dosta loših recenzija, što je jako utjecalo na zaradu. Nakon što sam počela surađivati s PrimeBooker-om to se brzo popravilo i ",
    highlight: "počela sam dobivati puno više rezervacija.",
    quoteAfter: "",
  },
  {
    name: "Mira K.",
    city: "Split",
    image: "/images/people/Mira_K.avif",
    quoteBefore:
      "Godinama sam svoje apartmane iznajmljivala sama i to mi je oduzimalo puno vremena i energije. Odlučila sam iznajmljivanje prepustiti PrimeBooker-u kako bi imala više slobodnog vremena. ",
    highlight: "Od tada zarađujem znatno više",
    quoteAfter: ", a oko iznajmljivanja se uopće ne brinem.",
  },
  {
    name: "Tihomir J.",
    city: "Zagreb",
    image: "/images/people/Tihomir_J.webp",
    quoteBefore:
      "Kada sam počinjao s iznajmljivanjem odlučio sam dati priliku PrimeBooker-u jer sam htio da netko stručan vodi brigu o oglašavanju moje kuće. Vidio sam da su novi na tržištu i da će dati sve od sebe. ",
    highlight: "Prvi gosti su došli 2 dana nakon početka suradnje",
    quoteAfter: " i tada sam znao da sam donio ispravnu odluku.",
  },
];

const TestimonialsSection = () => (
  <section className="pb-gutter pb-block w-full bg-ink-deep">
    <div className="mx-auto max-w-[81rem]">
      <Reveal>
        <Eyebrow tone="dark">Iskustva vlasnika</Eyebrow>
        <h2 className="pb-h2 mt-5 mb-9 max-w-[24em] font-title text-white text-pretty sm:mb-14">
          Što kažu vlasnici koji su nam prepustili svoj smještaj
        </h2>
      </Reveal>

      <div className="grid gap-x-12 gap-y-9 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 110}
            className="flex flex-col border-t-2 border-gold pt-[1.625rem] lg:pt-[1.875rem]"
          >
            <div className="flex items-center gap-3.5">
              <ResponsiveImage
                desktopSrc={testimonial.image}
                alt=""
                aria-hidden="true"
                fill={false}
                width={56}
                height={56}
                className="size-12 shrink-0 rounded-full object-cover lg:size-14"
              />
              <div>
                <div className="font-title text-[1.0625rem] font-bold tracking-[-0.02em] text-white lg:text-[1.125rem]">
                  {testimonial.name}
                </div>
                <div className="pb-eyebrow mt-1 text-[0.65625rem] tracking-[0.14em] text-ash-cool">
                  {testimonial.city}
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-1 text-gold">
              {Array.from({ length: 5 }, (_, star) => (
                <FaStar key={star} className="text-[0.8125rem]" />
              ))}
            </div>

            <p className="mt-4 text-[clamp(0.96875rem,0.14vw+0.94rem,1.09375rem)] leading-[1.75] text-cream-dimmer text-pretty">
              {testimonial.quoteBefore}
              <strong className="font-bold text-white">{testimonial.highlight}</strong>
              {testimonial.quoteAfter}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 sm:mt-14">
        <CtaWithFud tone="dark" event="testimonialsCta" />
      </Reveal>
    </div>
  </section>
);

export default TestimonialsSection;
