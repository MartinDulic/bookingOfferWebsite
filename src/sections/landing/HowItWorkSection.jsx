import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import NumberedStep from '@/components/ui-lib/common/NumberedStep'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const HowItWorkSection = () => {
  return (
    <Section className="bg-neutral-100">
      <Title className={"text-center mb-12 md:mb-16"}>
        Spremni Ste Za <span className='text-primary-600'>Početak Suradnje?</span>
      </Title>
      <div className='mb-16 flex flex-col md:flex-row gap-16 xl:gap-24 items-center md:items-baseline md:justify-center'>
        <NumberedStep number={1} title={"Ispunite Kontakt Obrazac"} text={"Nazvat ćemo Vas kako bismo saznali više o Vašem smještaju i uslugama koje su vam potrebne."}/>
        <NumberedStep number={2} title={"Potpis Ugovora"} text={"Nakon što utvrdimo vaše potrebe i uvjete suradnje potpisujemo ugovor u skladu s dogovorom."}/>
        <NumberedStep number={3} title={"Počnite Zarađivati"} text={"Obavljamo besplatno profesionalno fotografiranje Vašeg smještaja i krećemo sa oglašavanjem. Vi lako možete pratiti sve informacija u vezi poslovanja putem online portala za iznajmljivače. "}/>
      </div>
      <CtaFudReduced />
    </Section>
  )
}

export default HowItWorkSection