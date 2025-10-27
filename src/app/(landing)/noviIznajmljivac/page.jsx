import React from 'react'
import HeroSection from "@/sections/HeroSection";
import Testimonial from '@/components/Testimonial';
import PainPointSection from '@/sections/PainPointSection';

const page = () => {

  const testimonials = 
  (<div className='py-12 2xl:py-0 mx-4 xs:mx-8 2xl:mx-0 2xl:mr-8 flex flex-col items-center gap-8 2xl:gap-16 w-4xl 2xl:w-full'>
    <Testimonial
      className={"max-w-2xl mx-4 min-[850px]:self-start"}
      image={"/images/temp/ANJA.PNG"}
      alt={"User 1"}
      name={"Anja Vrljičak"}
      info={"Apartman, Makarska"}
      text={"Full Beds mi je uštedio toliko vremena i truda. Njihov sistem je jednostavan za korištenje, a podrška je uvijek tu kad mi zatreba."}
    />
    <Testimonial 
      className={"max-w-2xl mx-4 min-[850px]:self-end"}
      image={"/images/temp/ANJA.PNG"}
      alt={"User 1"}
      name={"Anja Vrljičak"}
      info={"Villa, Makarska"}
      text={"Full Beds mi je uštedio toliko vremena i truda. Njihov sistem je jednostavan za korištenje, a podrška je uvijek tu kad mi zatreba. asda sd asd asd asd as das dasdr asdf asdf afas yxasklid has kljhdčlasčdlkjahfčkljhgaskljd fhčasklj hsčakljfa "}
    />
    <Testimonial 
      className={"max-w-2xl mx-4 min-[850px]:self-start"}
      image={"/images/temp/ANJA.PNG"}
      alt={"User 1"}
      name={"Anja Vrljičak"}
      info={"Soba, Makarska"}
      text={"Full Beds mi je uštedio toliko vremena i truda. Njihov sistem je jednostavan za korištenje, a podrška je uvijek tu kad mi zatreba."}
    />
  </div>);




  return (
    <>
      <HeroSection
        titleText={"Pokrenite iznajmljivanje bez stresa i gubitka vremena"}
        // subtitleText={"Sve što ti treba za uspješan početak iznajmljivanja nalazi se na jednom mjestu — mi radimo, ti zarađuješ."}
        // subtitleText={"Neznate kako funkcioniraju kategorizacija, porezi i online oglašavanje? Naš jedinstveni sistem osigurava jednostavan i bezbrižan početak iznajmljivanja."}
        subtitleText={"Naš jedinstveni sistem vodi vas kroz sve, od kategorizacije do poreza i oglašavanja, za bezbrižan početak."}
        mobileImgSrc="/images/temp/HeroImageTemp.jpg"
        desktopImgSrc="/images/temp/HeroImageTemp.jpg"
        imgAlt="Hero Background"
        imgClassName="object-[51%-50%] md:object-[65%_50%] lg:object-center "
        children={testimonials}
      />
      <PainPointSection/>


      
    </>
  )
}

export default page