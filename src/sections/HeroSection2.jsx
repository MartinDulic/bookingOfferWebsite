import React from 'react'
import BackgroundImage from '@/components/ui-lib/common/BackgroundImage'
import SocialProofTag from '@/components/ui-lib/common/SocialProofTag'
import DataPoint from '@/components/ui-lib/common/DataPoint'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'


const HeroSection2 = ({titleText, subtitleText, mobileImgSrc, desktopImgSrc, imgAlt, imgClassName }) => {
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

      <CtaFudReduced className={"absolute bottom-32 w-full"}/>
      <div className='absolute bottom-0 py-4 flex flex-col items-center bg-primary-50'>

        <div className=' px-2 flex justify-between items-baseline gap-2 sm:gap-12 text-primary-700'>
          <DataPoint number={98} text={"Popunjenost u sezoni"} numberSuffix={"%"} className={"max-w-1/3"}/>
          <DataPoint number={68.4} text={"Povećanje Prihoda"} numberPrefix={"+"} numberSuffix={"%"} className={"max-w-1/3"}/>
          <DataPoint number={224} text={"Noćenja Godišnje"} numberSuffix={""} className={"max-w-1/3"}/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection2