// import Script from 'next/script';

// const AntiFlicker = () => {
//   return (
//     <>    
//       <style>{`.gb-flicker-control { opacity: 0 !important; }`}</style>
//       <Script id="anti-flicker" strategy="beforeInteractive">
//         {`
//           (function(w,i,d){
//             d.classList.add(i);
//             setTimeout(function(){d.classList.remove(i)}, 10000);
//           })(window,'gb-flicker-control',document.documentElement);
//         `}
//       </Script>
//     </>
//   );
// };
// export default AntiFlicker


// import Script from 'next/script';

// const AntiFlicker = () => {
//   return (
//     <>    
//       {/* 1. We hide the entire HTML element so nothing "pops" */}
//       <style dangerouslySetInnerHTML={{
//         __html: `.gb-flicker-control { opacity: 0 !important; transition: opacity 0.1s ease; }`
//       }} />
      
//       {/* 2. We add the class immediately. We use a raw script or beforeInteractive */}
//       <Script id="anti-flicker" strategy="beforeInteractive">
//         {`
//           (function(d,c){
//             d.classList.add(c);
//             setTimeout(function(){ d.classList.remove(c) }, 200);
//           })(document.documentElement, 'gb-flicker-control');
//         `}
//       </Script>
//     </>
//   );
// };
// export default AntiFlicker;

import Script from 'next/script';

const AntiFlicker = () => {
  return (
    <>    
      {/* We only target .gb-ab-test elements, 
         but ONLY when the 'gb-loading' class is present on the html tag.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `.gb-loading .gb-ab-test { opacity: 0 !important; }`
      }} />
      
      <Script id="anti-flicker" strategy="beforeInteractive">
        {`
          (function(d){
            // Add the loading class immediately
            d.documentElement.classList.add('gb-loading');

            // Define the reveal function
            window.showAbContent = function() {
              d.documentElement.classList.remove('gb-loading');
            };

            // Safety timeout: 400ms
            setTimeout(window.showAbContent, 400);
          })(document);
        `}
      </Script>
    </>
  );
};
export default AntiFlicker;