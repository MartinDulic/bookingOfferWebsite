import BodyText from '@/components/ui-lib/common/BodyText'
import Section from '@/components/ui-lib/common/Section'
import Title from '@/components/ui-lib/common/Title'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <Section className={"min-h-dvh bg-neutral-100  flex flex-col items-center justify-center"}>
      <Image
        src="/images/logo/logo_black.svg"
        alt="Hvala"
        width={600}   // any number
        height={200}  // keep correct ratio
        className=" w-4/5 sm:w-3/5 xl:w-2/5 h-auto"
      />
      <div className="flex flex-col items-center xl:justify-evenly ">
        <Title className={"text-primary-600 text-center"}>Hvala vam što ste nas kontaktirali!</Title>
        <BodyText className={"my-8 text-neutral-800 w-full max-w-5xl lg:text-center"}>
          Vaš upit je uspješno poslan. Kontaktirat ćemo vas u najkraćem mogućem roku kako bismo razgovarali o vašim potrebama i kako vam možemo pomoći da ostvarite maksimalnu zaradu od vašeg smještaja.
        </BodyText>
      </div>
    </Section>
  )
}

export default Page