import React from 'react'
import BackgroundImage from '@/components/BackgroundImage'
import SocialProofTag from '@/components/SocialProofTag'
import DataPoint from '@/components/DataPoint'

const HeroSection = ({titleText, subtitleText}) => {
  return (
    <div className='h-svh w-full '>
      <BackgroundImage
        mobileSrc="/images/temp/HeroImageTemp.jpg"
        desktopSrc="/images/temp/HeroImageTemp.jpg"
        alt="Hero Background"
        loading="eager"
        className=" object-[56%-50%] lg:object-[0_44%]"
      />
      <SocialProofTag className={"m-4 mb-0"}/>
      <h1 className={` mx-4 mt-4 text-2xl xs:text-4xl sm:text-5xl font-title font-bold text-white text-shadow-lg text-shadow-black/20 uppercase`}>
        {titleText}
      </h1>

      <p className={`px-4 leading-relaxed xs:text-lg mt-2 text-neutral-50 text-shadow-lg text-shadow-black/20`}>
        {subtitleText}
      </p>

        <div className='px-2 flex justify-between items-baseline gap-2 sm:gap-12 text-neutral-50 text-shadow-lg text-shadow-black/40'>
          <DataPoint number={98} text={"Popunjenost u sezoni"} numberSuffix={"%"}/>
          <DataPoint number={110} text={"Iznajmljenih noćenja"} numberSuffix={"+"} />
          <DataPoint number={98} text={"Postotak uspješnosti iznajmljivanja"} numberSuffix={"%"} />
        </div>
    </div>
  )
}

export default HeroSection