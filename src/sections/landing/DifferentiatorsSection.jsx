import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import Differentiator from '@/components/ui-lib/common/Differentiator'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const DifferentiatorsSection = () => {
  return (
    <Section >
      <div className='max-w-7xl mx-auto'>
        <Title className={"text-center mb-12 md:mb-16"}>
          <span className='text-primary-600'> Osigurajte Dugoročan Uspjeh </span> S Našim Jedinstvenim Pristupom Upravljanju Smještajem
        </Title>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            <Differentiator 
              title={"Prilagođena Strategija"} 
              text={"Svaki smještaj je jedinstven, stoga razvijamo prilagođenu strategiju upravljanja koja odgovaraja specifičnim karakteristikama i lokaciji vašeg smještaja."} 
            />
            <Differentiator 
              title={"Kompletna Usluga"} 
              text={"Nudimo sveobuhvatnu uslugu upravljanja smještajem koju prilagođavamo vašim potrebama. Nudimo pomoć pri kategorizaciji, oglašavanje, čišćenje, organizaciju sadržaja za goste i još mnogo toga."}
            />
            <Differentiator 
              title={"Direktne Rezervacije"} 
              text={"Kako bi vam ostvarili veću dobit, stvorili smo portal za dirketne rezervacije s manjom provizijom. Gost plaća manju cijenu, a vi ostvarujete veću zaradu."} 
            />
            <Differentiator 
              title={"Stalni Razvoj"} 
              text={"Kontinuirano pratimo tržište i prilagođavamo strategiju cijena i uvjeta najma kako bismo osigurali maksimalnu popunjenost i profitabilnost vašeg smještaja."} 
            />
            <Differentiator 
              title={"Besplatno Fotografiranje"} 
              text={"Profesionalne fotografije su ključ za privlačenje gostiju. Nudimo besplatno profesionalno fotografiranje i uređivanje fotografija kako bi osigurali usitinu besplatan početak suradnje s nama."} 
            />
            <Differentiator 
              title={"Transparentnost"} 
              text={"Vjerujemo u otvorenu komunikaciju i transparentnost. Putem naše aplikacije imate uvid u sve informacije i uvijek smo dostupni za sva vaša pitanja i potrebe."} 
            />
          </div>
        </div>
        <CtaFudReduced className={"mt-8 md:mt-16"}/>
      </div>
    </Section>
  )
}

export default DifferentiatorsSection