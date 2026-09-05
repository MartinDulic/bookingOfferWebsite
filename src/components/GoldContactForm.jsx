"use client";
import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import { trackLead } from "@/lib/trackingUtils";
import CostumFormInput from "./CostumFormInput";
import goldFieldStyles from "@/components/ui-lib/gold/goldFieldStyles";

/*
 * Submits to the same HubSpot form as HubSpotLeadCaptureForm (contact us),
 * styled as the gold card. Single step — there are only three fields.
 */

const PORTAL_ID = "147789375";
const FORM_ID = "5e2f47be-d242-422e-80e5-27c29f0d125a";

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validateName = (value) => value.trim().length >= 2;
const validatePhone = (value) => value.replace(/\D/g, "").length >= 6;

const GoldContactForm = ({ className = "" }) => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: { value: "", error: true },
    phone: { value: "", error: true },
    email: { value: "", error: true },
  });

  const updateField = (field) => (data) => {
    setFormState((prev) => ({ ...prev, [field]: data }));
  };

  const validate = () => {
    nameRef.current?.setErrorState(formState.name.error);
    phoneRef.current?.setErrorState(formState.phone.error);
    emailRef.current?.setErrorState(formState.email.error);
    return (
      !formState.name.error && !formState.phone.error && !formState.email.error
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (submitting || !validate()) return;

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
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    setSubmitting(true);

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        console.error("HubSpot API Error:", await response.json());
        alert(
          "Došlo je do pogreške prilikom slanja obrasca. Molimo pokušajte ponovno."
        );
        setSubmitting(false);
        return;
      }

      trackLead("contact_us_form");
      setTimeout(() => {
        window.location.href = "/hr/hvala";
      }, 700);
    } catch (error) {
      console.error("HubSpot request failed:", error);
      alert(
        "Došlo je do pogreške prilikom slanja obrasca. Molimo pokušajte ponovno."
      );
      setSubmitting(false);
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

        <div className="my-6 flex items-center gap-2 sm:my-7">
          <span className="h-0.5 w-16 bg-gold" />
          <span className="h-0.5 flex-1 bg-white/15" />
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          <CostumFormInput
            ref={nameRef}
            name="name"
            type="text"
            labelText="Ime i prezime"
            placeholder="Unesite ime"
            errorMessage="Molimo unesite ispravno ime i prezime"
            validatorFunction={validateName}
            onValueChange={updateField("name")}
            {...goldFieldStyles}
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
            {...goldFieldStyles}
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
            {...goldFieldStyles}
          />

          <button
            type="submit"
            disabled={submitting}
            className="mt-1.5 flex w-full items-center justify-center gap-2.5 rounded-xs bg-gold py-4 text-[1.0625rem] font-bold text-ink transition-colors duration-200 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FiSend className="text-xl" />
            {submitting ? "Šaljem…" : "Pošalji"}
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

export default GoldContactForm;
