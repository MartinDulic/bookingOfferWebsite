"use client"; 
import React from 'react'
import { useState, useEffect } from 'react';
import { trackLead } from "@/lib/trackLeadGa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import IconedText from "./ui-lib/common/IconedText";

const HubSpotLeadForm = ({ className, inputClassName, invalidPhoneText, invalidNameText, invalidEmailText}) => {
 const [submitted, setSubmitted] = useState(false);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameErorr, setNameErorr] = useState(false);


  const validateEmail = (value)  => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(value);
  }

  const validateName = (value) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ '-]{2,50}$/;
    return nameRegex.test(value);
  }

  const validatePhone = (value) => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
    return phoneRegex.test(value);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const portalId = '147789375'; 
    const formId = '5e2f47be-d242-422e-80e5-27c29f0d125a';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const form = e.target;
    const formData = new FormData(form);
    
    const phone = formData.get("phone");
    const name = formData.get("name");
    const email = formData.get("email");

    const phoneErr = !validatePhone(phone);
    setPhoneError(phoneErr);

    let emailErr = false;
    let nameErr = false;
    if(hasUserTyped) {
      emailErr = !validateEmail(email);
      nameErr = !validateName(name);
      setEmailError(emailErr);
      setNameErorr(nameErr);
    }

    // Check the local error variables, not the state
    if(phoneErr || emailErr || nameErr) {
      return;
    }
    // Split Name safely
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    const payload = {
      fields: [
        { name: 'email', value: email },
        { name: 'firstname', value: firstName },
        { name: 'lastname', value: lastName }, // HubSpot default is 'lastname'
        { name: 'phone', value: phone }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log("Lead captured in HubSpot!");
      trackLead(); // Track the lead in GA4
      setSubmitted(true);
    }
  };



  useEffect(()=> {
    if(submitted) {
      window.location.href = "/";
    }
  }, [submitted])


  const inputGroupClassname = "flex flex-col mb-12"
  const labelClassname = "text-neutral-800 mb-2"
  const inputGeneralClassname = "outline-none border-b py-2";
  const errorClassName = "text-red-500 text-sm pt-1"
  return (
    <div className={`flex flex-col items-center font-default px-4 py-8 rounded-sm ${className}`}>
      <form
        className={`flex flex-col px-4 w-full max-w-md text-xl`}
        onSubmit={handleFormSubmit}
      >
        <div className="mb-12 text-center text-neutral-800 font-bold text-xl 2xl:text-2xl font-title">Zatražite besplatno savjetovanje</div>

        <div className={inputGroupClassname}>
          <label className={labelClassname}>Telefon:</label>
          <input type="tel" name="phone" placeholder="Unesite telefon*" 
            className={`${phoneError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            onChange={() => setHasUserTyped(true)}
          />
          <p className={`${phoneError ? "" :" hidden"} ${errorClassName}`}>{invalidPhoneText}</p>
        </div>

        <div className={`flex flex-col transition-all duration-700 ease-in-out overflow-hidden ${
          hasUserTyped ? "max-h-[500px]" : "max-h-0"
        }`}>
          <div className={inputGroupClassname}>
            <label className={labelClassname}>Ime i Prezime</label>
            <input type="text" name="name" placeholder="Unesite ime i prezime*" 
              className={`${nameErorr ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            />
            <p className={`${nameErorr ? "" :" hidden"} ${errorClassName}`}>{invalidNameText}</p>
          </div>

          {/*Opens when user types*/}
          <div  className={inputGroupClassname}>
            <label className={labelClassname}>E-Mail:</label>
            <input type="email" name="email" placeholder="Unesite email*" 
              className={`${emailError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            />
            <p className={`${emailError ? "" :" hidden"} ${errorClassName}`}>{invalidEmailText}</p>
          </div>
        </div>
        <button type="submit"
          className="mt-4 py-2 px-4 bg-primary font-semibold text-white shadow-md rounded-xs hover:bg-primary-dark hover:scale-105 transition-transform duration-200"
        >
          Razgovarajmo
        </button>
        <p className="mt-4 text-sm text-center text-neutral-500">
          🔒 Vaši podaci su sigurni, ne dijelimo ih.
        </p>
      </form>

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
}

export default HubSpotLeadForm