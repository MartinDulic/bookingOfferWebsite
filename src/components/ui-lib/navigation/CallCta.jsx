"use client";
import { trackCallIntent } from '@/lib/trackingUtils';
import React from 'react'
import { FaPhone } from "react-icons/fa";

/**
 * `alwaysShowNumber` drops the narrow-screen "Nazovi" label and keeps the full
 * number at every width — for pages where calling us is the point rather than a
 * secondary header action.
 *
 * `placement` names where this instance sits and is sent as a GA4 parameter so
 * the header button and the one on the thank-you page can be told apart.
 *
 * This used to call trackCtaClick("call_intent"), which pushed a `cta_click`
 * event carrying the string "call_intent" as its button name. The GTM trigger
 * matches the event name `call_intent`, so it never fired: no GA4 call event,
 * no Google Ads call conversion and no Meta Contact for the header phone
 * button — which is the most-used phone control on the site.
 */
const CallCta = ({
  className = "",
  language = "hr",
  placement = "header",
  alwaysShowNumber = false,
}) => {
  const handleClick = (e) => {
    // A tel: link does nothing on a desktop browser, so counting a desktop
    // click as a call would inflate the conversion. Send those to WhatsApp and
    // record the method that was actually used.
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    trackCallIntent({ placement, method: isMobile ? "phone" : "whatsapp" });

    if (!isMobile) {
      e.preventDefault();
      window.open(
        "https://wa.me/385992032607?text=Pozdrav,%20zanimaju%20me%20vaše%20usluge.",
        "_blank",
        "noopener"
      );
    }
  };

  return (
    <a
      onClick={handleClick}
      href={"tel:+385992032607"}
      className={`${className}
        flex items-center gap-2 text-sm font-medium text-cream
        transition-colors duration-200 hover:text-white
        lg:gap-[0.5625rem] lg:text-[0.9375rem]`}
    >
      <FaPhone className="text-[0.875rem] text-gold lg:text-[0.9375rem]" />
      {alwaysShowNumber ? (
        <span>+385 99 203 2607</span>
      ) : (
        <>
          <span className='lg:hidden'>Nazovi</span>
          <span className='hidden lg:inline'>+385 99 203 2607</span>
        </>
      )}
    </a>
  )
}

export default CallCta
