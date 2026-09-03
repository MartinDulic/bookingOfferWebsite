export default function NumbersSection() {

  return (
    <section 
      className="w-full h-60 lg:h-40 relative bg-neutral-900 text-center
      grid grid-cols-2 gap-2 sm:gap-4 px-4 sm:px-8 py-4
      lg:flex lg:items-center lg:justify-center"
    >
      <div className="contents lg:flex lg:items-center lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-3xl sm:text-4xl font-bold text-primary-accent">+40%</div>
          <div className="text-gray-300 text-sm sm:text-base">Prosječni rast zarade</div>
        </div>

        <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-neutral-700" />

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-3xl sm:text-4xl font-bold text-primary-accent">+64</div>
          <div className="text-gray-300 text-sm sm:text-base">Noćenja više u prosjeku</div>
        </div>

        <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-neutral-700" />

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-3xl sm:text-4xl font-bold text-primary-accent">9.7/10</div>
          <div className="text-gray-300 text-sm sm:text-base">Prosječna ocjena gostiju</div>
        </div>

        <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-neutral-700" />

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-3xl sm:text-4xl font-bold text-primary-accent">5+</div>
          <div className="text-gray-300 text-sm sm:text-base">Godina iskustva</div>
        </div>
      </div>
    </section>
  );
}
