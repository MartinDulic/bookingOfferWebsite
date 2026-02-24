import HubSpotGetEstimateForm from '@/components/HubSpotGetEstimateForm'
import BodyText from '@/components/ui-lib/common/BodyText'
import IconedText from '@/components/ui-lib/common/IconedText'
import Section from '@/components/ui-lib/common/Section'
import Testimonial from '@/components/ui-lib/common/Testimonial'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { BiBuildingHouse } from "react-icons/bi";
import PhoneNumberLink from './PhoneNumberLink'

const EstimateSection = () => {
  return (
    <Section className={"min-h-dvh bg-neutral-100 flex flex-col xl:flex-row items-center xl:justify-evenly"}>
      <div className='mb-4 max-w-lg xl:max-w-2xl'>
        <Title className={" text-primary-600"}>Otkrijte potencijal svog smještaja</Title>
        <BodyText className={"my-8 text-neutral-800 w-full"}>
          <div className='mb-4 italic'>Nakon što ispunite obrazac, kontaktirat ćemo Vas u najkraćem mogućem roku.</div>
          <div className='mb-4 italic'>Također možete nas nazvati na broj: <PhoneNumberLink /></div>
        </BodyText>
        <Testimonial 
          className='hidden xl:flex mt-16 bg-white'
          image="/images/people/Iva_R.avif"
          alt="Klijent"
          name="Iva R."
          info="Split"
          text="Godinama sam radila s različitim agencijama, ali nikada nisam bila zadovoljna suradnjom. PrimeBooker je to promijenio. Zarađujem više, gosti su zadovoljni, a s PrimeBooker-om imam odličnu komunikaciju i uvjek su dostupni."
        />
        <div className='hidden xl:flex mt-20 gap-4'>
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<FaRegChartBar className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"15+ godina tržišne statistike"}/>
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<GrPieChart className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Detaljni izračun zarade"}/>
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<BiBuildingHouse className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Analiza na temelju konkurencije"}/>
          
        </div>
      </div>
      <HubSpotGetEstimateForm         
        className={"bg-white shadow-md w-full max-w-lg xl:mt-8"}
      />
      <div className='flex flex-col sm:flex-row xl:hidden mt-12 gap-8'>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<FaRegChartBar className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"15+ godina tržišne statistike"}/>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<GrPieChart className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Detaljni izračun zarade"}/>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<BiBuildingHouse className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Analiza na temelju konkurencije"}/>
      </div>
      <Testimonial 
        className='xl:hidden mt-16 bg-white'
        image="/images/people/Iva_R.avif"
        alt="Klijent"
        name="Iva R."
        info="Split"
        text="Godinama sam radila s različitim agencijama, ali nikada nisam bila zadovoljna suradnjom. PrimeBooker je to promijenio. Zarađujem više, gosti su zadovoljni, a s PrimeBooker-om imam odličnu komunikaciju i uvjek su dostupni."
      />
    </Section>
  )
}

export default EstimateSection