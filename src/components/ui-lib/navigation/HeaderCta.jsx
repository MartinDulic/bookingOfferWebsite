"use client"
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { trackCtaClick } from '@/lib/trackingUtils';

const HeaderCta = ({className = "", language = "hr"}) => {
  const smoothScrollTo = useSmoothScroll(0);
  // href={language == "hr" ? "/hr/kontakt" : "/en/contact"}
  const href = "#atf";

  // See GoldCta: next/link no-ops on a hash click once the URL already has it.
  const handleClick = (e) => {
    e.preventDefault();
    trackCtaClick("headerCta")
    smoothScrollTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className}
      inline-flex items-center rounded-xs bg-gold px-3.5 py-2.5
      text-[0.84375rem] font-bold text-ink
      transition-colors duration-200 hover:bg-gold-dark
      lg:px-5 lg:py-[0.6875rem] lg:text-[0.9375rem]`}
    >
      <span className="lg:hidden">Analiza</span>
      <span className="hidden lg:inline">Besplatna analiza</span>
    </a>
  );
}

export default HeaderCta;
