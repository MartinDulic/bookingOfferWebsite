export const trackCallIntent = () => {
if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'call_intent', {
      'page_location': window.location.href
    });
  }
}
