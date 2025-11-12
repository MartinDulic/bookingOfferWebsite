import React from 'react'
import ResponsiveImage from './ResponsiveImage'
import Cta from './Cta'

const ValuePropWithImage = ({mobileImageSrc, desktopImageSrc, alt, summary, children, text, reverse = false, className
})=> {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} ${className}`}>
      <div className='relative flex-grow h-[40vh] md:h-[60vh] lg:w-1/2'>
        <ResponsiveImage
          alt={alt}
          mobileSrc={mobileImageSrc}
          desktopSrc={desktopImageSrc}
        />
      </div>
      <div className='flex-grow flex flex-col font-lato px-4 pb-8 md:px-8 lg:px-20 md:max-w-1/2 md:items-center justify-center'>
        <p className='uppercase font-bold text-xl text-neutral-600 my-4'>{summary}</p>
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