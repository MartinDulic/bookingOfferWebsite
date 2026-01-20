"use client";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import IconedText from "./ui-lib/common/IconedText";
import { useRouter } from "next/navigation"; // Change this import

const GoogleSheetsLeadForm = ({ className, inputClassName}) => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [hasUserTyped, setHasUserTyped] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  useEffect(()=> {
    if(submitted) {
      router.push("/");
    }
  }, [submitted])


  const inputGroupClassname = "flex flex-col mb-12"
  const labelClassname = "text-neutral-800 mb-1"
  const inputGeneralClassname = "outline-none border-b border-primary-600 py-2";
  return (
    <div className={`flex flex-col font-default px-4 py-8 rounded-sm  ${className}`}>
      <form
        method="POST"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWjRNWFuYK3T6T0cBT2Y7VTa04qsKlnyM70Cm7nWYq2xNX1Q/formResponse"
        target="hidden_iframe"
        className={`flex flex-col px-4 w-full max-w-md text-xl`}
        onSubmit={handleFormSubmit}
      >
        <div className="mb-12 text-center text-neutral-800 font-bold text-xl 2xl:text-2xl font-title">Zatrazite besplatan razgovor</div>
        <div className={inputGroupClassname}>
          <label className={labelClassname}>Ime i Prezime:</label>
          <input type="text" name="entry.670102158" placeholder="Marko Markić" required
            className={inputGeneralClassname + inputClassName}
            onChange={() => setHasUserTyped(true)}
          />
        </div>

        <div className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
          hasUserTyped ? "max-h-[500px]" : "max-h-0"
        }`}>
          {/*Opens when user types*/}
          <div  className={inputGroupClassname}>
            <label className={labelClassname}>E-Mail:</label>
            <input type="email" name="entry.1965763834" placeholder="Markomarkic@gmail.com" required
              className={inputGeneralClassname + inputClassName}
            />
          </div>
  
          <div  className={inputGroupClassname}>
            <label className={labelClassname}>Telefon:</label>
            <input type="text" name="entry.1939143989" placeholder="+385 99 203 2607" required
              className={inputGeneralClassname + inputClassName}
            />
          </div>
  
        </div>
        <button type="submit"
          className="mt-4 bg-primary font-semibold text-white py-2 px-4 rounded-xs hover:bg-primary-dark"
        >
          Prijavi Me
        </button>
      </form>

      {/* hidden iframe to prevent page reload */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
      />

      {submitted && (
        <div className="mt-4 text-green-600 font-semibold text-center flex justify-center">
          <IconedText 
            icon={<IoCheckmarkDoneSharp className='text-xl sm:text-3xl'/>} 
            text="Vaša prijava je uspješno poslana." 
            className={"items-center"} 
            textClassName={"text-green-600"}
          />
        </div>
      )}
    </div>
  );
};

export default GoogleSheetsLeadForm;
