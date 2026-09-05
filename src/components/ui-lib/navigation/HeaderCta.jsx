"use client"
import Link from "next/link";

const HeaderCta = ({className = "", language = "hr"}) => {
  return (
    <Link
      href={language == "hr" ? "/hr/kontakt" : "/en/contact"}
      className={`${className}
      inline-flex items-center rounded-xs bg-gold px-3.5 py-2.5
      text-[0.84375rem] font-bold text-ink
      transition-colors duration-200 hover:bg-gold-dark
      lg:px-5 lg:py-[0.6875rem] lg:text-[0.9375rem]`}
    >
      <span className="lg:hidden">Analiza</span>
      <span className="hidden lg:inline">Besplatna analiza</span>
    </Link>
  );
}

export default HeaderCta;
