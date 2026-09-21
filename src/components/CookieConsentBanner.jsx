"use client";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { LuCookie, LuX } from "react-icons/lu";
import {
  DENIED_ALL,
  GRANTED_ALL,
  applyConsent,
  getConsentSnapshot,
  getServerConsentSnapshot,
  parseConsentSnapshot,
  readConsent,
  subscribeConsent,
  writeConsent,
} from "@/lib/consent";

/**
 * Cookie consent — dark card with the gold rule, matching the hero form.
 *
 * Two layers: the bottom-left banner, and a "Postavke" modal with one switch
 * per Consent Mode v2 signal. Nothing is granted until the visitor acts, and
 * the switches in the modal start off — an opt-out default is not consent.
 *
 * Reopening: the page can call `window.pbOpenCookieSettings()` or dispatch
 * `pb:open-cookie-settings`, so a footer link can let a visitor change their
 * mind after the banner is gone.
 */

const CATEGORY_ROWS = [
  {
    key: "analytics_storage",
    title: "Analitika",
    description:
      "Mjerimo kako se stranica koristi kako bismo je poboljšali. Microsoft Clarity, Google Analytics.",
    signal: "analytics_storage",
  },
  {
    key: "ad_storage",
    title: "Oglašavanje",
    description:
      "Mjerenje uspješnosti oglasa i prikaz oglasa na drugim stranicama. Google Ads, Meta.",
    signal: "ad_storage",
  },
  {
    key: "ad_user_data",
    title: "Slanje podataka oglasnim platformama",
    description:
      "Dijeljenje podataka o posjetu i kontaktu s Googleom i Metom radi mjerenja konverzija.",
    signal: "ad_user_data",
  },
  {
    key: "ad_personalization",
    title: "Personalizirani oglasi",
    description: "Prilagodba oglasa vašim interesima i ponovni marketing.",
    signal: "ad_personalization",
  },
];

const goldButton =
  "inline-flex min-h-12 items-center justify-center rounded-xs bg-gold px-[22px] py-[13px] text-[0.9375rem] font-bold text-ink transition-colors duration-200 hover:bg-gold-dark";

const outlineButton =
  "inline-flex min-h-12 items-center justify-center rounded-xs border border-white/[0.16] px-[18px] py-[13px] text-[0.9375rem] font-semibold text-cream transition-colors duration-200 hover:border-white/[0.34]";

const quietButton =
  "inline-flex min-h-12 items-center justify-center px-2 text-[0.84375rem] font-semibold text-ash transition-colors duration-200 hover:text-gold";

const cardSurface =
  "border border-white/[0.09] border-t-2 border-t-gold bg-ink-card";

