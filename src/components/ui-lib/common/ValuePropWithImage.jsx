import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import Cta from './Cta'

const ValuePropWithImage = ({mobileImageSrc, desktopImageSrc, alt, imageClassName,
  summary, children, text, reverse = false, className
})=> {
  return (
    <div className={`flex flex-col ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"} ${className}`}>
      <div className='xl:m-12 relative flex-grow h-[30vh] sm:h-[44vh] md:h-[52vh] lg:h-[64vh] xl:h-[50vh] xl:max-w-1/2'>
        <ResponsiveImage
          alt={alt}
          mobileSrc={mobileImageSrc}
          desktopSrc={desktopImageSrc}
          className={`${imageClassName} xl:shadow-xl border-y xl:border border-neutral-200`}
        />
     </div>
      <div className='flex-grow flex flex-col font-lato px-4 pb-8 sm:px-6 md:px-8 md:pb-12 lg:px-12  xl:pb-6 xl:max-w-1/2 xl:items-start justify-center'>
        <div className='flex flex-col xl:items-start justify-center max-w-2xl'>
          <p className='uppercase font-bold text-xl text-neutral-600 my-4 sm:mt-6'>{summary}</p>
          <h2 className='text-3xl lg:text-4xl text-neutral-800 uppercase font-bold font-title'>{children}</h2>
          <p className='text-xl text-justify mb-8 mt-4'>{text}</p>
          <div className='flex justify-center'>
            <Cta/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuePropWithImage