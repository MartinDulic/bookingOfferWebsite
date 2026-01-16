import React from 'react'
import { TbBrandBooking } from "react-icons/tb";
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import Title from '@/components/ui-lib/common/Title'



const RecapSection = ({title, body}) => {
  return (
    <section className='w-full flex flex-col lg:flex-row-reverse font-lato'>
      <div className='flex-1 relative min-h-[50vh] lg:min-h-full '>
        <ResponsiveImage
          alt = {"Guests Arriving"}
          mobileSrc = {"/images/general/RecapImage_w1100.avif"}
          desktopSrc = {"/images/general/RecapImage_w1600.avif"}
          className=' object-[50%_30%] lg:object-center  '
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-center  bg-neutral-900 text-white py-1 px-2 w-fit mt-4 md:relative md:top-6'>
          <div className='size-10 relative'>
            <TbBrandBooking className='text-white text-4xl'/>
          </div>
          <div className='flex items-center p-2'>
            <p className='text-lg font-bold uppercase'>top 4% najviđenijih oglasa</p>
          </div>
        </div>
        <div className='p-4 md:p-16'>
          <Title className={""}>
            {title}
          </Title>
          {body}
          <div className='flex flex-col items-center justify-center space-y-2 mt-12 mb-4 md:relative xl:top-4'>
            <CtaFudReduced/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default RecapSection