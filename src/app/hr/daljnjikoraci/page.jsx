import React from "react";
import NextStepsSection from "@/sections/NextStepsSection";

export const metadata = {
  title: "Hvala na upitu — PrimeBooker",
  description:
    "Vaš zahtjev je zaprimljen. Javljamo se telefonom, izrađujemo analizu na stvarnim tržišnim podacima i pokazujemo vam koliko zarade propuštate.",
  // Post-conversion screen — reachable only after submitting the form.
  robots: { index: false, follow: false },
};

const Page = () => <NextStepsSection />;

export default Page;
