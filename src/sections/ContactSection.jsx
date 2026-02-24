import GoogleSheetsLeadForm from '@/components/GoogleSheetsLeadForm'
import HubSpotLeadCaptureForm from '@/components/HubSpotLeadCaptureForm'
import BodyText from '@/components/ui-lib/common/BodyText'
import IconedText from '@/components/ui-lib/common/IconedText'
import Section from '@/components/ui-lib/common/Section'
import Testimonial from '@/components/ui-lib/common/Testimonial'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import PhoneNumberLink from './PhoneNumberLink'

const ContactSection = () => {
  return (
    <Section className={"min-h-dvh bg-neutral-100 flex flex-col xl:flex-row xl:gap-16 items-center xl:justify-evenly "}>
      <div className='mb-4 xl:max-w-2xl max-w-lg'>
        <Title className={" text-primary-600"}>Otkrijte potencijal svog smještaja</Title>
        <BodyText className={"my-8 text-neutral-800 w-full "}>
          <div className='mb-4 italic'>Nakon što ispunite obrazac, kontaktirat ćemo vas u najkraćem mogućem roku.</div>
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
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<FaRegChartBar className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Određivanje cijena iz podataka"}/>
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<MdOutlineWatchLater className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Cijelodnevna podrška"}/>
          <IconedText className={"flex-1 flex-col items-center text-center"} icon={<BiBuildingHouse className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Analiza konkurencije"}/>
        </div>
      </div>
      {/* <GoogleSheetsLeadForm 
        className={"bg-white shadow-md w-full max-w-lg"}
        invalidPhoneText={"Neispravan broj telefona"}
        invalidEmailText={"Neispravan email"}
        invalidNameText={"Ime mora biti dugo 2 do 50 znakova"}
      /> */}
      <HubSpotLeadCaptureForm         
        className={"bg-white shadow-md w-full max-w-lg"}
        invalidPhoneText={"Molimo unesite ispravan broj telefona"}
        invalidEmailText={"Molimo unesite ispravan email"}
        invalidNameText={"Molimo unesite ispravno ime i prezime"}
      />
      <div className='flex flex-col sm:flex-row xl:hidden mt-12 gap-8'>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<FaRegChartBar className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Određivanje cijena iz podataka"}/>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<MdOutlineWatchLater className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Cijelodnevna podrška"}/>
        <IconedText className={"flex-1 flex-col items-center text-center"} icon={<BiBuildingHouse className='text-2xl sm:text-4xl text-neutral-800'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Analiza konkurencije"}/>
      </div>
      <Testimonial 
        className='flex xl:hidden mt-12 bg-white'
        image="/images/people/Iva_R.avif"
        alt="Klijent"
        name="Iva R."
        info="Split"
        text="Godinama sam radila s različitim agencijama, ali nikada nisam bila zadovoljna suradnjom. PrimeBooker je to promijenio. Zarađujem više, gosti su zadovoljni, a s PrimeBooker-om imam odličnu komunikaciju i uvjek su dostupni."
      />

    </Section>
  )
}

export default ContactSection