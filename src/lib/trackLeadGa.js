// Example: Call this function when a form is submitted successfully
export const trackLead = (formType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      'service_type': 'consultation', // Optional: categorize your services
      'form_id': formType, // Optional: identify which form was submitted
      'value': 0, // Optional: add a lead value if you have one
      'currency': 'USD'
    });
  }
};