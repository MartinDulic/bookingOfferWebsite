const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};


export const trackCallIntent = () => {
  trackEvent('call_intent', {
    page_location: window.location.href
  });
}

export const trackLead = (formType) => {
  trackEvent('generate_lead', {
    form_id: formType
  });
}

export const trackCtaClick = (ctaName) => {
  trackEvent('cta_click', {
    button_name: ctaName,
    page_location: window.location.href
  });
}

