import { attributionParams, newLeadId } from "@/lib/attribution";

/**
 * The single place the site talks to the dataLayer.
 *
 * Meta is deliberately absent from this file. The pixel and its Lead/Contact
 * events live in GTM only. Previously both this module and GTM fired them,
 * which double-counted every PageView and every Lead in Events Manager.
 */

/**
 * What one form submission is worth to the business, used for value-based
 * bidding in Google Ads and Meta. Set this to (average contract value x the
 * share of leads that close) — a wrong number here is worse than none, because
 * the bidding algorithms optimise directly against it.
 */
export const LEAD_VALUE_EUR = 50;
export const CALL_VALUE_EUR = 25;
const CURRENCY = "EUR";

const push = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...attributionParams(),
    ...params,
  });
};

/**
 * Conversion events are guarded per session, not per component mount.
 * A visitor who taps the header phone button, comes back and taps it again is
 * one call intent, but the old ref-based guard reset on every route change.
 */
const firedThisSession = (key) => {
  try {
    if (window.sessionStorage.getItem(key)) return true;
    window.sessionStorage.setItem(key, "1");
    return false;
  } catch {
    return false; // storage blocked — better to over-count than to lose the event
  }
};

/**
 * Someone tried to reach us by phone or WhatsApp.
 *
 * `placement` says which control was used (header, next_steps, contact_section)
 * and `method` distinguishes a real dial from the desktop WhatsApp fallback —
 * on desktop a tel: link does nothing, so counting those as calls inflated the
 * number. Both land as GA4 event parameters.
 */
export const trackCallIntent = ({ placement = "unknown", method = "phone" } = {}) => {
  if (firedThisSession("pb_fired_call_intent")) return;
  push("call_intent", {
    call_placement: placement,
    call_method: method,
    // Same dedup id the forms mint. Google Ads uses it as transaction_id and
    // Meta as eventID, so a call reported by both the browser and the
    // Conversions API is counted once.
    lead_id: newLeadId(),
    value: CALL_VALUE_EUR,
    currency: CURRENCY,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};

/**
 * A form was submitted successfully.
 *
 * Returns the lead id so the caller can send the same value to HubSpot. That
 * id is what ties a HubSpot contact back to the ad click it came from, which
 * is what makes offline conversion import possible later.
 */
export const trackLead = (formId, leadId = newLeadId(), extra = {}) => {
  push("generate_lead", {
    form_id: formId,
    lead_id: leadId,
    ...extra,
    value: LEAD_VALUE_EUR,
    currency: CURRENCY,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
  return leadId;
};

/**
 * A visitor started filling a form. Useful on its own as a funnel step and as
 * the denominator for form abandonment.
 */
export const trackFormStart = (formId) => {
  if (firedThisSession(`pb_fired_form_start_${formId}`)) return;
  push("form_start_custom", { form_id: formId });
};

/**
 * A CTA was clicked. Every gold CTA scrolls to the hero form rather than
 * navigating, so this is an engagement signal and NOT a conversion — it must
 * stay unmarked as a Key Event in GA4.
 */
export const trackCtaClick = (ctaName, placement = "") => {
  push("cta_click", {
    button_name: ctaName,
    cta_placement: placement,
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
};
