// import React from 'react'
// import { FaStar } from "react-icons/fa6";

// const Testimonial = ({className, image, alt, name, info, text}) => {
//   return (
//     <div className={`${className} p-6 flex flex-col sm:flex-row items-stretch  bg-primary-50/95 backdrop-blur-2xl border border-neutral-200 rounded-xs shadow-lg 2xl:shadow-black/40 `}>
//       <div className=' sm:mr-8 mb-4 sm:mb-0 w-full sm:w-[160px]  text-center flex sm:flex-col items-center sm:justify-center gap-6 sm:gap-4 '>
//         <div className="size-20 2xl:size-24 rounded-full">
//           <img src={image} alt={alt} className="rounded-full shadow-lg"/>
//         </div>
//         <div className='flex flex-col items-start sm:items-center '>
//           <div className="text-xl font-semibold text-primary-700 ">{name}</div>
//           <div className='text-primary-600 text-start sm:text-center'>{info}</div>
//           <div className='flex sm:hidden gap-1 text-amber-400 text-2xl '>
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//           </div>
//         </div>
//       </div>
//       <div className='flex-3 flex flex-col gap-2'>
//         <div className='mt-2 hidden sm:flex gap-1 text-amber-400 text-2xl '>
//           <FaStar />
//           <FaStar />
//           <FaStar />
//           <FaStar />
//           <FaStar />
//         </div>
//         <div className='flex-1 flex items-center'>
//           <p className="text-primary-700 italic text-xl">"{text}"</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Testimonial

import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = ({ className = "", image, alt, name, info, text }) => {
  return (
    <div
      className={`${className} relative p-10 flex flex-col sm:flex-row items-center gap-8
      bg-gradient-to-br from-primary-50 to-white border border-neutral-200/70 
      rounded shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      {/* Image + Info */}
      <div className="flex flex-col items-center sm:items-center text-center sm:text-center ">
        <div className="relative ">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-500 to-neutral-400 blur-sm opacity-40"></div>
          <img
            src={image}
            alt={alt}
            className="relative z-10 size-24 rounded-full object-cover shadow-md"
          />
        </div>

        <div className='mt-2'>
          <div className="text-xl font-semibold text-primary-700">{name}</div>
          <p className="text-primary-600 text-sm">{info}</p>
        </div>
{/* 
        <div className="mt-1 flex gap-1 text-amber-400 text-xl ">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div> */}
      </div>

      {/* Text + Stars */}
      <div className="flex-1 flex flex-col gap-4">
        {/* <div className="hidden sm:flex gap-1 text-amber-400 text-xl">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div> */}

        <div className="relative text-primary-700 italic text-lg leading-relaxed">
          <FaQuoteLeft className="absolute -top-4 -left-3 text-primary-600 text-2xl" />
          <p className="pl-6">{text}</p>
          <FaQuoteRight className="absolute -bottom-2 -right-3 text-primary-600 text-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
