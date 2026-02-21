"use client"
import React, { useImperativeHandle, forwardRef, useEffect, useState } from 'react'

const CostumFormInput = forwardRef(({name, type, labelText, errorMessage, placeholder, validatorFunction, onValueChange}, ref) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState(null);

  useImperativeHandle(ref, () => ({
    setErrorState: (hasError) => {
      setError(hasError);
    }
  }));

  useEffect(() => {
    if (value === null) {
      onValueChange?.({ value: "", error: true });
      return;
    }

    const hasError = !validatorFunction(value);
    setError(hasError);

    onValueChange?.({ value, error: hasError });

  }, [value]);

  return (
    <div className="flex flex-col mb-12">
      <label className="text-neutral-800 mb-2">{labelText}</label>
      <input type={type} name={name} placeholder={placeholder}
        className={`${error ? " border-red-500" : " border-primary-600"} outline-none border-b py-2`}
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className={`${error ? "" :" hidden"} text-red-500 text-sm pt-1`}>{errorMessage}</p>
    </div>
  )
});

export default CostumFormInput