import React from 'react'
import Image from 'next/image'
import IconedText from '@/components/ui-lib/common/IconedText'
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import Title from '@/components/ui-lib/common/Title'


const RecapSection = () => {
  return (
    <section className='w-full flex flex-col md:flex-row-reverse font-lato'>
      <div className='flex-1 relative min-h-[33vh] md:min-h-full '>
        <ResponsiveImage
          alt = {"People having fun on a boat"}
          mobileSrc = {"trip_27_w800.webp"}
          desktopSrc = {"trip_27_w1200.webp"}
          className='object-[0_60%] md:object-[50%_70%] '
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center gap-2 bg-neutral-900 text-white py-1 px-2 w-fit mt-4 md:relative md:top-6'>
          <div className='size-10 relative'>
            <Image src={"general/google_logo.webp"} alt='Google logo' fill={true}/>
          </div>
          <div className='flex items-center p-2'>
            <p className='text-2xl font-bold'>5.0 <span className='uppercase'>Rating</span></p>
            <p className='font-bold'></p>
          </div>
        </div>
        <div className='p-4 md:p-16'>
          <Title >
            
          </Title>
          <p className='text-lg text-gray-700 '>Tired of crowded tours and cookie-cutter vacations? This is your last chance to book a fully private, tailor-made speedboat experience—crafted just for you.</p>
          <div className='flex flex-col mt-8 '>
            <div className='flex flex-col gap-2'>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} text={"100% Personalized"}/>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} text={"Exclusive Access"}/>
              <IconedText icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} text={"No Tourist Traps"}/>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center space-y-2 mt-12 mb-4 md:relative xl:top-12'>
            <CtaFudReduced/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default RecapSection