const trackGtmEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

const trackMetaEvent = (eventName) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName);
  }
};

export const trackCallIntent = () => {
  trackGtmEvent('call_intent', {
    page_location: window.location.href
  });
  trackMetaEvent('Contact');
}

export const trackLead = (formType) => {
  trackGtmEvent('generate_lead', {
    form_id: formType
  });
  trackMetaEvent('Lead');
}

export const trackCtaClick = (ctaName) => {
  trackGtmEvent('cta_click', {
    button_name: ctaName,
    page_location: window.location.href
  });
}

