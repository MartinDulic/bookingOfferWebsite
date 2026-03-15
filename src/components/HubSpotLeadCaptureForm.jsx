"use client"; 
import React from 'react'
import { useState, useEffect } from 'react';
import { trackLead } from '@/lib/gtmUtils';

const HubSpotLeadCaptureForm = ({ className, inputClassName, invalidPhoneText, invalidNameText, invalidEmailText}) => {
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    // 1. The Browser-level alert (Refresh/Close Tab)
    const handleBeforeUnload = (e) => {
      if (hasUserTyped) {
        e.preventDefault();
        e.returnValue = '';
      }
    };


    // 2. Intercepting Popstate (Back Button)
    const handlePopState = (e) => {
      if (hasUserTyped) {
        // This is the tricky part: push the current state back so they don't actually leave
        window.history.pushState(null, null, window.location.pathname);
        const confirmLeave = window.confirm("Sigurni ste da želite napustiti stranicu? Podaci koje ste unijeli nisu poslani.");
        if (confirmLeave) {
          setHasUserTyped(false); // Disable flag
          window.history.back();  // Now actually go back
        }
      }
    };

    // Attach listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Add a fake entry to the history so there is something to "pop" 
    if (hasUserTyped) {
      window.history.pushState(null, null, window.location.pathname);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hasUserTyped]);

  // 1. Lighter Validation Functions
  const validateEmail = (value) => {
    // Simple check for @ and a dot. Don't over-engineer email regex.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateName = (value) => {
    // Just check if it has at least 2 characters. 
    // Avoid strict character restrictions to support all international names.
    return value.trim().length >= 2;
  };

  const validatePhone = (value) => {
    // Check if it has at least 6 digits. 
    // Users hate it when they can't use spaces or dashes.
    const digits = value.replace(/\D/g, "");
    return digits.length >= 6;
  };

  const handleInputChange = (e, setter) => {
    setHasUserTyped(true);
    setter(false); // Clear the error the moment they start typing again
  };

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
      setNameError(nameErr);
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
      trackLead("contact_us_form"); // Track the lead in GA4
      setHasUserTyped(false); // Reset the flag so they can leave without prompt
      setTimeout(() => {
        window.location.href = "/hr/hvala";
      }, 700);
    } else {
      console.error("HubSpot API Error:", await response.json());
      alert("Došlo je do pogreške prilikom slanja obrasca. Molimo pokušajte ponovno.");
    }
  };

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
            onChange={(e) => handleInputChange(e, setPhoneError)}
          />
          <p className={`${phoneError ? "" :" hidden"} ${errorClassName}`}>{invalidPhoneText}</p>
        </div>

        <div className={`flex flex-col transition-all duration-700 ease-in-out overflow-hidden ${
          hasUserTyped ? "max-h-[500px]" : "max-h-0"
        }`}>
          <div className={inputGroupClassname}>
            <label className={labelClassname}>Ime i Prezime</label>
            <input type="text" name="name" placeholder="Unesite ime i prezime*" 
              className={`${nameError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
              onChange={(e) => handleInputChange(e, setNameError)}
            />
            <p className={`${nameError ? "" :" hidden"} ${errorClassName}`}>{invalidNameText}</p>
          </div>

          {/*Opens when user types*/}
          <div  className={inputGroupClassname}>
            <label className={labelClassname}>E-Mail:</label>
            <input type="email" name="email" placeholder="Unesite email*" 
              className={`${emailError ? " border-red-500" : " border-primary-600"} + ${inputGeneralClassname + inputClassName}`}
              onChange={(e) => handleInputChange(e, setEmailError)}
            />
            <p className={`${emailError ? "" :" hidden"} ${errorClassName}`}>{invalidEmailText}</p>
          </div>
        </div>
        <button type="submit"
          className="mt-4 py-2 px-4 bg-primary font-semibold text-white shadow-md rounded-xs hover:bg-primary-dark hover:scale-105 transition-transform duration-200"
        >
          Pošalji
        </button>
        <p className="mt-4 text-sm text-center text-neutral-500">
          🔒 Vaši podaci su sigurni, ne dijelimo ih.
        </p>
      </form>
    </div>
  );
}

export default HubSpotLeadCaptureForm