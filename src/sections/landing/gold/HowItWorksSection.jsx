import React from "react";
import { LuCamera, LuHandshake, LuSearch, LuTrendingUp } from "react-icons/lu";
import CtaWithFud from "@/components/ui-lib/gold/CtaWithFud";
import Eyebrow from "@/components/ui-lib/gold/Eyebrow";
import Reveal from "@/components/ui-lib/gold/Reveal";

const steps = [
  {
    number: "01",
    icon: LuSearch,
    title: "Besplatna analiza",
    text: "Analiziramo Vaš smještaj i tržište, te vas savjetujemo kako ostvariti maksimalnu zaradu.",
  },
  {
    number: "02",
    icon: LuHandshake,
    title: "Dogovor o suradnji",
    text: "Razgovaramo o vašim željama i potrebama, te dogovaramo suradnju.",
  },
  {
    number: "03",
    icon: LuCamera,
    title: "Priprema oglasa",
    text: "Obavljamo besplatno profesionalno fotografiranje Vašeg smještaja i krećemo sa oglašavanjem.",
  },
  {
    number: "04",
    icon: LuTrendingUp,
    title: "Zarađujete",
    text: "Pratite sve informacije u vezi poslovanja putem online portala za iznajmljivače. Redovite isplate i maksimalna zarada.",
  },
];

/** 72px (desktop) / 56px icon tile — gold on the final step, ink everywhere else. */
const StepIcon = ({ icon: Icon, isLast, size }) => {
  const box = size === "desktop" ? "h-[4.5rem] w-[4.5rem]" : "h-14 w-14";
  const glyph = size === "desktop" ? "text-[1.75rem]" : "text-2xl";
  return (
    <div
      className={`relative z-10 flex shrink-0 items-center justify-center ${box} ${
        isLast ? "bg-gold" : "bg-ink-deep"
      }`}
    >
      <Icon className={`${glyph} ${isLast ? "text-ink" : "text-gold"}`} />
    </div>
  );
};

const StepBody = ({ step, size }) => (
  <>
    <span
      className={`font-title leading-none font-bold tracking-[-0.04em] text-ink tabular-nums ${
        size === "desktop" ? "text-[1.875rem]" : "text-2xl"
      }`}
    >
      {step.number}
    </span>
    <h3
      className={`mt-3 mb-2.5 font-title leading-tight font-bold tracking-[-0.03em] text-ink md:mt-4 md:mb-3 ${
        size === "desktop" ? "text-[1.3125rem]" : "text-[1.1875rem]"
      }`}
    >
      {step.title}
    </h3>
    <p className="text-[0.96875rem] leading-[1.75] text-muted text-pretty md:text-[1rem]">
      {step.text}
    </p>
  </>
);

const HowItWorksSection = () => (
  <section className="pb-gutter pb-block w-full bg-white">
    <div className="mx-auto max-w-[81rem]">
      <Reveal>
        <Eyebrow>Spremni ste za početak suradnje?</Eyebrow>
        <h2 className="pb-h2 mt-5 mb-10 max-w-[24em] font-title text-ink sm:mb-14">
          Ostvarite puni potencijal svog smještaja u 4 jednostavna koraka
        </h2>
      </Reveal>

      {/* Mobile / tablet: icons stacked with a connecting line down the left. */}
      <div className="flex flex-col md:hidden">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <Reveal
              key={step.number}
              delay={index * 110}
              className={`grid grid-cols-[3.5rem_1fr] gap-x-5 ${isLast ? "" : "pb-9"}`}
            >
              <div className="flex flex-col items-center">
                <StepIcon icon={step.icon} isLast={isLast} size="mobile" />
                {!isLast && <span className="w-0.5 flex-1 bg-gold" />}
              </div>
              <div>
                <StepBody step={step} size="mobile" />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Desktop: connected horizontal timeline. */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-x-10">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <Reveal key={step.number} delay={index * 110} className="flex flex-col">
              <div className="relative flex h-[4.5rem] items-center">
                {!isLast && (
                  <span className="absolute top-1/2 right-[-2.5rem] left-0 h-0.5 -translate-y-1/2 bg-gold" />
                )}
                <StepIcon icon={step.icon} isLast={isLast} size="desktop" />
              </div>
              <div className="mt-7">
                <StepBody step={step} size="desktop" />
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 sm:mt-14">
        <CtaWithFud event="howItWorksCta" />
      </Reveal>
    </div>
  </section>
);

export default HowItWorksSection;
