import React from "react";
import NextStepsSection from "@/sections/NextStepsSection";

export const metadata = {
  title: "PrimeBooker - Agencija za Iznajmljivanje i Upravljanje Smještajem",
  description:
    "Vaš zahtjev je zaprimljen. Javljamo se telefonom, izrađujemo analizu na stvarnim tržišnim podacima koja vam pokazuje koliko možete zaraditi.",
  // Post-conversion screen — reachable only after submitting the form.
  robots: { index: false, follow: false },
};

const Page = () => <NextStepsSection />;

export default Page;
