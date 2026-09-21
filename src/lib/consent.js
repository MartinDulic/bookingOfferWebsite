/**
 * Cookie consent state — the single place consent is read, written and applied.
 *
 * The old banner only knew "granted" / "denied" and told nobody but Clarity.
 * The categories here are the Google Consent Mode v2 signals, so one visitor
 * choice reaches Google Ads, Meta (through GTM) and Microsoft Clarity alike.
 *
 * CURRENTLY DORMANT. The banner is disabled in layout.js and every signal is
 * granted for every visitor by consentDefaultScript.jsx, so nothing in this
 * module runs in production. It is kept intact — together with
 * CookieConsentBanner — so consent can be switched back on without rebuilding
 * it. See the note in applyConsent for the one line that was neutered.
 */

export const CONSENT_STORAGE_KEY = "cookie-consent-v2";

/** Kept in sync so anything still reading the old key keeps working. */
export const LEGACY_STORAGE_KEY = "cookie-consent";

export const CONSENT_VERSION = 1;

export const CONSENT_CATEGORIES = [
  "analytics_storage",
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
];

/** Nothing is on until the visitor says so — no pre-ticked boxes. */
export const DENIED_ALL = Object.freeze({
  analytics_storage: false,
  ad_storage: false,
  ad_user_data: false,
  ad_personalization: false,
});

export const GRANTED_ALL = Object.freeze({
  analytics_storage: true,
  ad_storage: true,
  ad_user_data: true,
  ad_personalization: true,
});

const normalise = (value) => {
  const out = { ...DENIED_ALL };
  if (!value || typeof value !== "object") return out;
  for (const key of CONSENT_CATEGORIES) out[key] = value[key] === true;
  return out;
};

/* --- Snapshot store -------------------------------------------------------
 * The site is a static export, so the banner must not be in the prerendered
 * HTML — anyone who already answered would see it flash on every page. The
 * stored choice is therefore exposed as an external store: a sentinel while
 * rendering on the server, the real value once hydrated.
 * -------------------------------------------------------------------------- */

/** Rendered on the server / during hydration: nothing is known yet. */
export const SERVER_SNAPSHOT = "__pb_consent_server__";

const listeners = new Set();

const emit = () => {
  for (const listener of listeners) listener();
};

export const subscribeConsent = (onChange) => {
  listeners.add(onChange);
  // Another tab answering the banner counts too.
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
};

/**
 * The choice made in this tab. Without it a visitor whose storage is blocked
 * would be asked again on every render, because nothing was ever written.
 */
let sessionSnapshot = null;

/** A primitive that changes only when the stored choice does. */
export const getConsentSnapshot = () => {
  if (sessionSnapshot) return sessionSnapshot;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw) return raw;
    return `legacy:${window.localStorage.getItem(LEGACY_STORAGE_KEY) || ""}`;
  } catch (e) {
    // Private mode / blocked storage: treat as "not answered yet".
    return "legacy:";
  }
};

export const getServerConsentSnapshot = () => SERVER_SNAPSHOT;

/**
 * undefined — not known yet (server render), null — not answered,
 * otherwise the categories. A visitor who accepted under the old banner is
 * not asked again: the legacy "granted" string meant analytics and ads both.
 */
export const parseConsentSnapshot = (snapshot) => {
  if (snapshot === SERVER_SNAPSHOT) return undefined;

  if (snapshot.startsWith("legacy:")) {
    const legacy = snapshot.slice("legacy:".length);
    if (legacy === "granted") return { ...GRANTED_ALL };
    if (legacy === "denied") return { ...DENIED_ALL };
    return null;
  }

  try {
    const parsed = JSON.parse(snapshot);
    if (parsed && parsed.version === CONSENT_VERSION) {
      return normalise(parsed.categories);
    }
  } catch (e) {
    // Corrupted entry — ask again rather than guess.
  }

  return null;
};

/** The visitor's stored choice, or null when they have not answered yet. */
export const readConsent = () => {
  if (typeof window === "undefined") return null;
  return parseConsentSnapshot(getConsentSnapshot()) || null;
};

export const writeConsent = (categories) => {
  if (typeof window === "undefined") return;
  const value = normalise(categories);
  const payload = JSON.stringify({
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    categories: value,
  });

  sessionSnapshot = payload;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, payload);
    // Ads are the stricter of the two, so the legacy flag follows ad_storage.
    window.localStorage.setItem(
      LEGACY_STORAGE_KEY,
      value.ad_storage ? "granted" : "denied"
    );
  } catch (e) {
    // Storage unavailable — the choice still applies for this page view.
  }

  emit();
};

/**
 * Hands the choice to the tag stack.
 *
 * `gtag` has to push the `arguments` object itself: GTM's consent API reads
 * that shape specifically, and a plain array is ignored.
 */
export const applyConsent = (categories) => {
  if (typeof window === "undefined") return;

  // Refusal is disabled: every signal is reported as granted, whatever the
  // visitor chose. The two lines below are the consent-honouring version —
  // uncomment them (and delete the `state` stub) to switch it back on.
  //
  // const value = normalise(categories);
  // const state = (on) => (on ? "granted" : "denied");
  const state = () => "granted";
  const value = GRANTED_ALL;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("consent", "update", {
    analytics_storage: state(value.analytics_storage),
    ad_storage: state(value.ad_storage),
    ad_user_data: state(value.ad_user_data),
    ad_personalization: state(value.ad_personalization),
  });

  // A plain event as well, so GTM triggers and tags that are not consent-aware
  // have something to fire on.
  window.dataLayer.push({
    event: "cookie_consent_update",
    consent_analytics: state(value.analytics_storage),
    consent_ad_storage: state(value.ad_storage),
    consent_ad_user_data: state(value.ad_user_data),
    consent_ad_personalization: state(value.ad_personalization),
  });

  // Clarity's stub queues calls, so this is safe before its tag has loaded.
  if (typeof window.clarity === "function") {
    window.clarity("consentv2", {
      ad_Storage: state(value.ad_storage),
      analytics_Storage: state(value.analytics_storage),
    });
    window.clarity("set", "cookieConsent", String(value.analytics_storage));
  }
};
