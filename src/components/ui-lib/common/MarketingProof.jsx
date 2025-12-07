import React from 'react'

const MarketingProof = ({property, viewsImg, rankingImg}) => {
  return (
    <div className='p-4 lg:p-8 flex flex-col gap-4 items-center shadow-lg rounded-sm bg-white max-w-fit '>
      <div className='font-title text-2xl'>{property}</div>
      <div>
        <img src={viewsImg} alt='View Statistics' />
      </div>
      <div>
        <img src={rankingImg} alt='Ranking Statistics' />
      </div>
    </div>
  )
}

export default MarketingProof