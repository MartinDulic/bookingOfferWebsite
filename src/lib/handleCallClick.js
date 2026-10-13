import { trackCallIntent } from "@/lib/trackingUtils";

/**
 * Click handler for any tel: link to our number. Shared so every phone link
 * fires the same `call_intent` event — pass the link's `placement`.
 *
 * A tel: link does nothing on a desktop browser, so counting a desktop click
 * as a call would inflate the conversion. Send those to WhatsApp and record the
 * method that was actually used.
 */
const handleCallClick = (e, placement) => {
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

export default handleCallClick;
