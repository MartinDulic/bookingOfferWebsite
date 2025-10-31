import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const SocialProofSection = ({title, reviews}) => {
  return (
    <Section className=''>
      <Title>{title}</Title>
      <div className='flex flex-col gap-12'>
        {reviews}
      </div>
    </Section>
  )
}

export default SocialProofSection