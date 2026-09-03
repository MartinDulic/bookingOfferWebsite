import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import Differentiator from '@/components/ui-lib/common/Differentiator'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const DifferentiatorsSection = () => {
  return (
    <Section id={"whyus"}>
      <div className='max-w-7xl mx-auto'>
        <Title className={"text-center mb-12 md:mb-16"}>
          Prepustite iznajmljivanje nama i <span className='text-primary-600'>ostvarite maksimalnu zaradu </span> 
        </Title>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            <Differentiator 
              title={"Prilagođena Strategija"} 
              text={"Svaki smještaj je jedinstven, stoga razvijamo prilagođenu strategiju oglašavanja koja odgovara vašem smještaju, ističe njegove prednosti i donosi bolje rezultate."} 
            />
            <Differentiator 
              title={"Kompletna Usluga"} 
              text={"Nudimo sveobuhvatnu uslugu upravljanja smještajem koja odgovara svim Vašim potrebama. Nudimo pomoć pri kategorizaciji, oglašavanje, čišćenje, računovodstvo i još mnogo toga."}
            />
            <Differentiator 
              title={"Upravljanje Cijenama"} 
              text={"Kontinuirano pratimo tržište i na temelju podataka prilagođavamo cijene i uvjete najma kako bismo osigurali maksimalnu popunjenost i profitabilnost Vašeg smještaja."} 
            />
            <Differentiator 
              title={"Besplatan Početak"} 
              text={"Izvrsna prezentacija smještaja je ključna za uspjeh. Nudimo besplatno profesionalno fotografiranje i uređivanje fotografija kako bi osigurali potpuno besplatan početak suradnje s nama."} 
            />
            <Differentiator 
              title={"Transparentnost"} 
              text={"Vjerujemo u otvorenu komunikaciju i transparentnost. Putem vlasničkog portala imate uvid u sve informacije o rezervacijama, gostima i financijama, kao i detaljnu statistiku poslovanja."} 
            />
            <Differentiator 
              title={"Cijelodnevna Podrška"} 
              text={"Dostupni smo u bilo kojem trenutku za sve hitne situacije i upite, kako za goste tako i za Vas. Naš cilj je osigurati gostu što bolje iskustvo, a Vama bezbrižno poslovanje."} 
            />
          </div>
        </div>
        <CtaFudReduced className={"mt-8 md:mt-16"}/>
      </div>
    </Section>
  )
}

export default DifferentiatorsSection