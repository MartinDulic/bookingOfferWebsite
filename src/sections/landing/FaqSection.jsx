import FaqItem from '@/components/ui-lib/common/FaqItem'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const FaqSection = ({faqItems}) => {
  return (
    <Section id="faq" className="bg-neutral-100 pb-8">
      <Title className={"text-center mb-12 md:mb-16"}> 
        Česta <span className='text-primary-600'>pitanja</span>
      </Title>

      <div className='flex flex-col gap-4 items-center'>
        {faqItems}
      </div>

    </Section>
  )
}

export default FaqSection