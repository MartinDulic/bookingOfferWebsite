import React from 'react'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <div className="flex items-center h-full">
      <div className="h-12 sm:h-20">
        <Image
          src="/images/temp/logo.png"
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