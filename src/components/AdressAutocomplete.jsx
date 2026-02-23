"use client";
import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const AddressAutocomplete = forwardRef(({ labelText, errorMessage, placeholder, onValueChange }, ref) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(true); // Start as true until selection
  const [isTouched, setIsTouched] = useState(false); // Start as false until user types
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setErrorState: (hasError) => {
      setIsTouched(true);
      setError(hasError);
    }
  }));

  // 1. Debounced Fetch Logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length >= 3 && showDropdown) {
        fetchSuggestions(query);
      }
    }, 400); // Wait 400ms after user stops typing

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // 2. Click Outside Listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSuggestions = async (searchText) => {
    try {
      // Add &limit=5 and &lang=en (or remove lang for local names)
      const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(searchText)}&limit=8&lang=default`);
      const data = await res.json();
      // const adressOnly = (data.features || []).filter(f => 
      //   f.properties.housenumber && (f.properties.street || f.properties.name)
      // );
      // setSuggestions(adressOnly);
      setSuggestions(data.features || []);
    } catch (err) {
      console.error("Photon API Error:", err);
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setIsTouched(true);
    setQuery(val);
    setError(true);
    onValueChange?.({ value: val, error: true });
    setShowDropdown(true);
  };

  const handleSelect = (feature) => {
    const p = feature.properties;
    
    // Logic to prioritize Street + House Number
    const street = p.street || p.name || "";
    const houseNum = p.housenumber ? ` ${p.housenumber}` : "";
    const city = p.city || p.town || "";
    const country = p.country || "";

    const fullAddress = `${street}${houseNum}, ${city}, ${country}`.replace(/^,\s*/, "");
    
    setQuery(fullAddress);
    setSuggestions([]);
    setShowDropdown(false);
    setError(false);
    onValueChange?.({ value: fullAddress, error: false });
  };

  return (
    <div className="flex flex-col mb-12 relative" ref={containerRef}>
      <label className="text-neutral-800 mb-2 text-default">{labelText}</label>
      
      <input
        name='adress'
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className={`${error && isTouched ? "border-red-500" : "border-primary-600"} outline-none border-b py-2 w-full transition-all`}
        value={query}
        onChange={handleInputChange}
      />

      {/* Dropdown Menu */}
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute top-[100%] left-0 w-full bg-white shadow-2xl border border-neutral-100 rounded-b-lg z-[999] overflow-hidden">
          {suggestions.map((suggestion, i) => {
            const properties = suggestion.properties;
            const mainText = `${properties.street || properties.name || ""}${properties.housenumber ? " " + properties.housenumber : ""}${ properties.city ? ", " + properties.city : " "}`;
            const subText = `${properties.country || ""}`;

            return (
              <li
                key={i}
                onClick={() => handleSelect(suggestion)}
                className="px-4 py-3 hover:bg-primary-50 cursor-pointer flex flex-col border-b last:border-none border-neutral-50 transition-colors"
              >
                <span className="text-sm font-semibold text-neutral-800">{mainText}</span>
                <span className="text-xs text-neutral-500">{subText}</span>
              </li>
            );
          })}
        </ul>
      )}

      <p className={`${error && isTouched ? "" : "hidden"} text-red-500 text-sm pt-1`}>
        {errorMessage}
      </p>
    </div>
  );
});

export default AddressAutocomplete;