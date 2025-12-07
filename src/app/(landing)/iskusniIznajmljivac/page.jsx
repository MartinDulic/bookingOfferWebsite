import FaqItem from '@/components/ui-lib/common/FaqItem';
import React from 'react'

const page = () => {

  const reviewClass = "bg-neutral-50 border-neutral-300 shadow-md";
  const guestReviews = [
    <Review
      key={1} 
      href="https://www.booking.com/hotel/hr/sea-view-apartments-with-free-parking.hr.html?#tab-reviews" 
      image="/images/temp/Marcelina.avif"
      guestName="Joanna" 
      guestCountry="Poljska" 
      apartment="Apartman Dammi, Makarska" 
      text="... Osjećali smo se tamo kao kod kuće. Vlasnica je na nas ostavila poseban dojam - izuzetno srdačna, prijateljska i puna topline. Zahvaljujući njoj, naš boravak je poprimio osoban, obiteljski karakter. Takvi ljudi i takva mjesta su nezaboravni!" 
      sourceIcon={bookingIcon}
      className={reviewClass}
    />,
    <Review 
      key={2} 
      href="https://hr.airbnb.com/rooms/1466694189284549431/reviews" 
      image="/images/temp/Marcelina.avif"
      guestName="Marcelina" 
      guestCountry="Velika Britanija" 
      apartment="A-Frame, Nova Bila" 
      text="... Komunikacija s domaćinom bila je izvrsna – uvijek prijateljski nastrojen i uslužan. Zaista smo uživali u svakom trenutku i sigurno ćemo se vratiti :)" 
      sourceIcon={airbnbIcon}
      className={reviewClass}
    />
  ]

  const faqItems = [
    <FaqItem 
      question={"Zarađujem već sasvim dovoljno. Što možete poboljšati?"} 
      text={
        <>
          Većini vlasnika poboljšamo prihode za +20% do +50% uz smanjenje obaveza vlasnika! Najčešće optimiziramo:

          <div className='py-4 flex flex-col gap-2'>
            <IconedText icon={dot} text="Cijene" />
            <IconedText icon={dot} text="Vidljivost oglasa" />
            <IconedText icon={dot} text="Broj direktinh rezervacija" />
            <IconedText icon={dot} text="Zaradu od dodatnih usluga" />
          </div>
          Čak i ako ste zadovoljni sadašnjim rezultatima, postoji vrlo velika šansa da možete zarađivati više i istovremeno znatno smanjti količinu obveza.
        </>
      }
    />
    ];
  return (
    <main className="font-default">
      <HeroSection
        titleText={"Ostvarite makismalnu zaradu i popunjenost svog smještaja"}
        
      
      />
    </main>
  )
}

export default page