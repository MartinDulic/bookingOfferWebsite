import HubSpotGetEstimateForm from '@/components/HubSpotGetEstimateForm'
import BodyText from '@/components/ui-lib/common/BodyText'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'

const EstimateSection = () => {
  return (
    <Section className={"min-h-dvh bg-neutral-100 flex flex-col items-center"}>
      <Title className={"text-center text-primary-600"}>Kontaktirajte nas</Title>
      <BodyText className={"my-8 text-neutral-800 w-full max-w-lg"}>
        <div className='mb-4 italic'>Nakon što ispunite obrazac, kontaktirat ćemo vas u najkraćem mogućem roku.</div>
        <div className='mb-4 italic'>Također možete nas nazvati na broj: <a href='tel:+385992032607' className='font-bold text-primary underline'>+385 99 203 2607</a></div>
      </BodyText>
      <HubSpotGetEstimateForm         
        className={"bg-white shadow-md w-full max-w-lg"}
      />
    </Section>
  )
}

export default EstimateSection