import React from 'react'
import BackgroundImage from '@/components/BackgroundImage'
import SocialProofTag from '@/components/SocialProofTag'
import DataPoint from '@/components/DataPoint'

const HeroSection2 = ({titleText, subtitleText, mobileImgSrc, desktopImgSrc, imgAlt, imgClassName }) => {
  return (
    <div className='h-[75svh] w-full relative '>
      <div className='relative min-h-full rounded-br-[10%] overflow-hidden'>
        <BackgroundImage
          mobileSrc={mobileImgSrc}
          desktopSrc={desktopImgSrc}
          alt={imgAlt}
          loading="eager"
          imgClassName={imgClassName}
          className={`min-h-full`}
        />
        <div className='p-4 pb-0'>
          <SocialProofTag className={""}/>
        </div>
        <h1 className={` mx-4 mt-4 text-2xl xs:text-4xl sm:text-5xl font-title font-bold text-white text-shadow-lg text-shadow-black/20 uppercase`}>
          {titleText}
        </h1>
        <p className={`px-4 leading-relaxed xs:text-lg mt-2 text-neutral-50 text-shadow-lg text-shadow-black/20`}>
          {subtitleText}
        </p>
      </div>

      <div className='mt-4 px-2 flex justify-between items-stretch gap-2 sm:gap-12 text-neutral-800 font-bold'>
        <DataPoint number={98} text={"Sezonska Popunjenost"} numberSuffix={"%"} className={"max-w-1/3"}/>
        <DataPoint number={68.4} text={"Rast Prihoda"} numberPrefix={"+"} numberSuffix={"%"} className={"max-w-1/3"}/>
        <DataPoint number={224} text={"Prosječno noćenja godišnje"} className={"max-w-1/3"}/>
      </div>
    </div>
  )
}

export default HeroSection2