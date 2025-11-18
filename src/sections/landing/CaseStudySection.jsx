import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage';
import Section from '@/components/ui-lib/common/Section'
import StatBouble from '@/components/ui-lib/common/StatBouble'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const CaseStudySection = () => {
  return (
    <Section className={"bg-neutral-100"}>
      <Title>
        <div className='text-primary-600'> Sa 11000 € na 25000 € </div> Kako smo ostvarili veću zaradu apartmanu Hedonist
      </Title>
      <div className='relative mt-4'>
        <ResponsiveImage
          alt={"Earning Statistics"}
          mobileSrc={"/images/temp/DataCompactScaled.png"}
          desktopSrc={"/images/temp/DataCompact.png"}
          className={`shadow-lg relative`}
        />
      </div>
      <div className='grid grid-cols-1 place-items-center'>
        <StatBouble
          stat={<div className='flex items-center justify-center'>42 <FaLongArrowAltRight className='inline mx-2' />134</div>} 
          text={"Noćenja 1. Svi - 30. Ruj "}
        />
        <StatBouble
          stat={<div className='flex items-center justify-center'>+128%</div>}
          text={"Povećanje Zarade"}
        />
      </div>
    </Section>
  )
}

export default CaseStudySection