import Cta from '@/components/ui-lib/common/Cta';
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced';
import LabeledBenefit from '@/components/ui-lib/common/LabeledBenefit';
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage';
import Section from '@/components/ui-lib/common/Section'
import StatBouble from '@/components/ui-lib/common/StatBouble'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const CaseStudySection = () => {
  return (
    <Section className={"bg-neutral-100 flex flex-col items-center"}>
      <Title className={"text-center"}>
        <div className='max-w-5xl mx-auto'>
          <div className='text-primary-600'>Sa 11000 € na 25000 €</div> 
          Transformacija Apartmana Hedonist
        </div>
      </Title>

      <div className='max-w-4xl xl:max-w-max grid grid-cols-1 xl:grid-cols-4 gap-y-3 gap-x-0 lg:gap-y-6 xl:gap-8 lg:mt-12'>

        {/* Image Container - Takes full width on mobile, 2/3 on desktop */}
        <div className='relative lg:col-span-2 mt-4 w-full flex justify-center items-center'>
          <ResponsiveImage
            alt={"Earning Statistics"}
            mobileSrc={"/images/temp/DataCompactScaled.png"}
            desktopSrc={"/images/temp/DataCompact.png"}
            className={`!static shadow-md`}
          />
        </div>

        {/* Right Side Container - Stats and Problem Card stacked vertically on XL */}
        <div className='xl:col-span-2 xl:grid xl:grid-rows-2 xl:gap-4 xl:mt-4'>
          {/* Stats Container */}
          <div className='xl:col-span-2 mt-4 grid grid-cols-3 gap-3 xl:mt-0'>
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>20.Lipanj <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 15.Svibanj</div>}
              text={"Prva Rezervacija"}
              className={"col-span-2"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>42 <FaLongArrowAltRight className='inline mx-1 sm:mx-2' />134</div>}
              text={"Noćenja U Sezoni"}
              className={"col-span-1"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>+128%</div>}
              text={"Povećanje Zarade"}
              className={"col-span-1"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>5.Rujan <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 3.Listopad</div>}
              text={"Posljednja Rezervacija"}
              className={"col-span-2 "}
            />
          </div>
          
          {/* Problem Card */}
          <div className={`p-4 sm:p-6 mt-4 flex flex-col justify-evenly
            font-default bg-white border-neutral-200 rounded-sm shadow-md border
            lg:col-span-3 xl:col-span-2 xl:mt-0`}
          >
            <div className='ml-1 text-neutral-900 font-bold text-lg sm:text-xl 2xl:text-2xl font-title border-l-10 pl-4 border-red-700'>
              Ispodprosječni Rezultati
            </div>
            <div className='text-neutral-800 mt-3 sm:mt-4 text-justify 2xl:text-lg'>
              Usprkos svojoj poziciji na samoj plaži u centru Makarske, ovaj jednosobni apartman imao je iznimno nisku popunjenost. Bez razrađene strategije, bez optimizacije vidljivosti oglasa i nagađajući cijene vlasnik je reklamirao smještaj na više mjesta bezuspješno.
            </div>
          </div>
        </div>

        {/* Solution Card */}
        <div className={`col-span-full p-4 sm:p-6 flex flex-col justify-evenly 
          font-default bg-white border-neutral-200 rounded-sm shadow-md border`}
          >
          <div className='text-neutral-900 font-bold text-lg sm:text-xl 2xl:text-2xl font-title border-l-10 pl-4 border-green-700'>
            Naša Strategija Iznajmljivanja 
          </div>

          <div className='mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
            <LabeledBenefit 
              number={1} 
              subtitle={"Maksimalna Vidljivost"}
              text={"Profesionalno fotografiranje, oglašavanje i optimizacija oglasa na svim portalima."}
              className={"text-sm sm:text-base"}
              />

            <LabeledBenefit
              number={2}
              subtitle={"Maksimalna Popunjenost"}
              text={"Stalna prilagodba cijena i uvjeta iznajmljivanja kako bi se popunili svi kapaciteti po najvišoj mogućoj cijeni."}
              className={"text-sm sm:text-base"}
              />

            <LabeledBenefit 
              number={3} 
              subtitle={"Dostupnost Gostima 24/7"}
              text={"Trenutačan odogovor na sve upite i zahtjeve gosta u svakom trenutku."}
              className={"text-sm sm:text-base"}
              />

            <LabeledBenefit 
              number={4} 
              subtitle={"Osiguranje Kvalitete"} 
              text={"Suradnja sa provjerenim partenrima za čišćenje i održavanje smještaja kako bi osigurali besprijekornu čistoću."}
              className={"text-sm sm:text-base"}
              />
          </div>
        </div>
      </div>
      <CtaFudReduced className={"mt-8 md:mt-16"}/>
    </Section>
  )
}

export default CaseStudySection