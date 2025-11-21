// import LabeledBenefit from '@/components/ui-lib/common/LabeledBenefit';
// import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage';
// import Section from '@/components/ui-lib/common/Section'
// import StatBouble from '@/components/ui-lib/common/StatBouble'
// import Title from '@/components/ui-lib/common/Title'
// import React from 'react'
// import { FaLongArrowAltRight } from "react-icons/fa";

// const CaseStudySection = () => {
//   return (
//     <Section className={"bg-neutral-100"}>
//       <Title className={"text-center"}>
//         <div className='max-w-5xl mx-auto'>
//           <div className='text-primary-600'>Sa 11000 € na 25000 €</div> 
//           Transformacija Apartmana Hedonist
//         </div>
//       </Title>

//       <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6'>
//         {/* Image Container - Takes full width on mobile, 2/3 on desktop */}
//         <div className='relative lg:col-span-2 xl:col-span-2 mt-4 w-full flex justify-center items-center'>
//           <ResponsiveImage
//             alt={"Earning Statistics"}
//             mobileSrc={"/images/temp/DataCompactScaled.png"}
//             desktopSrc={"/images/temp/DataCompact.png"}
//             className={`!static !w-auto !h-auto object-contain shadow-md max-w-full`}
//           />
//         </div>

//         {/* Stats Container */}
//         <div className='mt-4 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-1 lg:col-span-1 xl:col-span-1'>
//           <StatBouble
//             stat={<div className='flex items-center justify-center text-lg sm:text-xl'>20.Lipanj <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 15.Svibanj</div>}
//             text={"Prva Rezervacija"}
//             className={"col-span-2 lg:col-span-1"}
//           />
//           <StatBouble
//             stat={<div className='flex items-center justify-center text-lg sm:text-xl'>42 <FaLongArrowAltRight className='inline mx-1 sm:mx-2' />134</div>}
//             text={"Noćenja 1. Svibanj - 30. Rujan"}
//             className={"col-span-1 lg:col-span-1"}
//           />
//           <StatBouble
//             stat={<div className='flex items-center justify-center text-lg sm:text-xl'>+128%</div>}
//             text={"Povećanje Zarade"}
//             className={"col-span-1 lg:col-span-1"}
//           />
//           <StatBouble
//             stat={<div className='flex items-center justify-center text-lg sm:text-xl'>5.Rujan <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 3.Listopad</div>}
//             text={"Posljednja Rezervacija"}
//             className={"col-span-2 lg:col-span-1"}
//           />
//         </div>
        
//         {/* Problem Card */}
//         <div className={`p-4 sm:p-6 mt-4 flex flex-col justify-evenly
//           font-default bg-white border-neutral-200 rounded-sm shadow-md border
//           lg:col-span-3 xl:col-span-1`}
//         >
//           <div className='ml-1 text-neutral-900 font-bold text-lg sm:text-xl font-title border-l-10 pl-4 border-red-700'>
//             Ispodprosječni Rezultati
//           </div>
//           <div className='text-neutral-800 mt-3 sm:mt-4 text-justify text-sm sm:text-base'>
//             Usprkos svojoj poziciji na samoj plaži u centru Makarske, ovaj jednosobni apartman imao je iznimno nisku popunjenost. Bez razrađene strategije, bez optimizacije vidljivosti oglasa i nagađajući cijene vlasnik je reklamirao smještaj na više mjesta bezuspješno.
//           </div>
          
//         </div>

//       </div>
//       {/* Solution Card */}
//       <div className={`p-4 sm:p-6 mt-4 flex flex-col justify-evenly 
//         font-default bg-white border-neutral-200 rounded-sm shadow-md border`}
//       >
//         <div className='text-neutral-900 font-bold text-lg sm:text-xl font-title border-l-10 pl-4 border-green-700'>
//           Naša Strategija Iznajmljivanja 
//         </div>

//         <div className='mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
//           <LabeledBenefit 
//             number={1} 
//             subtitle={"Maksimalna Vidljivost"}
//             text={"Profesionalno fotografiranje, oglašavanje i optimizacija oglasa na svim portalima."}
//             className={"text-sm sm:text-base"}
//           />

//           <LabeledBenefit
//             number={2}
//             subtitle={"Maksimalna Popunjenost"}
//             text={"Stalna prilagodba cijena i uvjeta iznajmljivanja kako bi se popunili svi kapaciteti po najvišoj mogućoj cijeni."}
//             className={"text-sm sm:text-base"}
//           />

//           <LabeledBenefit 
//             number={3} 
//             subtitle={"Dostupnost Gostima 24/7"}
//             text={"Trenutačan odogovor na sve upite i zahtjeve gosta u svakom trenutku."}
//             className={"text-sm sm:text-base"}
//           />

//           <LabeledBenefit 
//             number={4} 
//             subtitle={"Osiguranje Kvalitete"} 
//             text={"Suradnja sa provjerenim partenrima za čišćenje i održavanje smještaja kako bi osigurali besprijekornu čistoću."}
//             className={"text-sm sm:text-base"}
//           />
//         </div>
//       </div>
//     </Section>
//   )
// }