const ConsentSwitch = ({ checked, onChange, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    onClick={onChange}
    className={`flex h-[26px] w-[46px] shrink-0 items-center rounded-xs border p-0.5 transition-colors duration-200 ${
      checked
        ? "justify-end border-gold bg-gold"
        : "justify-start border-white/[0.18] bg-white/[0.12]"
    }`}
  >
    <span
      className={`h-5 w-5 rounded-[1px] transition-colors duration-200 ${
        checked ? "bg-ink" : "bg-ash"
      }`}
    />
  </button>
);

const CookieConsentBanner = () => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(DENIED_ALL);
  const dialogRef = useRef(null);

  // undefined while rendering on the server, so the banner never ends up in
  // the exported HTML; null once hydrated and the visitor has not answered.
  const snapshot = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );
  const stored = useMemo(() => parseConsentSnapshot(snapshot), [snapshot]);
  const showBanner = stored === null;

  // The one place the choice reaches the tag stack — on load, on a new choice,
  // and when another tab makes one.
  useEffect(() => {
    if (stored) applyConsent(stored);
  }, [stored]);

  const openSettings = useCallback(() => {
    setDraft(readConsent() || DENIED_ALL);
    setOpen(true);
  }, []);

  // Lets a footer link — or anything else on the page — reopen the choice.
  useEffect(() => {
    window.pbOpenCookieSettings = openSettings;
    window.addEventListener("pb:open-cookie-settings", openSettings);
    return () => {
      if (window.pbOpenCookieSettings === openSettings) {
        delete window.pbOpenCookieSettings;
      }
      window.removeEventListener("pb:open-cookie-settings", openSettings);
    };
  }, [openSettings]);

  // Esc closes the modal without deciding anything, and the page behind it
  // must not scroll while the overlay is up.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const decide = (categories) => {
    // Only writes — the effect above applies it once the store re-reads.
    // writeConsent(categories);
    setDraft(categories);
    setOpen(false);
  };

  const acceptAll = () => decide({ ...GRANTED_ALL });
  const rejectAll = () => decide({ ...DENIED_ALL });
  const savePrefs = () => decide({ ...draft });

  const toggle = (key) =>
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));

  if (!showBanner && !open) return null;

  return (
    <>
      {showBanner && !open && (
        <div
          role="region"
          aria-label="Kolačići i privatnost"
          className="fixed inset-x-3 bottom-3 z-[9999] sm:inset-x-auto sm:bottom-8 sm:left-12 sm:w-[520px]"
        >
          <div
            className={`${cardSurface} p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.75)] sm:px-7 sm:pt-[26px] sm:pb-6`}
          >
            <div className="flex items-center gap-2.5 sm:items-start sm:gap-3">
              <LuCookie
                aria-hidden="true"
                className="shrink-0 text-[1.1875rem] text-gold sm:mt-0.5 sm:text-xl"
              />
              <div className="flex min-w-0 flex-col gap-2 sm:gap-[0.5625rem]">
                <p className="font-title text-[1.0625rem] font-extrabold tracking-[-0.02em] text-white sm:text-[1.1875rem]">
                  Kolačići i privatnost
                </p>
                <p className="hidden text-[0.875rem] leading-[1.55] text-ash sm:block">
                  Koristimo kolačiće kako bismo poboljšali vaše iskustvo i
                  osigurali da naša stranica radi ispravno.
                </p>
              </div>
            </div>

            <p className="mt-2.5 text-[0.84375rem] leading-[1.55] text-ash sm:hidden">
              Koristimo kolačiće kako bismo poboljšali vaše iskustvo i osigurali
              da naša stranica radi ispravno. Klikom na &quot;Prihvati&quot;,
              pristajete na našu upotrebu kolačića.
            </p>

            {/* Mobile stacks the primary action full width; desktop keeps the
                three actions on one row with "Odbij" pushed to the end. */}
            <div className="mt-[18px] flex flex-col gap-2.5 sm:mt-[1.125rem] sm:flex-row sm:items-center sm:gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className={`${goldButton} w-full sm:w-auto`}
              >
                Prihvati sve
              </button>
              <div className="flex gap-2.5 sm:contents">
                <button
                  type="button"
                  onClick={openSettings}
                  className={`${outlineButton} flex-1 sm:flex-none`}
                >
                  Postavke
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className={`${quietButton} flex-1 text-[0.9375rem] sm:ml-auto sm:flex-none sm:text-[0.84375rem]`}
                >
                  Odbij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#080A0C]/[0.72] p-3 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            tabIndex={-1}
            className={`${cardSurface} flex max-h-full w-full max-w-[680px] flex-col shadow-[0_30px_70px_-14px_rgba(0,0,0,0.8)] outline-none`}
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/[0.08] px-5 pt-[26px] pb-5 sm:px-[30px]">
              <div className="flex flex-col gap-2">
                <h2
                  id="cookie-settings-title"
                  className="font-title text-[1.1875rem] font-extrabold tracking-[-0.02em] text-white sm:text-[1.3125rem]"
                >
                  Postavke privatnosti
                </h2>
                <p className="max-w-[44em] text-[0.84375rem] leading-[1.55] text-ash">
                  Odaberite koje kategorije kolačića dopuštate. Vaš odabir
                  vrijedi za Google Ads, Meta i Microsoft Clarity i možete ga
                  promijeniti u bilo kojem trenutku.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zatvori postavke"
                className="-mr-1 flex shrink-0 p-1 text-ash transition-colors duration-200 hover:text-cream"
              >
                <LuX className="text-[1.375rem]" />
              </button>
            </div>

            <div className="overflow-x-hidden overflow-y-auto px-5 pt-1 pb-2 sm:px-[30px]">
              <div className="flex items-start justify-between gap-6 border-b border-white/[0.07] py-5">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[0.9375rem] font-bold text-cream">
                    Nužni kolačići
                  </p>
                  <p className="text-[0.8125rem] leading-[1.5] text-[#7F7C77]">
                    Rad stranice, sigurnost i slanje obrasca za analizu. Ne mogu
                    se isključiti.
                  </p>
                  <p className="font-mono text-[0.71875rem] tracking-[0.02em] text-[#5F5D59]">
                    security_storage · functionality_storage
                  </p>
                </div>
                <p className="pt-1 text-[0.6875rem] font-bold tracking-[0.14em] whitespace-nowrap text-ash uppercase">
                  Uvijek uključeno
                </p>
              </div>

              {CATEGORY_ROWS.map((row, index) => (
                <div
                  key={row.key}
                  className={`flex items-start justify-between gap-6 py-5 ${
                    index === CATEGORY_ROWS.length - 1
                      ? ""
                      : "border-b border-white/[0.07]"
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[0.9375rem] font-bold text-cream">
                      {row.title}
                    </p>
                    <p className="text-[0.8125rem] leading-[1.5] text-[#7F7C77]">
                      {row.description}
                    </p>
                    <p className="font-mono text-[0.71875rem] tracking-[0.02em] text-[#5F5D59]">
                      {row.signal}
                    </p>
                  </div>
                  <ConsentSwitch
                    checked={draft[row.key]}
                    onChange={() => toggle(row.key)}
                    label={row.title}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 border-t border-white/[0.08] bg-[#0F1416] px-5 pt-5 pb-6 sm:flex-row sm:items-center sm:gap-3 sm:px-[30px]">
              <button
                type="button"
                onClick={acceptAll}
                className={`${goldButton} w-full sm:w-auto`}
              >
                Prihvati sve
              </button>
              <div className="flex gap-2.5 sm:contents">
                <button
                  type="button"
                  onClick={savePrefs}
                  className={`${outlineButton} flex-1 sm:flex-none`}
                >
                  Spremi odabir
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className={`${quietButton} flex-1 text-[0.9375rem] sm:ml-auto sm:flex-none sm:text-[0.84375rem]`}
                >
                  Odbij sve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
