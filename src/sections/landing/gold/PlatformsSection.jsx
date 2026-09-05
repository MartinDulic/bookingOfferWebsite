import React from "react";
import ResponsiveImage from "@/components/ui-lib/common/ResponsiveImage";

/* width/height are each logo's own viewBox, so the strip reserves its space. */
const platforms = [
  { src: "/images/tools/booking.svg", alt: "Booking.com", width: 189, height: 32 },
  { src: "/images/tools/airbnb.svg", alt: "Airbnb", width: 156, height: 48 },
  { src: "/images/tools/expedia.svg", alt: "Expedia", width: 200, height: 40 },
  { src: "/images/tools/vrbo.svg", alt: "Vrbo", width: 113, height: 36 },
  { src: "/images/tools/agoda.svg", alt: "Agoda", width: 119, height: 48 },
  { src: "/images/tools/tripadvisor.svg", alt: "Tripadvisor", width: 227, height: 48 },
  { src: "/images/tools/google.svg", alt: "Google", width: 2400, height: 811 },
  { src: "/images/tools/trivago.svg", alt: "Trivago", width: 134, height: 40 },
  { src: "/images/tools/hostify.svg", alt: "Hostify", width: 111, height: 30 },
];

/* The strip is duplicated so the -50% marquee loops seamlessly. */
const LogoRow = ({ hidden }) => (
  <div className="flex items-center" aria-hidden={hidden ? "true" : undefined}>
    {platforms.map((platform) => (
      <div
        key={platform.alt}
        className="mx-[clamp(1.25rem,2.6vw,2.75rem)] flex items-center justify-center"
      >
        <ResponsiveImage
          desktopSrc={platform.src}
          alt={hidden ? "" : platform.alt}
          type="image/svg+xml"
          fill={false}
          width={platform.width}
          height={platform.height}
          className="h-5 w-auto object-contain opacity-70 brightness-[.45] grayscale sm:h-[1.625rem]"
        />
      </div>
    ))}
  </div>
);

const PlatformsSection = () => (
  <section className="w-full overflow-hidden border-b border-line-soft bg-white py-[clamp(2rem,3vw,2.875rem)]">
    <p className="pb-eyebrow px-4 text-center tracking-[0.18em] text-muted sm:tracking-[0.2em]">
      Oglašavamo vas milijunima gostiju
    </p>
    <div className="pb-marquee-mask mt-6 overflow-hidden sm:mt-8">
      <div className="pb-marquee">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </div>
  </section>
);

export default PlatformsSection;
