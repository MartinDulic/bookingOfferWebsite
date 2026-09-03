import BackgroundImage from '@/components/ui-lib/common/BackgroundImage'
import { FaTrophy } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import CtaFudReduced from '@/components/ui-lib/common/CtaFudReduced'
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import HubSpotLeadCaptureForm from '@/components/HubSpotLeadCaptureForm';
import HubSpotGetEstimateForm from '@/components/HubSpotGetEstimateForm';


export default function AtfSection({ mobileImgSrc, desktopImgSrc, imgAlt, imgClassName }) {
  return (
    <section className="w-full relative min-h-dvh flex flex-col">
      <BackgroundImage
        mobileSrc={mobileImgSrc}
        desktopSrc={desktopImgSrc}
        alt={imgAlt}
        loading="eager"
        imgClassName={imgClassName}
        className={``}
        priority={true}
        overlayOpacity={0.5}
        gradientOverlay={false}
      />

      <div className='w-full lg:max-w-7xl lg:mx-auto lg:px-6 xl:px-8 lg:gap-8 xl:gap-12 flex flex-col lg:flex-row lg:flex-1 lg:pt-16 lg:items-center'>

        <div className='lg:flex-1 relative pt-12 lg:pt-0 flex flex-col'>
          <div className="mt-4 h-10 lg:max-w-96 lg:mt-0 lg:ml-4 flex items-center justify-center font-semibold bg-neutral-900 text-white text-sm lg:rounded-xs lg:border lg:border-neutral-600 ">
            <FaTrophy className="text-primary-accent mr-1 xs:mr-2 mb-0.5" />
            <span>Ostvarili smo<span className='text-primary-accent font-bold'> #1 zaradu </span> u Makarskoj (do 4 osobe)</span>
          </div>
  
          <div className='p-4 pb-0 sm:pb-6 md:pb-8 '>
            <h1 className={`xs:mt-4 max-w-3xl text-3xl sm:text-5xl sm:leading-14 font-title font-bold text-white text-shadow-lg text-shadow-black/30`}>
              {/* Ostvarite maksimalnu zaradu iznajmljivanjem */}
              Zaradite 40% više od iznajmljivanja bez ikakvih obveza
            </h1>
            <div className='mt-4 max-w-xl text-lg text-gray-100 text-shadow-sm text-shadow-black/30'>
              Nemate vremena za konstantnu brigu o oglasima, cijenama, smještaju i gostima? Naš tim preuzima i optimizira sve kako biste ostvarili maksimalnu zaradu.
            </div>
          </div>
          {/*
          <div className='flex flex-col gap-4 items-start p-4 pb-8'>
  
            <div className='flex items-center gap-2 text-gray-300'>
              <LuCircleCheckBig className="text-lg text-primary-600" />
              <span>Povećanje zarade za 20% - 60%</span>
            </div>
            <div className='flex items-center gap-2 text-gray-300'>
              <LuCircleCheckBig className="text-lg text-primary-600" />
              <span>Radimo sve umjesto vas </span>
            </div>
            <div className='flex items-center gap-2 text-gray-300'>
              <LuCircleCheckBig className="text-lg text-primary-600" />
              <span >100% transparentno poslovanje </span>
            </div>
          </div> */}


          <div className='lg:self-start px-4 xs:px-0 mt-6 lg:mt-0 mb-6 lg:pl-4 h-12 w-full flex justify-center lg:justify-start gap-2'>

            <div className='w-44 px-2 bg-neutral-900 border border-neutral-700 flex items-center justify-between gap-2 rounded-xs'>
              <div className='flex items-center justify-evenly gap-2 rounded-xs'>
                <FaAirbnb className='text-2xl text-red-600 '/>
                <div className="flex items-center gap-1">
                  <FaStar className='text-red-600 '/>
                  <div className='font-semibold text-lg text-neutral-100 flex items-center gap-1'>
                    4.9
                    <span className='text-xs text-neutral-300 font-normal'>(130+ rec.)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=' w-44 px-2 bg-neutral-900 border border-neutral-700 flex items-center justify-between gap-2 rounded-xs'>
              <div className='flex items-center justify-evenly gap-2 rounded-xs'>
                <TbBrandBooking className='text-3xl text-blue-800 -ml-0.5'/>
                <div className="flex items-center gap-1">
                  <FaStar className='text-blue-800 -ml-1'/>
                  <div className='font-semibold text-lg text-neutral-100 flex items-center gap-1'>
                    9.7<span className='text-xs text-neutral-300 font-normal'>(269+ rec.)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-6 pb-2 lg:pt-24 lg:pl-4 lg:self-start '>
            <CtaFudReduced fudClassName="text-gray-300" />
          </div>


        </div>

        <div className="py-8 lg:py-0 mx-4 lg:mr-4 flex-1 lg:flex-none lg:w-[28rem] xl:w-[30rem] flex items-center justify-center">
          <HubSpotGetEstimateForm className="w-full shadow-md shadow-black" /> 
        </div>
      </div>

    </section>
  );
}
