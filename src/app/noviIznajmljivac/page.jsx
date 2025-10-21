import React from 'react'
import HeroSection from "@/sections/HeroSection";

const page = () => {
  return (
    <main className="font-default">
      <HeroSection
        titleText={"Pokrenite iznajmljivanje bez stresa i gubitka vremena"}
        // subtitleText={"Sve što ti treba za uspješan početak iznajmljivanja nalazi se na jednom mjestu — mi radimo, ti zarađuješ."}
        // subtitleText={"Neznate kako funkcioniraju kategorizacija, porezi i online oglašavanje? Naš jedinstveni sistem osigurava jednostavan i bezbrižan početak iznajmljivanja."}
        subtitleText={"Naš jedinstveni sistem vodi vas kroz sve, od kategorizacije do poreza, za bezbrižan početak."}
      
      />
    </main>
  )
}

export default page