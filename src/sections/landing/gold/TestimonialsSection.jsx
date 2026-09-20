import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import { FaStar } from "react-icons/fa6";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";
import { LuDot } from "react-icons/lu";


const testimonials = [
  {
    name: "Julijana Prenkepalaj",
    city: "Makarska",
    accomodation: "Dvosobni apartman",
    image: "/images/people/Julijana_P.webp",
    headline: "„Brza podrška, veća zarada i gosti čak i zimi”",
    quoteBefore:
      "Godinama sam radila s raznim agencijama. Zarada je bila prosječna, ali najviše me smetalo što bi bilo teško dobiti nekoga na telefon kada bi nastao problem. Nakon prošle sezone čula sam za PrimeBooker. Bila sam nesigurna oko suradnje s još jednom agencijom, ali odlučila sam pokušati jer nisam bila zadovoljna tadašnjom agencijom. ",
    highlight: "Prve goste očekivala sam tek u lipnju, a stigli su već u travnju. ",
    quoteAfter: "Od tada imamo goste i zimi, zaradili smo više nego ikad, a oni su uvijek dostupni i sve rješavaju brzo.",
  },
  {
    name: "Laurentiu Dimitriu",
    city: "Makarska",
    accomodation: "Jednosobni apartman",
    image: "/images/people/Laurentiu_D.webp",
    headline: "„Nakon prve sezone s PrimeBookerom kupio sam još dva apartmana”",
    quoteBefore:
    //       "Prije par godina sam kupio apartman za iznajmljivanje i angažirao agenciju s kojom nisam bio zadovoljan. Zarada je bila loša, nedovoljna niti da pokrijem trošak kredita za apartman. Osjetio sam da trebam nešto promijeniti i čuo sam za PrimeBooker preko poznanika. Odlučio sam se za suradnju nakon što su mi objasnili kako rade i kako će povećati zaradu. ",
      "Prije par godina sam kupio stan i počeo iznajmljivati. Zarada je bila loša, nedovoljna niti da pokrijem trošak kredita. Osjetio sam da trebam nešto promijeniti i čuo sam za PrimeBooker preko poznanika. Odlučio sam se za suradnju nakon što su mi objasnili kako rade i kako će povećati zaradu. ",
    highlight: "Nakon uspješne prve sezone odlučio sam investirati u još 2 apartmana",
    quoteAfter: " jer sam napokon vidio da se iznajmljivanje isplati. Sada se osjećam sigurno jer znam da ću imati prihod za penziju. Svima preporučujem PrimeBooker, prepustite im vaš smještaj i osjetit ćete pravu razliku u zaradi!",
  },
  {
    name: "Darko Vrljičak",
    city: "Makarska",
    accomodation: "Dvosobni apartman",
    image: "/images/people/Darko_V.webp",
    headline: "„Transparentnost, odlična organizacija i veća zarada”",
    quoteBefore:
      "Kada smo supruga i ja odlučili iznajmljivati stan, uz redovan posao nismo imali vremena baviti se time. Angažirali smo agenciju i sve je bilo u redu dok naš agent nije otišao. Nakon toga je pala kvaliteta usluge i stvorio sam dojam da je iznajmljivanje postalo neisplativo. Tada smo čuli za PrimeBooker i odlučili im pružiti priliku. ",
    highlight: "Od kada surađujemo s njima i više smo nego zadovoljni. ",
    quoteAfter: "Najviše cijenim transparentnost i odličnu organizaciju, a zarada nam se osjetno povećala.",
  },
  // {
  //   name: "Tihomir Jakovov",
  //   city: "Nova Bila",
  //   accomodation: "A-frame kuća",
  //   image: "/images/people/Tihomir_J.webp",
  //   headline: "„Prvi gosti u samo dva dana.”",
  //   quoteBefore:
  //     // "Kada sam počinjao s iznajmljivanjem odlučio sam dati priliku PrimeBooker-u jer sam htio da netko stručan vodi brigu o oglašavanju moje kuće. Do tada nisam surađivao s agencijama i nisam znao što očekivati. ",
  //     "Kada sam izgradio kuću za iznajmljivanje nisam imao iskustva u tom poslu i htio sam da netko stručan vodi brigu o oglašavanju. Do tada nisam surađivao s agencijama i nisam znao što očekivati. ",
  //     highlight: "Prvi gosti su došli 2 dana nakon početka suradnje",
  //   quoteAfter: " i tada sam znao da sam donio ispravnu odluku.",
  // },
];

const TestimonialsSection = () => (
  <section className="pb-gutter pb-block w-full bg-ink-deep">
    <div className="mx-auto max-w-[90rem]">
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
                className="size-12 shrink-0 rounded-full object-cover lg:size-16"
              />
              <div>
                <div className="font-title text-[1.0625rem] font-bold tracking-[-0.02em] text-white lg:text-[1.125rem]">
                  {testimonial.name}
                </div>
                <div className="pb-eyebrow mt-1 flex text-[0.65625rem] tracking-[0.14em] text-ash-cool">
                  <p>{testimonial.city}</p> <LuDot className="mt-0.5 " /> <p>{testimonial.accomodation}</p>
                </div>
                <div className="mt-1.5 flex gap-1 text-gold">
                  {Array.from({ length: 5 }, (_, star) => (
                    <FaStar key={star} className="text-[0.75rem]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-[1.125rem] text-[clamp(1.15625rem,0.24vw+1.1rem,1.25rem)] leading-[1.35] tracking-[-0.025em] font-bold text-white text-pretty">
              {testimonial.headline}
            </div>

            <p className="mt-3 text-[clamp(0.96875rem,0.14vw+0.94rem,1.09375rem)] leading-[1.75] text-cream-dimmer text-pretty">
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
