import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";
import CallCta from "@/components/ui-lib/navigation/CallCta";
import { FaStar } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import HeaderLogo from "@/components/ui-lib/navigation/HeaderLogo";

const steps = [
  {
    title: "Zovemo vas",
    description:
      "Kratak razgovor u kojem prikupljamo podatke o vašem smještaju koji su potrebni za analizu.",
  },
  {
    title: "Izrađujemo analizu",
    description:
      "Na temelju prikupljenih podataka izrađujemo detaljnu analizu poslovanja vašeg smještaja.",
  },
  {
    title: "Predstavljamo plan za povećanje zarade",
    description:
      "Pokazujemo koliko zarade vaš smještaj može donijeti i što konkretno treba promijeniti. Bez obveze, besplatno.",
  },
];

const proofStats = [
  {
    value: (
      <>
        #1<span className="text-gold"> po zaradi</span>
      </>
    ),
    label: "Makarska · do 4 osobe",
  },
  {
    value: (
      <>
        9.7<span className="text-[0.65em] text-gold">/10</span>
      </>
    ),
    label: "Ocjena gostiju",
  },
];

/*
 * Post-conversion screen: everything fits one viewport, so nothing here is
 * scroll-revealed — it paints at full opacity on the first frame, same reasoning
 * as the landing hero.
 *
 * Reading order is identical at every width, but the "Što slijedi" card moves:
 * stacked it sits between the intro and the social proof, and from `lg` up it
 * takes its own column beside both. Explicit grid placement keeps that to one
 * DOM instead of rendering the card twice.
 */
