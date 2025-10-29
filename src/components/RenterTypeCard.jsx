import React from 'react'
import Card from '@/components/ui-lib/common/Card';
import Link from 'next/link';

const RenterTypeCard = ({subtitleText, bodyText, href, icon, iconBgColor, iconColor, cardBgColor, 
    titleColor, textColor, borderColor}) => {
  return (
    <Link href={href}>
      <Card
        borderColor={borderColor} 
        className={`${cardBgColor} hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
      >
        <div className='flex items-stretch xs:min-h-32'>
          <div className={`${iconBgColor} flex items-center justify-center w-24 flex-shrink-0 rounded-l-sm`}>
            <div className={`${iconColor} text-5xl p-2`}>
              {icon}
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-center p-3 xs:p-4'>
            <h3 className={`${titleColor} text-xl font-title font-semibold mb-3 leading-tight`}>{subtitleText}</h3>
            <p className={`${textColor} font-medium leading-relaxed`}>
              {bodyText}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default RenterTypeCard