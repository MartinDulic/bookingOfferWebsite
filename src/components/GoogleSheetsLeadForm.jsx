"use client";
import React, { useState } from "react";

const GoogleSheetsLeadForm = ({ className, inputClassName}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleIframeLoad = () => {
    // This fires after the Google Form accepts the submission
    setSubmitted(true);
  };

  const inputMandatoryClassName = "outline-none ";

  return (
    <div className={`flex flex-col ${className}`}>
      <form
        method="POST"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWjRNWFuYK3T6T0cBT2Y7VTa04qsKlnyM70Cm7nWYq2xNX1Q/formResponse"
        target="hidden_iframe"
        className={`flex flex-col gap-4 px-4 w-full max-w-md text-xl`}
      >
        <div className="flex flex-col">
          <label>Ime i Prezime:</label>
          <input type="text" name="entry.670102158" placeholder="Marko Markić" required
            className={inputMandatoryClassName + inputClassName}
          />
        </div>

        <div className="flex flex-col">
          <label>E-Mail:</label>
          <input type="email" name="entry.1965763834" placeholder="markomarkic@gmail.com" required 
            className={inputMandatoryClassName + inputClassName}
          />
        </div>

        <div className="flex flex-col">
          <label>Telefon:</label>
          <input type="text" name="entry.1939143989" placeholder="+385 99 203 2607" required 
            className={inputMandatoryClassName + inputClassName}
          />
        </div>

        <button type="submit"
          className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark"
        >
          Prijavi me
        </button>
      </form>

      {/* hidden iframe to prevent page reload */}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />

      {submitted && (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Hvala! Vaša prijava je uspješno poslana.
        </p>
      )}
    </div>
  );
};

export default GoogleSheetsLeadForm;
