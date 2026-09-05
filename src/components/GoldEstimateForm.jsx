"use client";
import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import { trackLead } from "@/lib/trackingUtils";
import CostumFormInput from "./CostumFormInput";
import AddressAutocomplete from "./AdressAutocomplete";
import inputStyles from "@/components/ui-lib/gold/goldFieldStyles";

/*
 * Same HubSpot submission and validation as HubSpotGetEstimateForm — restyled
 * for the gold landing design (dark card, gold rule, uppercase micro-labels).
 */

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validateName = (value) => value.trim().length >= 2;
const validatePhone = (value) => value.replace(/\D/g, "").length >= 6;
const validateNumberRange = (value) => {
  const num = Number(value);
  return Number.isInteger(num) && num > 0 && num < 50;
};

const submitButtonClass =
  "mt-1.5 flex w-full items-center justify-center gap-2.5 rounded-xs bg-gold py-4 text-[1.0625rem] font-bold text-ink transition-colors duration-200 hover:bg-gold-dark";

const GoldEstimateForm = ({ className = "" }) => {
  const adressRef = useRef();
  const guestsRef = useRef();
  const bathsRef = useRef();
  const bedsRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  const [step, setStep] = useState(1);

  const [formState, setFormState] = useState({
    adress: { value: "", error: true },
    guests: { value: "", error: true },
    baths: { value: "", error: true },
    beds: { value: "", error: true },
    phone: { value: "", error: true },
    email: { value: "", error: true },
    name: { value: "", error: true },
  });

  const updateField = (field) => (data) => {
    setFormState((prev) => ({ ...prev, [field]: data }));
  };

  const validateStep1 = () => {
    adressRef.current?.setErrorState(formState.adress.error);
    guestsRef.current?.setErrorState(formState.guests.error);
    bathsRef.current?.setErrorState(formState.baths.error);
    bedsRef.current?.setErrorState(formState.beds.error);
    return (
      !formState.adress.error &&
      !formState.guests.error &&
      !formState.baths.error &&
      !formState.beds.error
    );
  };

  const validateStep2 = () => {
    nameRef.current?.setErrorState(formState.name.error);
    phoneRef.current?.setErrorState(formState.phone.error);
    emailRef.current?.setErrorState(formState.email.error);
    return (
      !formState.name.error && !formState.phone.error && !formState.email.error
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const portalId = "147789375";
    const formId = "fe3c07de-c967-4b72-82a0-e7a71b893a21";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const formData = new FormData(e.target);
    const nameParts = formData.get("name").trim().split(" ");

    const payload = {
      fields: [
        { name: "email", value: formData.get("email") },
        { name: "firstname", value: nameParts[0] },
        {
          name: "lastname",
          value: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
        },
        { name: "phone", value: formData.get("phone") },
        { name: "propertyadress", value: formData.get("adress") },
        { name: "numberofbeds", value: formData.get("beds") },
        { name: "numberofguests", value: formData.get("guests") },
        { name: "numberofbaths", value: formData.get("baths") },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      trackLead("get_free_earings_estimate_form");
      setTimeout(() => {
        window.location.href = "/hr/hvala";
      }, 500);
    } else {
      console.error("HubSpot API Error:", await response.json());
      alert(
        "Došlo je do pogreške prilikom slanja obrasca. Molimo pokušajte ponovno."
      );
    }
  };

  return (
    <div
      className={`border border-white/10 border-t-2 border-t-gold bg-ink-card px-[clamp(1.25rem,3vw,2.125rem)] pt-8 pb-7 sm:pt-9 ${className}`}
    >
      <form onSubmit={handleFormSubmit} noValidate>
        <div className="pb-h4 font-title text-white">
          Zatražite besplatnu analizu
        </div>
        <p className="mt-2 text-[0.90625rem] leading-relaxed text-ash">
          Popunite obrazac — javimo vam se u roku od sat vremena.
        </p>

        {/* Progress: gold fills the second bar once the property step is done */}
        <div className="my-6 flex items-center gap-2 sm:my-7">
          <span className="h-0.5 flex-1 bg-gold" />
          <span
            className={`h-0.5 flex-1 transition-colors duration-500 ${
              step === 2 ? "bg-gold" : "bg-white/15"
            }`}
          />
          <span className="pb-eyebrow ml-1.5 text-[0.6875rem] tracking-[0.14em] text-ash">
            Korak {step} / 2
          </span>
        </div>

        {/* Step 1 — the property */}
        <div className={step === 1 ? "flex flex-col gap-5 sm:gap-6" : "hidden"}>
          <AddressAutocomplete
            ref={adressRef}
            labelText="Adresa smještaja"
            placeholder="npr. Šibenska 45, Split"
            errorMessage="Molimo odaberite adresu iz liste"
            onValueChange={updateField("adress")}
            {...inputStyles}
          />

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
            <CostumFormInput
              ref={guestsRef}
              name="guests"
              type="number"
              labelText="Gostiju"
              placeholder="4"
              errorMessage="Neispravan broj"
              validatorFunction={validateNumberRange}
              onValueChange={updateField("guests")}
              {...inputStyles}
              wrapperClassName="gap-[0.4375rem] min-w-0"
            />
            <CostumFormInput
              ref={bathsRef}
              name="baths"
              type="number"
              labelText="Kupaona"
              placeholder="1"
              errorMessage="Neispravan broj"
              validatorFunction={validateNumberRange}
              onValueChange={updateField("baths")}
              {...inputStyles}
              wrapperClassName="gap-[0.4375rem] min-w-0"
            />
            <CostumFormInput
              ref={bedsRef}
              name="beds"
              type="number"
              labelText="Kreveta"
              placeholder="2"
              errorMessage="Neispravan broj"
              validatorFunction={validateNumberRange}
              onValueChange={updateField("beds")}
              {...inputStyles}
              wrapperClassName="gap-[0.4375rem] min-w-0"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              if (validateStep1()) setStep(2);
            }}
            className={submitButtonClass}
          >
            Dalje
          </button>
        </div>

        {/* Step 2 — the contact */}
        <div className={step === 2 ? "flex flex-col gap-5 sm:gap-6" : "hidden"}>
          <CostumFormInput
            ref={nameRef}
            name="name"
            type="text"
            labelText="Ime i prezime"
            placeholder="Unesite ime"
            errorMessage="Molimo unesite ispravno ime i prezime"
            validatorFunction={validateName}
            onValueChange={updateField("name")}
            {...inputStyles}
          />
          <CostumFormInput
            ref={phoneRef}
            name="phone"
            type="tel"
            labelText="Telefon"
            placeholder="Unesite telefon"
            errorMessage="Molimo unesite ispravan broj telefona"
            validatorFunction={validatePhone}
            onValueChange={updateField("phone")}
            {...inputStyles}
          />
          <CostumFormInput
            ref={emailRef}
            name="email"
            type="email"
            labelText="E-mail"
            placeholder="Unesite email"
            errorMessage="Molimo unesite ispravan email"
            validatorFunction={validateEmail}
            onValueChange={updateField("email")}
            {...inputStyles}
          />

          <button type="submit" className={submitButtonClass}>
            <FiSend className="text-base" />
            Pošalji
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="-mt-2 w-full py-2 text-[0.9375rem] font-semibold text-ash transition-colors duration-200 hover:text-white"
          >
            Nazad
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5">
          <LuLock className="text-[0.9375rem] text-ash" />
          <p className="text-[0.78125rem] text-ash">
            Vaši podaci su sigurni, ne dijelimo ih.
          </p>
        </div>
      </form>
    </div>
  );
};

export default GoldEstimateForm;
