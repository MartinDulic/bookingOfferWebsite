"use client";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import IconedText from "./ui-lib/common/IconedText";
import { useRouter } from "next/navigation"; // Change this import

const GoogleSheetsLeadForm = ({ className, inputClassName, invalidPhoneText, invalidNameText, invalidEmailText}) => {
  const router = useRouter();
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    
    const phone = formData.get("entry.1939143989");
    const name = formData.get("entry.670102158");
    const email = formData.get("entry.1965763834");

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

    console.log(phoneErr, emailErr, nameErr);

    // Check the local error variables, not the state
    if(phoneErr || emailErr || nameErr) {
      return;
    }

    form.submit();
    setSubmitted(true);
  };


  useEffect(()=> {
    if(submitted) {
      router.push("/");
    }
  }, [submitted])


  const inputGroupClassname = "flex flex-col mb-12"
  const labelClassname = "text-neutral-800 mb-2"
  const inputGeneralClassname = "outline-none border-b  py-2";
  const errorClassName = "text-red-500 text-sm pt-1"
  return (
    <div className={`flex flex-col font-default px-4 py-8 rounded-sm ${className}`}>
      <form
        method="POST"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWjRNWFuYK3T6T0cBT2Y7VTa04qsKlnyM70Cm7nWYq2xNX1Q/formResponse"
        target="hidden_iframe"
        className={`flex flex-col px-4 w-full max-w-md text-xl`}
        onSubmit={handleFormSubmit}
      >
        <div className="mb-12 text-center text-neutral-800 font-bold text-xl 2xl:text-2xl font-title">Zatražite besplatno savjetovanje</div>

        <div  className={inputGroupClassname}>
          <label className={labelClassname}>Telefon:</label>
          <input type="text" name="entry.1939143989" placeholder="Unesite telefon*" 
            className={`${phoneError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            onChange={() => setHasUserTyped(true)}
          />
          <p className={`${phoneError ? "" :" hidden"} ${errorClassName}`}>{invalidPhoneText}</p>
        </div>

        <div className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
          hasUserTyped ? "max-h-[500px]" : "max-h-0"
        }`}>
          <div className={inputGroupClassname}>
            <label className={labelClassname}>Ime</label>
            <input type="text" name="entry.670102158" placeholder="Unesite ime*" 
              className={`${nameErorr ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            />
            <p className={`${nameErorr ? "" :" hidden"} ${errorClassName}`}>{invalidNameText}</p>
          </div>

          {/*Opens when user types*/}
          <div  className={inputGroupClassname}>
            <label className={labelClassname}>E-Mail:</label>
            <input type="email" name="entry.1965763834" placeholder="Unesite email*" 
              className={`${emailError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
            />
            <p className={`${emailError ? "" :" hidden"} ${errorClassName}`}>{invalidEmailText}</p>
          </div>
        </div>
        <button type="submit"
          className="mt-4 bg-primary font-semibold text-white py-2 px-4 rounded-xs hover:bg-primary-dark"
        >
          Razgovarajmo
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
