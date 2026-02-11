export const trackCTAClick = (buttonName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      'button_name': buttonName, // e.g., "Hero Section CTA"
      'page_location': window.location.href
    });
  }
};