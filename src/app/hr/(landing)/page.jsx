import React from "react";
import HeroSection from "@/sections/landing/gold/HeroSection";
import StatsSection from "@/sections/landing/gold/StatsSection";
import PlatformsSection from "@/sections/landing/gold/PlatformsSection";
import ProblemSection from "@/sections/landing/gold/ProblemSection";
import CaseStudySection from "@/sections/landing/gold/CaseStudySection";
import ValuePropsSection from "@/sections/landing/gold/ValuePropsSection";
import TopEarningProofSection from "@/sections/landing/gold/TopEarningProofSection";
import DifferentiatorsSection from "@/sections/landing/gold/DifferentiatorsSection";
import HowItWorksSection from "@/sections/landing/gold/HowItWorksSection";
import TestimonialsSection from "@/sections/landing/gold/TestimonialsSection";
import FaqSection from "@/sections/landing/gold/FaqSection";
import RecapSection from "@/sections/landing/gold/RecapSection";

export const metadata = {
  title:
    "PrimeBooker - Agencija za Iznajmljivanje i Upravljanje Nekretninama",
  description:
    "Iskoristite puni potencijal svog smještaja. Uz PrimeBooker ostvarite maksimalnu popunjenost i zaradu. Besplatno profesionalno fotografiranje za nove klijente!",
};

const Page = () => (
  <>
    <HeroSection />
    <StatsSection />
    <PlatformsSection />
    <ProblemSection />
    <CaseStudySection />
    <ValuePropsSection />
    <TestimonialsSection />
    <DifferentiatorsSection />
    <HowItWorksSection />
    <TopEarningProofSection />
    <FaqSection />
    <RecapSection />
  </>
);

export default Page;
