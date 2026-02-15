import Script from 'next/script';

const AntiFlicker = () => {
  return (
    <>    
      <style>{`.gb-flicker-control { opacity: 0 !important; }`}</style>
      <Script id="anti-flicker" strategy="beforeInteractive">
        {`
          (function(w,i,d){
            d.classList.add(i);
            setTimeout(function(){d.classList.remove(i)}, 500);
          })(window,'gb-flicker-control',document.documentElement);
        `}
      </Script>
    </>
  );
};
export default AntiFlicker