// export default CaseStudySection




import LabeledBenefit from '@/components/ui-lib/common/LabeledBenefit';
import ResponsiveImage from '@/components/ui-lib/common/ResponsiveImage';
import Section from '@/components/ui-lib/common/Section'
import StatBouble from '@/components/ui-lib/common/StatBouble'
import Title from '@/components/ui-lib/common/Title'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const CaseStudySection = () => {
  return (
    <Section className={"bg-neutral-100"}>
      <Title className={"text-center"}>
        <div className='max-w-5xl mx-auto'>
          <div className='text-primary-600'>Sa 11000 € na 25000 €</div> 
          Transformacija Apartmana Hedonist
        </div>
      </Title>

      <div className='grid grid-cols-1 xl:grid-cols-4 gap-3 '>
        {/* Image Container - Takes full width on mobile, 2/3 on desktop */}
        <div className='relative lg:col-span-2 xl:col-span-2 mt-4 w-full flex justify-center items-center'>
          <ResponsiveImage
            alt={"Earning Statistics"}
            mobileSrc={"/images/temp/DataCompactScaled.png"}
            desktopSrc={"/images/temp/DataCompact.png"}
            className={`!static !w-auto !h-auto object-contain shadow-md max-w-full`}
          />
        </div>

        {/* Right Side Container - Stats and Problem Card stacked vertically on XL */}
        <div className='xl:col-span-2 xl:grid xl:grid-rows-2 xl:gap-4 xl:mt-4'>
          {/* Stats Container */}
          <div className='xl:col-span-2 mt-4 grid grid-cols-3 gap-3 xl:mt-0'>
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>20.Lipanj <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 15.Svibanj</div>}
              text={"Prva Rezervacija"}
              className={"col-span-2"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>42 <FaLongArrowAltRight className='inline mx-1 sm:mx-2' />134</div>}
              text={"Noćenja U Sezoni"}
              className={"col-span-1"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>+128%</div>}
              text={"Povećanje Zarade"}
              className={"col-span-1"}
            />
            <StatBouble
              stat={<div className='flex items-center justify-center text-lg sm:text-xl'>5.Rujan <FaLongArrowAltRight className='inline mx-1 sm:mx-2' /> 3.Listopad</div>}
              text={"Posljednja Rezervacija"}
              className={"col-span-2 "}
            />
          </div>
          
          {/* Problem Card */}
          <div className={`p-4 sm:p-6 mt-4 flex flex-col justify-evenly
            font-default bg-white border-neutral-200 rounded-sm shadow-md border
            lg:col-span-3 xl:col-span-2 xl:mt-0`}
          >
            <div className='ml-1 text-neutral-900 font-bold text-lg sm:text-xl font-title border-l-10 pl-4 border-red-700'>
              Ispodprosječni Rezultati
            </div>
            <div className='text-neutral-800 mt-3 sm:mt-4 text-justify text-sm sm:text-base'>
              Usprkos svojoj poziciji na samoj plaži u centru Makarske, ovaj jednosobni apartman imao je iznimno nisku popunjenost. Bez razrađene strategije, bez optimizacije vidljivosti oglasa i nagađajući cijene vlasnik je reklamiraj smještaj na više mjesta bezuspješno.
            </div>
          </div>
        </div>
      </div>

      {/* Solution Card */}
      <div className={`p-4 sm:p-6 mt-4 lg:mr-3 xl:mr-0 flex flex-col justify-evenly 
        font-default bg-white border-neutral-200 rounded-sm shadow-md border`}
      >
        <div className='text-neutral-900 font-bold text-lg sm:text-xl font-title border-l-10 pl-4 border-green-700'>
          Naša Strategija Iznajmljivanja 
        </div>

        <div className='mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          <LabeledBenefit 
            number={1} 
            subtitle={"Maksimalna Vidljivost"}
            text={"Profesionalno fotografiranje, oglašavanje i optimizacija oglasa na svim portalima."}
            className={"text-sm sm:text-base"}
          />

          <LabeledBenefit
            number={2}
            subtitle={"Maksimalna Popunjenost"}
            text={"Stalna prilagodba cijena i uvjeta iznajmljivanja kako bi se popunili svi kapaciteti po najvišoj mogućoj cijeni."}
            className={"text-sm sm:text-base"}
          />

          <LabeledBenefit 
            number={3} 
            subtitle={"Dostupnost Gostima 24/7"}
            text={"Trenutačan odogovor na sve upite i zahtjeve gosta u svakom trenutku."}
            className={"text-sm sm:text-base"}
          />

          <LabeledBenefit 
            number={4} 
            subtitle={"Osiguranje Kvalitete"} 
            text={"Suradnja sa provjerenim partenrima za čišćenje i održavanje smještaja kako bi osigurali besprijekornu čistoću."}
            className={"text-sm sm:text-base"}
          />
        </div>
      </div>
    </Section>
  )
}

export default CaseStudySection






// const CaseStudySection = () => {
//   const caseStudyData = {
//     headline: "From 65% to 92% Occupancy: How We Transformed a Downtown Luxury Condo",
//     customerQuote: "Professional management turned my stressful side hustle into a truly passive income stream. I get detailed reports and direct deposits without any of the midnight phone calls.",
//     customerTitle: "Property Owner",
//     quickStats: [
//       { metric: "40%", description: "Increase in Annual Revenue" },
//       { metric: "65% → 92%", description: "Occupancy Rate" },
//       { metric: "4.2 → 4.9", description: "Guest Rating" },
//       { metric: "22%", description: "Higher Average Daily Rate" }
//     ],
//     challenge: {
//       title: "The Underperforming Asset",
//       description: "Despite its prime downtown location and luxury amenities, this 3-bedroom condo was struggling with below-market occupancy rates. The owner, managing remotely, faced constant guest communication challenges and maintenance coordination issues, leading to slow response times and mediocre reviews."
//     },
//     solution: {
//       title: "Our Management Strategy",
//       steps: [
//         {
//           title: "Dynamic Pricing",
//           description: "Implemented AI-powered rate optimization to match market demand"
//         },
//         {
//           title: "Professional Listing",
//           description: "High-quality photography and optimized listing copy to showcase premium features"
//         },
//         {
//           title: "24/7 Guest Service",
//           description: "Dedicated team handling all inquiries and issues instantly"
//         },
//         {
//           title: "Quality Assurance",
//           description: "Professional cleaning and maintenance partnerships for perfect guest experiences"
//         }
//       ]
//     },
//     results: {
//       title: "Measurable Results",
//       metrics: [
//         { label: "Previous Occupancy", value: "65%" },
//         { label: "Current Occupancy", value: "92%" },
//         { label: "Revenue Growth", value: "+40%" },
//         { label: "Guest Rating", value: "4.9/5.0" }
//       ]
//     }
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {caseStudyData.headline}
//           </h1>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A confidential success story demonstrating how professional management maximizes rental property performance
//           </p>
//         </div>

//         {/* Quick Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {caseStudyData.quickStats.map((stat, index) => (
//             <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
//               <div className="text-2xl font-bold text-blue-600 mb-2">{stat.metric}</div>
//               <div className="text-gray-600 text-sm">{stat.description}</div>
//             </div>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12">
          
//           {/* Left Column - Challenge & Solution */}
//           <div className="lg:col-span-2 space-y-12">
            
//             {/* Challenge Section */}
//             <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
//               <div className="flex items-center mb-6">
//                 <div className="w-3 h-8 bg-red-500 rounded-full mr-4"></div>
//                 <h2 className="text-2xl font-bold text-gray-900">{caseStudyData.challenge.title}</h2>
//               </div>
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 {caseStudyData.challenge.description}
//               </p>
//               <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
//                 <p className="text-red-800 text-sm italic">
//                   "I was spending 10+ hours per week managing inquiries and coordinating cleaners, all while the property was underperforming financially."
//                 </p>
//               </div>
//             </div>

//             {/* Solution Section */}
//             <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
//               <div className="flex items-center mb-8">
//                 <div className="w-3 h-8 bg-green-500 rounded-full mr-4"></div>
//                 <h2 className="text-2xl font-bold text-gray-900">{caseStudyData.solution.title}</h2>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {caseStudyData.solution.steps.map((step, index) => (
//                   <div key={index} className="flex space-x-4">
//                     <div className="flex-shrink-0">
//                       <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                         <span className="text-green-600 font-bold text-sm">{index + 1}</span>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
//                       <p className="text-gray-600 text-sm">{step.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Results & CTA */}
//           <div className="space-y-8">
            
//             {/* Results Card */}
//             <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
//               <h2 className="text-2xl font-bold mb-8">{caseStudyData.results.title}</h2>
              
//               <div className="space-y-6">
//                 {caseStudyData.results.metrics.map((metric, index) => (
//                   <div key={index} className="flex justify-between items-center pb-4 border-b border-blue-500 last:border-b-0">
//                     <span className="text-blue-100">{metric.label}</span>
//                     <span className="text-xl font-bold bg-white/20 px-3 py-1 rounded-full">
//                       {metric.value}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Testimonial Card */}
//             <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
//               <div className="flex items-start mb-4">
//                 <div className="text-4xl text-gray-300 mr-4">"</div>
//                 <p className="text-gray-700 text-lg italic flex-1">
//                   {caseStudyData.customerQuote}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
//                   AO
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">Anonymous Owner</div>
//                   <div className="text-gray-500 text-sm">{caseStudyData.customerTitle}</div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Card */}
//             <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-lg p-8 text-white text-center">
//               <h3 className="text-xl font-bold mb-4">Ready to Transform Your Property?</h3>
//               <p className="text-blue-200 mb-6 text-sm">
//                 Get a free performance analysis and see what your property could earn with professional management.
//               </p>
//               <button className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200 mb-3">
//                 Get Your Free Analysis
//               </button>
//               <button className="w-full border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition duration-200">
//                 View More Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudySection;