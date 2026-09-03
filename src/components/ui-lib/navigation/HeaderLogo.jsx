import React from 'react'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <div className="flex items-center h-full ">
      <div className="h-6 lg:h-8">
        <Image
          src="/images/logo/logo_white.svg"
          alt="Logo"
          width={0}
          height={0}
          className="object-contain h-full w-auto"
        />
      </div>
    </div>
  )
}

export default HeaderLogo