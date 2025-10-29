import BodyText from '@/components/ui-lib/common/BodyText'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import IconedText from '@/components/ui-lib/common/IconedText';
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { PiDiamondsFourFill } from "react-icons/pi";


const PainPointSection = () => {
  const icon =<PiDiamondsFourFill className='text-primary-600 text-2xl'/>;
  return (
    <section className='w-full bg-primary-50 px-4 sm:px-8 flex justify-center'>
      <div className='max-w-4xl lg:py-8 xl:py-12'>
        <Title >Želite iznajmiti smještaj ali ne znate gdje početi? <div className='text-primary-600 mt-2'>Osigurat ćemo vam jednostavan i lagan početak.</div> </Title>
        
        <BodyText className={"font-semibold"}>
          Imate nekretninu koju želite iznajmiti, ali ne znate ništa o kategorizaciji, oglašavanju, porezima i naknadama?
        </BodyText>
        
        <BodyText className={"mt-8 text-neutral-800"}>
          Informacije su često zbunjujuće i teško ih je pronaći, što čini početak iznajmljivanja stresnim i kompliciranim. Dok pokušavate razumjeti sve te informacije, vrijeme prolazi, a vi GUBITE potencijalnu zaradu.
        </BodyText>
        
        <BodyText className={"mt-8 text-neutral-800"}>
          Tu smo da vam pomognemo! Naš jedinstveni sistem vodi vas kroz sve korake, od opremanja i kategorizacije do oglašavanja i poreza, kako biste bezbrižno započeli svoje iznajmljivanje.
        </BodyText>
        
        <div className='my-12 flex flex-col gap-8'>
          <IconedText icon={icon} text={"Ušteda 16+ sati"} textClassName={"text-lg sm:text-xl"}/>
          <IconedText icon={icon} text={"Pristup svim informacijama na jednom mjestu"} textClassName={"text-lg sm:text-xl"}/>
          <IconedText icon={icon} text={"Stručno savjetovanje"} textClassName={"text-lg sm:text-xl"}/>
        </div>
        
        <CtaFudReduced className={"text-neutral-700 mt-8"} />
      </div>
    </section>
  )
}

export default PainPointSection