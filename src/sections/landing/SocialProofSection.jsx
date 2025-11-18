import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const SocialProofSection = ({ title, reviews }) => {
  return (
    <Section className="bg-neutral-100">
      <Title className="sm:text-center">{title}</Title>
      <div className="mt-4 sm:mt-8 md:mt-12 lg:mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 ">
        {reviews}
      </div>
      <CtaFudReduced className="text-neutral-700 mt-8 sm:mt-16 md:mt-20" />
    </Section>
  )
}

export default SocialProofSection
