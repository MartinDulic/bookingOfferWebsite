import HorizontalScroller from '@/components/ui-lib/common/HorizontalScroller'
import MarketingProof from '@/components/ui-lib/common/MarketingProof'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import logos from '@/constants/ToolsLogos'
import React from 'react'

const ToolsSection = () => {
  return (
    <Section className="">
      <Title className={"text-center mb-12 md:mb-16"}>
        Neka vaš <span className='text-primary-600'>smještaj vide milijuni</span>
      </Title>
      <HorizontalScroller speed={1} pauseOnHover={false} pauseOnClick={false} className={"py-4 mb-12 md:mb-16"} >
        {
          logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-6 md:mx-8 lg:mx-12">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 lg:h-12 object-contain"
              />
            </div>
          ))
        }  
      </HorizontalScroller>
      {/* <div className='flex flex-col gap-6'>  
        <MarketingProof property="Dammi" viewsImg='/images/temp/SearchViews.PNG' rankingImg='/images/temp/RankingProof1Min.PNG' />
        <MarketingProof property="Big Blue" viewsImg='/images/temp/SearchViews2.PNG' rankingImg='/images/temp/RankingProof2Min.PNG' />
      </div> */}
    </Section>
  )
}

export default ToolsSection