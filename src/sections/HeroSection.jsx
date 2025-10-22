import React from 'react'
import BackgroundImage from '@/components/BackgroundImage'
import SocialProofTag from '@/components/SocialProofTag'
import DataPoint from '@/components/DataPoint'
import Cta from '@/components/Cta'
import IconedText from '@/components/IconedText'
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const HeroSection = ({titleText, subtitleText, mobileImgSrc, desktopImgSrc, imgAlt, imgClassName }) => {
  return (
    <div className='h-svh w-full abosolute'>
      <BackgroundImage
        mobileSrc={mobileImgSrc}
        desktopSrc={desktopImgSrc}
        alt={imgAlt}
        loading="eager"
        imgClassName={imgClassName}
        className={``}
      />
      <SocialProofTag className={"m-4 mb-0"}/>
      <h1 className={` mx-4 mt-4 text-2xl xs:text-4xl sm:text-5xl font-title font-bold text-white text-shadow-lg text-shadow-black/20 uppercase`}>
        {titleText}
      </h1>

      <p className={`px-4 leading-relaxed xs:text-lg mt-2 text-neutral-50 text-shadow-lg text-shadow-black/20`}>
        {subtitleText}
      </p>

      <div className='absolute bottom-4 flex flex-col items-center '>
        <Cta className="mb-2" />
        <div className="mb-6 flex gap-4 px-4 text-neutral-200">
          <IconedText 
            icon={<IoCheckmarkDoneSharp className='text-xl'/>} 
            text={"100% Besplatno"} 
            className={" font-semibold "} 
          />
          <IconedText 
            icon={<IoCheckmarkDoneSharp className='text-xl'/>} 
            text={">1 Minuta"} 
            className={"font-semibold "} 
          />
        </div>
        {/* <p className='self-start px-4 mb-2 text-neutral-300 '>*Prosječan uspjeh naših smještaja</p> */}
        <div className=' px-2 flex justify-between items-baseline gap-2 sm:gap-12 text-neutral-50 text-shadow-lg text-shadow-black/40'>
          <DataPoint number={98} text={"Popunjenost u sezoni"} numberSuffix={"%"} className={"max-w-1/3"}/>
          <DataPoint number={68.4} text={"Povećanje Prihoda"} numberPrefix={"+"} numberSuffix={"%"} className={"max-w-1/3"}/>
          <DataPoint number={224} text={"Noćenja Godišnje"} numberSuffix={""} className={"max-w-1/3"}/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection