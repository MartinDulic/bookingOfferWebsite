import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import Cta from './Cta'

const ValuePropWithImage = ({mobileImageSrc, desktopImageSrc, alt, imageClassName,
  summary, children, text, reverse = false, className
})=> {
  return (
    <div className={`flex flex-col ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"} ${className}`}>
      <div className='relative flex-grow h-[30vh] sm:h-[40vh] md:h-[46vh] lg:h-[56vh] xl:w-1/2'>
        <ResponsiveImage
          alt={alt}
          mobileSrc={mobileImageSrc}
          desktopSrc={desktopImageSrc}
          className={imageClassName}
        />
     </div>
      <div className='flex-grow flex flex-col font-lato px-4 pb-8 sm:px-6 md:px-8 md:pb-12 lg:px-12  xl:pb-6 xl:max-w-1/2 xl:items-start justify-center'>
        <p className='uppercase font-bold text-xl text-neutral-600 my-4 sm:mt-6'>{summary}</p>
        <h2 className='text-4xl lg:text-5xl text-neutral-800 uppercase font-bold'>{children}</h2>
        <p className='text-xl text-justify my-8'>{text}</p>
        <div className='flex justify-center'>
          <Cta/>
        </div>
      </div>
    </div>
  )
}

export default ValuePropWithImage