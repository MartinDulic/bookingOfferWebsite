/**
 * Field styling shared by the dark gold form cards, passed straight into
 * CostumFormInput / AddressAutocomplete so the two forms cannot drift apart.
 */
const goldFieldStyles = {
  wrapperClassName: "gap-[0.4375rem]",
  labelClassName: "pb-eyebrow text-[0.65625rem] tracking-[0.14em] text-ash",
  inputClassName:
    "w-full rounded-xs border bg-ink-field px-3.5 py-3 text-[0.9375rem] text-white outline-none transition-colors placeholder:text-ash focus:border-gold",
  borderClassName: "border-white/15",
  errorBorderClassName: "border-danger",
};

export default goldFieldStyles;
