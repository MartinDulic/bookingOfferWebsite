import React from 'react'
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage'

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <ResponsiveImage
        desktopSrc="/images/logo/logo_white.svg"
        alt="PrimeBooker"
        type="image/svg+xml"
        fill={false}
        priority
        width={2000}
        height={264}
        className="h-5 w-auto object-contain lg:h-[1.625rem]"
      />
    </div>
  )
}

export default HeaderLogo
