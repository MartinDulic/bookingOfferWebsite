import React from 'react'
import BackgroundImage from '@/components/ui-lib/common/BackgroundImage'
import SocialProofTag from '@/components/ui-lib/common/SocialProofTag'
import DataPoint from '@/components/ui-lib/common/DataPoint'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'


const HeroSection = ({titleText, subtitleText, mobileImgSrc, desktopImgSrc, imgAlt, imgClassName, children}) => {
  return (
    <>
      <section id='atf' className='h-svh w-full'>
        <BackgroundImage
          mobileSrc={mobileImgSrc}
          desktopSrc={desktopImgSrc}
          alt={imgAlt}
          loading="eager"
          imgClassName={imgClassName}
          className={``}
          priority={true}
        />
        <div className='flex flex-row h-full relative'>
          <div className='w-full 2xl:w-auto'>
            <SocialProofTag className={"mt-4 sm:mt-6"}/>
            <div className='p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 xl:pr-0'>
              <h1 className={` xs:mt-4 max-w-4xl text-3xl xs:text-4xl sm:text-5xl sm:leading-14 font-title font-bold text-white text-shadow-lg text-shadow-black/30 uppercase`}>
                {titleText}
              </h1>
              <p className={`mt-2 leading-relaxed max-w-2xl xs:text-lg sm:text-2xl text-neutral-50 text-shadow-lg text-shadow-black/30`}>
                {subtitleText}
              </p>
            </div>
            <div className='flex items-start'>
              <div className='2xl:w-fit px-2 sm:px-12 2xl:px-8 absolute bottom-4 sm:bottom-12 flex flex-col items-center w-full '>
                <CtaFudReduced className={"mb-6 xs:mb-8 sm:mb-12 text-neutral-200"} ctaClassName={"shadow-xl shadow-black/40 "}/>
                <div className='2xl:w-4xl flex justify-between 2xl:justify-evenly items-baseline gap-2 sm:gap-12 md:gap-16 2xl:gap-0 text-neutral-50 text-shadow-lg text-shadow-black/40'>
                  <DataPoint number={98} text={"Popunjenost u sezoni"} numberSuffix={"%"} className={"max-w-1/3"}/>
                  <DataPoint number={68.4} text={"Povećanje Prihoda"} numberPrefix={"+"} numberSuffix={"%"} className={"max-w-1/3"}/>
                  <DataPoint number={224} text={"Noćenja Godišnje"} numberSuffix={""} className={"max-w-1/3"}/>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden 2xl:flex-1 2xl:flex 2xl:items-center 2xl:justify-center '>
            {children}
          </div>
        </div>
      </section>
      <section className='2xl:hidden w-full h-fit flex justify-center px-4 xs:px-0'>
        {children}
      </section>
    </>
  )
}

export default HeroSection