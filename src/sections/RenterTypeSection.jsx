import React from 'react'
import Title from "@/components/Title";
import RenterTypeCard from '@/components/RenterTypeCard';
import { GiFamilyHouse } from "react-icons/gi";


const RenterTypeSection = () => {
  return (
    <div className="font-default bg-primary-100 min-h-svh w-svw sm:bg-red-300 xs:py-8 xs:px-4">
      <div className="max-w-4xl mx-auto">
        <Title className={"text-primary-800 xs:text-center mb-2 xs:mb-6"}>Neka vaš smještaj radi za vas</Title>
        <p className="mx-4 mt-2 xs:mt-4 xs:mb-12 text-primary-800 xs:text-center text-xl">
          Izaberite opciju koja vas najbolje opisuje.
        </p>
        <div className='mt-4 xs:mt-8 flex flex-col gap-2 xs:gap-6'>
          <RenterTypeCard
            subtitleText={"Novi Iznajmljivač"}
            bodyText={"Želim iznajmiti svoj prvi smještaj."}
            href={"/noviIznajmljivac"}
            icon={<GiFamilyHouse/>}
            iconBgColor={"bg-green-200"}
            iconColor={"text-green-700"}
            cardBgColor={"bg-green-50"}
            titleColor={"text-green-800"}
            textColor={"text-green-700"}
            borderColor={"border-green-300"}
          />
          <RenterTypeCard
            subtitleText={"Iskusni Iznajmljivač"}
            bodyText={"Već iznajmljujem smještaj i želim bolje rezultate."}
            href={"/iskusniIznajmljivac"}
            icon={<GiFamilyHouse/>}
            iconBgColor={"bg-blue-200"}
            iconColor={"text-blue-700"}
            cardBgColor={"bg-blue-50"}
            titleColor={"text-blue-800"}
            textColor={"text-blue-700"}
            borderColor={"border-blue-200"}
          />
          <RenterTypeCard
            subtitleText={"Investitor"}
            bodyText={"Imam smještaj i ne želim nikakvu brigu o njemu."}
            href={"/investitor"}
            icon={<GiFamilyHouse/>}
            iconBgColor={"bg-purple-200"}
            iconColor={"text-purple-700"}
            cardBgColor={"bg-purple-50"}
            titleColor={"text-purple-800"}
            textColor={"text-purple-700"}
            borderColor={"border-purple-200"}
          />
        </div>
      </div>
    </div>
  )
}

export default RenterTypeSection