const NextStepsSection = () => (
  <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-ink-deep">
    {/* Stacked, the photo covers only the intro and the steps card and resolves
        into the section background before the testimonial — the last gradient
        stop is fully opaque ink-deep, so wherever the copy reflows the cut-off
        lands there is never a visible seam. Side by side it covers everything. */}
    <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden lg:h-full">
      <ResponsiveImage
        mobileSrc="/images/general/Villa_with_pool_w800.avif"
        desktopSrc="/images/general/Villa_with_pool_w1920.avif"
        alt=""
        aria-hidden="true"
        priority
        className="object-[60%_50%] lg:object-center"
      />
      {/* Scrim deepens toward the stat labels (ash-cool on bright pool water),
          the dimmest type sitting on the photo and the first thing to fail. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,16,.8)_0%,rgba(11,14,16,.86)_45%,rgba(11,14,16,.93)_80%,#0F1214_100%)] lg:bg-[linear-gradient(100deg,rgba(11,14,16,.84)_0%,rgba(11,14,16,.87)_46%,rgba(11,14,16,.58)_100%)]" />
    </div>

    {/* Pared-back header: the visitor has already converted, so there is no nav
        and no CTA — just the brand and a way to reach us. */}
    <header className="relative z-10 shrink-0 border-b border-white/10">
      <div className="pb-gutter mx-auto flex h-16 w-full max-w-[81rem] items-center justify-between lg:h-[4.75rem]">
        <HeaderLogo />
        <CallCta alwaysShowNumber placement="next_steps" />
      </div>
    </header>

    <div className="pb-gutter relative z-10 mx-auto grid w-full max-w-[81rem] flex-1 content-center gap-y-4 py-7 lg:grid-cols-[minmax(0,1fr)_28.25rem] lg:gap-x-18 lg:gap-y-[2.125rem] lg:py-10">
      {/* Confirmation, and what the call we are about to make is for */}
      <div className="lg:col-start-1 lg:row-start-1">
        {/* <div className="flex w-fit items-center gap-2.5 rounded-xs border border-gold/45 bg-ink-deep/50 py-2 pr-4 pl-3 lg:py-[0.5625rem]">
          <IoMdCheckmarkCircleOutline className="shrink-0 text-base text-gold lg:text-[1.125rem]" />
          <span className="text-[clamp(0.78125rem,0.1vw+0.76rem,0.84375rem)] text-cream">
            Zaprimili smo vaš zahtjev
          </span>
        </div> */}

        <h1 className="max-w-[15em] font-title text-[clamp(1.8125rem,2.3vw+1.25rem,3.25rem)] leading-[1.08] font-bold tracking-[-0.035em] text-white text-pretty lg:mt-7">
          Čestitamo, napravili ste prvi korak prema uspješnom poslovanju i većoj
          zaradi.
        </h1>

        <div className="my-4 h-0.5 w-13 bg-gold lg:my-7 lg:w-16" />

        <p className="pb-lead max-w-[36em] text-cream-dim text-pretty">
          Svi iznajmljivači kojima smo pomogli zaraditi više započeli su ovdje.
          Sljedeći korak je naš poziv: u kratkom razgovoru prikupljamo
          podatke o vašem smještaju koji su nam potrebni za temeljitu analizu na
          osnovu tržišnih podataka za vašu lokaciju i kategoriju.
        </p>
      </div>

      {/* Spans both left-column rows so it stays optically centred against them */}
      <div className="border border-white/10 border-t-2 border-t-gold bg-ink-card px-[1.125rem] py-[1.0625rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center lg:px-[2.125rem] lg:py-9">
        <div className="pb-eyebrow tracking-[0.14em] text-gold-soft">
          Što slijedi
        </div>
        <ol className="mt-4 flex flex-col lg:mt-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-3.5 border-white/10 py-3.5 not-last:border-b first:pt-0 last:pb-0 lg:gap-[1.125rem] lg:py-[1.625rem]"
            >
              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center rounded-xs bg-gold text-[0.78125rem] font-extrabold text-ink lg:size-[1.875rem] lg:text-sm"
              >
                {index + 1}
              </span>
              <div>
                <div className="font-title text-[clamp(0.9375rem,0.2vw+0.89rem,1.0625rem)] font-bold tracking-[-0.02em] text-white">
                  {step.title}
                </div>
                <div className="mt-1 text-[clamp(0.8125rem,0.15vw+0.776rem,0.90625rem)] leading-relaxed text-ash lg:mt-1.5">
                  {step.description}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Social proof */}
      <div className="lg:col-start-1 lg:row-start-2">
        {/* <figure className="max-w-[36em] border-l-2 border-gold pl-4 lg:pl-[1.375rem]">
          <div className="text-[clamp(1.15625rem,0.24vw+1.1rem,1.25rem)] leading-[1.35] font-bold tracking-[-0.025em] text-white text-pretty">
            „Više slobodnog vremena i znatno veća zarada”
          </div>

          <blockquote className="mt-3 text-[clamp(0.90625rem,0.3vw+0.83rem,1.09375rem)] leading-relaxed text-cream-dimmer text-pretty">
            „Odlučila sam iznajmljivanje prepustiti PrimeBooker-u kako bi imala
            više slobodnog vremena.{" "}
            <strong className="font-bold text-white">
              Od tada zarađujem znatno više
            </strong>
            , a oko iznajmljivanja se uopće ne brinem.”
          </blockquote>
          <figcaption className="mt-3 flex items-center gap-2.5 lg:mt-3.5 lg:gap-3">
            <ResponsiveImage
              desktopSrc="/images/people/Mira_K.avif"
              alt=""
              aria-hidden="true"
              fill={false}
              className="size-9 shrink-0 rounded-full object-cover lg:size-10"
            />
            <div>
              <div className="flex items-center gap-2.5">
                <div className="font-title text-[clamp(0.90625rem,0.1vw+0.887rem,0.96875rem)] font-bold tracking-[-0.02em] text-white">
                  Mira K.
                </div>
                <div
                  aria-hidden="true"
                  className="flex gap-1 text-[0.75rem] text-gold"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <FaStar key={star} />
                  ))}
                </div>
              </div>
              <div className="pb-eyebrow mt-0.5 text-[0.65625rem] tracking-[0.14em] text-ash-cool">
                Split · Dva apartmana
              </div>
            </div>
          </figcaption>
        </figure> */}

        {/* Only two figures, so they read as a pair centred under the column
            rather than a row that trails off — see lg:justify-center. */}
        <div className="mt-[1.125rem] flex max-w-[36em] items-center gap-6 border-t border-white/15 pt-4 lg:mt-8 lg:justify-center lg:gap-9 lg:pt-[1.625rem] lg:text-center">
          {proofStats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="h-[2.375rem] w-px shrink-0 bg-white/15 lg:h-11"
                />
              )}
              <div>
                <div className="font-title text-[clamp(1.3125rem,0.5vw+1.19rem,1.625rem)] leading-none font-bold tracking-[-0.03em] text-white">
                  {stat.value}
                </div>
                <div className="pb-eyebrow mt-1.5 text-[clamp(0.625rem,0.15vw+0.6rem,0.71875rem)] tracking-[0.14em] text-ash-cool">
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NextStepsSection;
