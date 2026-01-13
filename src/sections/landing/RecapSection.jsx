import React from 'react'
import { TbBrandBooking } from "react-icons/tb";
import IconedText from '@/components/ui-lib/common/IconedText'
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import Title from '@/components/ui-lib/common/Title'
import BodyText from '@/components/ui-lib/common/BodyText';


const RecapSection = () => {
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
            Sve Na Jednom Mjestu za <span className='text-primary-600'>Bezbržno Iznajmljivanje</span>
          </Title>
          <BodyText className='text-lg text-neutral-800 '>Pokretanje iznajmljivanja ne mora biti komplicirano. Naš sustav vodi vas kroz sve — od pripreme i kategorizacije do oglašavanja i komunikacije s gostima. Preuzimamo sve obveze kako biste bez stresa ostvarili maksimalnu popunjenost i zaradu. Vi imate potpuni uvid, a mi radimo sve ostalo.</BodyText>
          <div className='flex flex-col mt-8 xl:mt-12 '>
            <div className='flex flex-col gap-4 xl:gap-6'>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Besplatno Fotografiranje"}/>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"100% Transparentno"}/>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Sveobuhvatna Usluga"}/>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-2 mt-12 mb-4 md:relative xl:top-4'>
            <CtaFudReduced/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default RecapSection