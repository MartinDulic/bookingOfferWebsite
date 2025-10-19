"use client";
import React, { useState } from "react";

const LeadForm = ({ className }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleIframeLoad = () => {
    // This fires after the Google Form accepts the submission
    setSubmitted(true);
  };

  return (
    <>
      <form
        method="POST"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWjRNWFuYK3T6T0cBT2Y7VTa04qsKlnyM70Cm7nWYq2xNX1Q/formResponse"
        target="hidden_iframe"
        className={`${className} flex flex-col px-4 w-full max-w-md text-xl`}
      >
        <label>Ime i Prezime:</label>
        <input type="text" name="entry.670102158" placeholder="Marko Markić" required />

        <label>E-Mail:</label>
        <input type="email" name="entry.1965763834" placeholder="markomarkic@gmail.com" required />

        <label>Telefon:</label>
        <input type="text" name="entry.1939143989" placeholder="+385 99 203 2607" required />

        <button
          type="submit"
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
    </>
  );
};

export default LeadForm;
