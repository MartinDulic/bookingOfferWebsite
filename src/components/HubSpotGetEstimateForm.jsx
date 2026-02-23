"use client"
import React, { useRef } from 'react'
import { useState} from 'react';
import { trackLead } from "@/lib/trackLeadGa";
import CostumFormInput from './CostumFormInput';
import AddressAutocomplete from './AdressAutocomplete';

const HubSpotGetEstimateForm = ({ className, inputClassName}) => {  
  const adressRef = useRef();
  const guestsRef = useRef();
  const bathsRef = useRef();
  const bedsRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  const [step, setStep] = useState(1);

  const updateField = (field) => (data) => {
    setFormState(prev => ({
      ...prev,
      [field]: data
    }));
  };

  const [formState, setFormState] = useState({
    adress: { value: "", error: true },
    guests: { value: "", error: true },
    baths: { value: "", error: true },
    beds: { value: "", error: true },
    phone: { value: "", error: true },
    email: { value: "", error: true },
    name: { value: "", error: true },
  });

  const validateStep1 = () => {
    adressRef.current?.setErrorState(formState.adress.error);
    guestsRef.current?.setErrorState(formState.guests.error);
    bathsRef.current?.setErrorState(formState.baths.error);
    bedsRef.current?.setErrorState(formState.beds.error);
    return !formState.guests.error && !formState.baths.error && !formState.beds.error && !formState.adress.error;
  }

  const validateStep2 = () => {
    nameRef.current?.setErrorState(formState.name.error);
    phoneRef.current?.setErrorState(formState.phone.error);
    emailRef.current?.setErrorState(formState.email.error);
    return !formState.phone.error && !formState.email.error && !formState.name.error;
  }


  
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

  const validateNumberRange = (value) => {
    const num = Number(value);
    return Number.isInteger(num) && num > 0 && num < 50;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!validateStep2()) {
      console.log("Step 2 validation failed");
      return;
    }
    const portalId = '147789375'; 
    const formId = 'fe3c07de-c967-4b72-82a0-e7a71b893a21';
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const form = e.target;
    const formData = new FormData(form);
    
    const phone = formData.get("phone");
    const name = formData.get("name");
    const email = formData.get("email");
    const adress = formData.get("adress");
    const guests = formData.get("guests");
    const baths = formData.get("baths");
    const beds = formData.get("beds");

    // Split Name safely
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    const payload = {
      fields: [
        { name: 'email', value: email },
        { name: 'firstname', value: firstName },
        { name: 'lastname', value: lastName },
        { name: 'phone', value: phone },
        { name: 'propertyadress', value: adress },
        { name: 'numberofbeds', value: beds },
        { name: 'numberofguests', value: guests },
        { name: 'numberofbaths', value: baths },
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
      trackLead("get_free_earings_estimate_form"); // Track the lead in GA4
      setTimeout(() => {
        window.location.href = "/hr/hvala";
      }, 500);
    } else {
      console.error("HubSpot API Error:", await response.json());
      alert("Došlo je do pogreške prilikom slanja obrasca. Molimo pokušajte ponovno.");
    }
  };

  return (
    <div className={`flex flex-col items-center font-default px-4 py-8 rounded-sm ${className}`}>
      <form
        className={`flex flex-col px-4 w-full max-w-md text-xl`}
        onSubmit={handleFormSubmit}
      >
        <div className="mb-12 text-neutral-800 font-bold text-xl 2xl:text-2xl font-title">Zatražite besplatnu procjenu zarade za vaš smještaj</div>
        {/* <div className="mb-6 ">
          <div className='flex gap-2'>
            <div className={`flex-1 min-h-1 ${step < 2 ? "bg-neutral-500" : "bg-green-600"}`}/>
            <div className={`flex-1 min-h-1 ${step < 3 ? "bg-neutral-500" : "bg-green-600"}`}/>
          </div>
        </div> */}
        <div className="relative w-full overflow-hidden min-h-[320px]">

          {/* Step 1 */}
          <div className={`flex flex-col transition-transform duration-700 ease-in-out overflow-hidden
            ${step === 1 ? " translate-x-0 opacity-100" : " translate-x-full hidden" }
          `}>
            <AddressAutocomplete 
              ref={adressRef}
              labelText="Adresa smještaja"
              placeholder="Unesite adresu smještaja*"
              errorMessage="Molimo odaberite ispravnu adresu iz liste"
              onValueChange={updateField("adress")}
            />

            <CostumFormInput 
              ref={guestsRef}
              name="guests"
              type="number"
              labelText={"Broj gostiju"} 
              errorMessage={"Molimo unesite ispravan broj"} 
              placeholder={"Unesite broj gostiju*"}
              validatorFunction={validateNumberRange} 
              onValueChange={updateField("guests")} 
            />
            <CostumFormInput 
              ref={bathsRef}
              name="baths"
              type="number"
              labelText={"Broj kupaona"} 
              placeholder={"Unesite broj kupaona*"}
              errorMessage={"Molimo unesite ispravan broj"} 
              validatorFunction={validateNumberRange} 
              onValueChange={updateField("baths")} 
            />
            <CostumFormInput 
              ref={bedsRef}
              name="beds"
              type="number"
              labelText={"Broj kreveta"} 
              errorMessage={"Molimo unesite ispravan broj"} 
              placeholder={"Unesite broj kreveta*"}
              validatorFunction={validateNumberRange} 
              onValueChange={updateField("beds")} 
            />

            <button type="button"
              className="py-2 px-4 mb-4 w-4/5 self-center bg-primary font-semibold text-white shadow-md rounded-xs hover:bg-primary-dark hover:scale-105 transition-transform duration-200"
              onClick={() => {
                if(validateStep1()) {
                  setStep(2);
                }
              }}
            >
              Dalje
            </button>
          </div>

          {/* Step 2 */}
          <div className={`flex flex-col transition-transform duration-700 ease-in-out overflow-hidden
            ${step === 2 ? " translate-x-0 opacity-100" : " translate-x-full hidden" }
          `}>

            <CostumFormInput 
              ref={nameRef}
              name="name"
              type="text"
              labelText={"Ime i Prezime"} 
              placeholder={"Unesite ime*"}
              errorMessage={"Molimo unesite ispravno ime i prezime"}
              validatorFunction={validateName}
              onValueChange={updateField("name")} 
            />
            <CostumFormInput 
              ref={phoneRef}
              name="phone"
              type="tel"
              labelText={"Telefon"} 
              placeholder={"Unesite telefon*"}
              errorMessage={"Molimo unesite ispravan broj telefona"}
              validatorFunction={validatePhone}
              onValueChange={updateField("phone")} 
            />
            <CostumFormInput 
              ref={emailRef}
              name="email"
              type="email"
              labelText={"E-Mail"} 
              placeholder={"Unesite email*"}
              errorMessage={"Molimo unesite ispravan email"}
              validatorFunction={validateEmail} 
              onValueChange={updateField("email")} 
            />

            <button type="submit"
              className="mb-4 py-2 px-4 w-4/5 self-center bg-primary font-semibold text-white shadow-md rounded-xs hover:bg-primary-dark hover:scale-105 transition-transform duration-200"
            >
              Pošalji
            </button>

            <button type="button"
              className="py-2 mb-4 px-4 w-4/5 self-center bg-white font-semibold text-primary border-primary border shadow-md rounded-xs hover:bg-primary-dark hover:scale-105 transition-transform duration-200"
              onClick={() => {setStep(1)}}
            >
              Nazad
            </button>
          </div>

        </div>

        <p className="mt-4 text-sm text-center text-neutral-500">
          🔒 Vaši podaci su sigurni, ne dijelimo ih.
        </p>
      </form>
    </div>
  );
}

export default HubSpotGetEstimateForm