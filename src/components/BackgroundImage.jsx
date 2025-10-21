import React from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'

const BackgroundImage = ({mobileSrc, desktopSrc, alt, loading, className}) => {
  return (
    <div className="absolute inset-0 -z-10">
      <ResponsiveImage
        alt={alt}
        mobileSrc={mobileSrc}
        desktopSrc={desktopSrc}
        loading={loading}
        className={`object-cover ${className}`}
      />
      <div className='absolute inset-0 bg-black/40'/>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-zinc-900"/>
    </div>
  )
}

export default BackgroundImage