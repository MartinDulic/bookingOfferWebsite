"use client"
import Link from "next/link";

const HeaderCta = ({className, language = "hr"}) => {
  return (
    <Link
      href={language == "hr" ? "/hr/kontakt" : "/en/contact"}
      className={`${className} 
      flex items-center gap-2 bg-primary py-2 px-4
      text-lg text-white font-semibold rounded-xs
      hover:scale-105  hover:border-white transition-all duration-300 ease-in-out`}
    >
      <div>Besplatna analiza</div>
    </Link>
  );
}

export default HeaderCta;