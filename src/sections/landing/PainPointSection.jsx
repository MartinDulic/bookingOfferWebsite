import BodyText from '@/components/ui-lib/common/BodyText'
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import IconedText from '@/components/ui-lib/common/IconedText';
import Section from '@/components/ui-lib/common/Section';
import Title from '@/components/ui-lib/common/Title'
import React from 'react'


const PainPointSection = ({title, boldedText, bodyText, icon, bulletPointText}) => {
  
  const body = bodyText.map((text, index) => {
    return (
      <BodyText key={index} className={"mt-8 text-neutral-800"}>
        {text}
      </BodyText>
    )
  });

  const bulletPoints = bulletPointText.map((text,index) => 
    <IconedText key={index} icon={icon} text={text} textClassName={"text-lg sm:text-xl"}/>  
  );

  return (
    <Section className='bg-neutral-50 flex justify-center '>
      <div className='max-w-4xl '>
        <Title >{title} </Title>
        
        <BodyText className={"font-semibold text-neutral-800"}>
          {boldedText}
        </BodyText>
        
        {body}
        
        <div className='my-12 flex flex-col gap-8 font-semibold text-neutral-800'>
          {bulletPoints}
        </div>
        
        <CtaFudReduced className={"text-neutral-700 mt-8"} />
      </div>
    </Section>
  )
}

export default PainPointSection