import React from 'react'
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage'

const BackgroundImage = ({mobileSrc, desktopSrc, alt, loading, imgClassName, className}) => {
  return (
    <div className={`${className} absolute inset-0 -z-10 overflow-hidden`}>
      <ResponsiveImage
        alt={alt}
        mobileSrc={mobileSrc}
        desktopSrc={desktopSrc}
        loading={loading}
        className={`${imgClassName}`}
      />
      <div className='absolute inset-0 bg-black/40'/>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-zinc-900"/>
    </div>
  )
}

export default BackgroundImage