import React from 'react'
import HeroSection from "@/sections/landing/HeroSection";
import Testimonial from '@/components/ui-lib/common/Testimonial';
import PainPointSection from '@/sections/landing/PainPointSection';
import PainPointSection2 from '@/sections/landing/PainPointSection2';
import NumbersSection from '@/sections/landing/NumbersSection';
import { PiDiamondsFourFill } from "react-icons/pi";
import SocialProofSection from '@/sections/landing/SocialProofSection';
import Review from '@/components/ui-lib/common/Review';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import ValuePropSection from '@/sections/landing/ValuePropSection';
import ValuePropWithImage from '@/components/ui-lib/common/ValuePropWithImage';
import AtfSection from '@/sections/landing/AtfSection';
import CaseStudySection from '@/sections/landing/CaseStudySection';
import DifferentiatorsSection from '@/sections/landing/DifferentiatorsSection';
import HowItWorkSection from '@/sections/landing/HowItWorkSection';
import ToolsSection from '@/sections/landing/ToolsSection';
import FaqSection from '@/sections/landing/FaqSection';
import FaqItem from '@/components/ui-lib/common/FaqItem';
import { GoDotFill } from "react-icons/go";
import IconedText from '@/components/ui-lib/common/IconedText';
import RecapSection from '@/sections/landing/RecapSection';
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import BodyText from '@/components/ui-lib/common/BodyText';
import AbTest from '@/lib/abTest';
import TopEarningProofSection from '@/sections/landing/TopEarningProofSection';
import TestemonialSection from '@/sections/landing/TestemonialSection';
import { LuCircleCheckBig } from "react-icons/lu";


export const metadata = {
  title: "PrimeBooker - Agencija za Iznajmljivanje i Upravljanje Nekretninama",
  description: "Iskoristite puni potencijal svog smještaja. Uz PrimeBooker ostvarite maksimalnu popunjenost i zaradu. Besplatno profesionalno fotografiranje za nove klijente!",
};

const Page = () => {

  const heroTestimonialsElement = 
  (
    <div className='h-full w-4xl 2xl:w-full py-12 2xl:py-0 xs:mx-8 2xl:mx-0 2xl:mr-8 flex flex-col items-center gap-8 2xl:gap-0 2xl:justify-evenly'>
      <Testimonial 
        className={"max-w-3xl min-[850px]:self-start bg-gradient-to-br from-neutral-100 to-white border"}
        image={"/images/people/Marija_L.avif"}
        alt={"Klijent"}
        name={"Marija L."}
        info={"Zadar"}
        text={"Nakon nekoliko sezona iznajmljivanja odlučila sam unajmiti agenciju jer je moj apartman skupio dosta loših recenzija, što je jako utjecalo na zaradu. Nakon što sam počela surađivati s PrimeBooker-om to se brzo popravilo i počela sam dobivati puno više rezervacija."}
      />
      <Testimonial 
        className={"max-w-3xl min-[850px]:self-end bg-gradient-to-br from-neutral-100 to-white border"}
        image={"/images/people/Mira_K.avif"}
        alt={"Klijent"}
        name={"Mira K."}
        info={"Split"}
        text={"Godinama sam svoje apartmane iznajmljivala sama i to mi je oduzimalo puno vremena i energije. Odlučila sam iznajmljivanje prepustiti PrimeBooker-u kako bi imala više slobodnog vremena. Od tada zarađujem znatno više, a oko iznajmljivanja se uopće ne brinem. "}
      />
      <Testimonial
        className={"max-w-3xl min-[850px]:self-start bg-gradient-to-br from-neutral-100 to-white border"}
        image={"/images/people/Tihomir_J.webp"}
        alt={"Klijent"}
        name={"Tihomir J."}
        info={"Zagreb"}
        text={"Kada sam počinjao s iznajmljivanjem odlučio sam dati priliku PrimeBooker-u jer sam htio da netko stručan vodi brigu o oglašavanju moje kuće. Vidio sam da su novi na tržištu i da će dati sve od sebe. Prvi gosti su došli 2 dana nakon početka suradnje i tada sam znao da sam donio ispravnu odluku."}
      />
    </div>
  );

  const airbnbIcon = <FaAirbnb className='text-red-700'/>;
  const bookingIcon = <TbBrandBooking className='text-blue-800'/>;

  const reviewClass = "bg-white border-neutral-200 shadow-md";
  const guestReviews = [
    <Review
      key={1} 
      href="https://www.booking.com/hotel/hr/sea-view-apartments-with-free-parking.hr.html?#tab-reviews" 
      // image="/images/temp/Marcelina.avif"
      guestName="Joanna" 
      guestCountry="Poljska" 
      apartment="Apartman Dammi, Makarska" 
      text="Jedinstveno mjesto gdje je sve dizajnirano s velikom pažnjom - apartman je bio besprijekorno čist, vrlo udoban i savršeno opremljen. Osjećali smo se tamo kao kod kuće. Vlasnica je na nas ostavila poseban dojam - izuzetno srdačna, prijateljska i puna topline. Zahvaljujući njoj, naš boravak je poprimio osoban, obiteljski karakter. Takvi ljudi i takva mjesta su nezaboravni!" 
      sourceIcon={bookingIcon}
      className={reviewClass}
    />,
    <Review 
      key={2} 
      href="https://hr.airbnb.com/rooms/1466694189284549431/reviews" 
      image="/images/people/Marcelina.avif"
      guestName="Marcelina" 
      guestCountry="Velika Britanija" 
      apartment="A-Frame, Nova Bila" 
      text="Divno smo se proveli! Kuća je apsolutno lijepa, moderna i savršeno opremljena svime što vam može zatrebati. Jacuzzi je bio nevjerojatan i učinio je naš boravak još opuštenijim. Komunikacija s domaćinom bila je izvrsna – uvijek prijateljski nastrojen i uslužan. Zaista smo uživali u svakom trenutku i sigurno ćemo se vratiti :)" 
      sourceIcon={airbnbIcon}
      className={reviewClass}
    />,
    <Review
      key={3}
      href="https://hr.airbnb.com/rooms/1335608579174658673/reviews?scroll_to_review=1520203340752553642"
      // image="/images/temp/Marcelina.avif"
      guestName="Lejla"
      guestCountry="Hrvatska"
      apartment="Apartment Dammi, Makarska"
      text="Sve pohvale za apartman kao i za domaćine. Od čistoće apartmana, sadržaja-imate sve što je potrebno. Vaše je samo da dođete sa dobrim raspoloženjem i uživate u odmoru. Sigurno se vraćamo i slijedeće godine."
      sourceIcon={airbnbIcon}
      className={reviewClass}
    />
  ]

  const valueProps = [
    <ValuePropWithImage
      key={1}
      // mobileImageSrc={"/images/general/Calendar_w1274.avif"}
      // desktopImageSrc={"/images/general/Calendar_w1274.avif"}
      mobileImageSrc={"/images/temp/Kalendar_pun_2026-2.png"}
      desktopImageSrc={"/images/temp/Kalendar_pun_2026-2.png"}
      alt={"Filled Calendar"}
      summary={"Zaradite Više"}
      text={"Svakodnevno pratimo tržište i prilagođavamo strategiju kako bismo vaš smještaj popunili po najvišoj mogućoj cijeni u svakom dijelu godine, uključujući i tijekom zime."} // Kontinuiranom analizom tržišta, svakodnevno unaprijeđujemo strategiju iznajmljivanja Vašeg smještaja, kako bi popunili sve Vaše kapacitete po najvišoj mogućoj cijeni. To uključuje optimizaciju cijena, promjenu restrikcija (npr. min. noćenja po rezervaciji) i naplatu dodatnih usluga (npr. čišćenje, raniji ulazak).
      imageClassName={"object-left"}
    >
      Ostvarite <span className='text-primary-600'>Maksimalnu Popunjenost </span>
    </ValuePropWithImage>,
    <ValuePropWithImage
      key={2}
      mobileImageSrc={"/images/general/ManAtPool_w800.avif"}
      desktopImageSrc={"/images/general/ManAtPool_w1920.avif"}
      alt={"A Relaxed Host"}
      summary={"Prepustite sve nama"}
      text={"Tu smo kako bi vam pomogli u svemu, od oglašavanja i komunikacije s gostima do prijave gostiju, računa i naplate. Nudimo vam kompletnu uslugu upravljanja smještajem kako biste bili potpuno bezbrižni."}
      reverse = {true}
      imageClassName={"object-right"}
    >
      Riješite se obveza, <span className='text-primary-600'> Uštedite Vrijeme</span>
    </ValuePropWithImage>,
    <ValuePropWithImage
      key={3}
      mobileImageSrc={"/images/general/FamilyEntering_w800.avif"}
      desktopImageSrc={"/images/general/FamilyEntering_w1100.avif"}
      alt={"Excited family at a house"}
      summary={"Poslujte Profesionalno"}
      text={"Održavamo visoku razinu kvalitete usluge kako bi osigurali odlične recenzije i dugoročan rast zarade. Zadovoljni gosti promoviraju smještaj, vraćaju se i plaćaju više."}
      imageClassName={"object-top"}
    >
      Osigurajte <span className='text-primary-600'>dugoročan uspjeh</span>
    </ValuePropWithImage>
  ];

  const dot = <GoDotFill />;

  const faqItems = [
    <FaqItem 
      key={0}
      question={"Koliko Vaša usluga košta?"}
      text={
        <>
          <div className='mb-4'>Naša cijena ovisi o tome koje usluge trebate i uvjek je postotak od ostvarene zarade. To znači da ne plaćate ništa dok vam ne zaradimo novac i </div>

          <div>Nudimo više mogućnosti suradnje od upravljanja bookingom do kompletnog upravljanja apsolutno svime ovisno o lokaciji smještaja.</div>
          
        </>
      }
    />,
    <FaqItem 
      key={0}
      question={"Moram li se brinuti o čišćenju i održavanju?"}
      text={
        <>
          Ne morate — osim ako želite.
          Surađujemo s provjerenim partnerima i organiziramo sve za Vas kako bi Vaš smještaj uvijek bio spreman za goste.
        </>
      }
    />,
    <FaqItem 
      key={0}
      question={"Hoću li izgubiti kontrolu nad svojim smještajem?"}
      text={
        <>
          Ne. Vi ste i dalje vlasnik smještaja i imate puni uvid u sve: 
          <span className='py-4 flex flex-col gap-2'>
            <IconedText icon={dot} text="Raspored rezervacija" />
            <IconedText icon={dot} text="Cijene" />
            <IconedText icon={dot} text="Troškove i prihode" />
            <IconedText icon={dot} text="Detaljnu statistiku" />
          </span>
          Naša uloga je samo da radimo ono što vam štedi vrijeme i donosi više zarade.
        </>
      }
    />,
    <FaqItem 
      key={0}
      question={"Kako funkcioniraju isplate?"}
      text={
        <>
          Mi obavljamo sve računovodstvene obveze i plaćamo sve naknade, a Vi svaki mjesec dobivate detaljan izvještaj o prihodima i troškovima. Isplata zarade na Vaš račun se vrši do 5. dana u mjesecu za prethodni mjesec.
        </>
      }
    />,
    <FaqItem 
      key={0}
      question={"Koliko vremena je potrebno za početak suradnje?"}
      text={
        <>
          Ukoliko je smještaj spreman za iznajmljivanje potrebno je nekoliko dana za fotografiranje, uređivanje fotografija i objavu oglasa.
        </>
      }
    />,
    <FaqItem 
      key={0}
      question={"Je li ovo dobra opcija ako tek počinjem?"}
      text={
        <>
          Da — novim iznajmljivačima je najviše potrebna profesionalna pomoć.
          Bez znanja i prave strategije, većina novih iznajmljivača gubi novac.
        </>
      }
    />,

  ];
  return (
    <main className="font-default">

      <AtfSection 
        mobileImgSrc="/images/general/HeroImage_w1000.avif"
        desktopImgSrc="/images/general/HeroImage_w1920.avif"
        imgAlt="Hero Background"
        imgClassName="object-[51%-50%] md:object-[65%_50%] lg:object-center "
      />

      <NumbersSection />
      <ToolsSection />
      <PainPointSection2 />
      <CaseStudySection />
      <ValuePropSection children={valueProps} />
      <TopEarningProofSection />

      {/* <HeroSection
        // titleText={<AbTest featureKey={"ii-hero-title-test"} fallBack={"Ostvarite maksimalnu zaradu od svog smještaja"} />}
        titleText={"Ostvarite maksimalnu zaradu od svog smještaja"}
        subtitleText={"Imate prazne termine? Nagađate cijene? Stalno ste dostupni gostima? Naš sustav, vođen kontinuiranom analizom tržišta, povećava Vašu zaradu i oslobađa Vas svakodnevnih obveza. "}
        mobileImgSrc="/images/general/HeroImage_w1000.avif"
        desktopImgSrc="/images/general/HeroImage_w1920.avif"
        imgAlt="Hero Background"
        imgClassName="object-[51%-50%] md:object-[65%_50%] lg:object-center "
        children={heroTestimonialsElement}
      /> */}

      {/* <PainPointSection
        title={<>Iznajmljujete i znate da možete zaraditi više? <div className='text-primary-600 mt-2'>Iskoristite sav potencijal svog smještaja.</div></>}
        boldedText={"Iznajmljujete već neko vrijeme. Apartman se rezervira, gosti dolaze... ali: "}
        bodyText={
          [
            <div className='flex flex-col gap-4'>
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Niste sigurni jesu li vam cijene preniske ili previsoke</div> 
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Stalno nešto mijenjate, ali bez jasne strategije</div> 
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Bojite se dizati cijene jer ne želite ostati prazni</div>
            </div>,
            <div>Na kraju se pitate: "<span className='font-bold'>Radim sve, a zarađujem li stvarno koliko bih mogao?</span>"</div>,
            <div>Većina iznajmljivača cijene postavljaja “od oka” i onda naglo spušta cjene kada shvate da je ostalo par dana do praznog termina.</div>,
            <div>Radi toga ne znate koliki je stvarni potencijal Vašeg apartmana, a niste sigurni što radite krivo. </div>,
            <div>Postoji bolji način od stalnog nagađanja i paničnih sniženja. Način gdje se cijene određuju smisleno, kalendar se puni strateški, način koji vam donosi veću zaradu.</div>,
            <div>Mi upravljamo Vašim smještajem kako bi ste ostvarili maksimalnu zaradu, imali manje obaveza i stresa i konačno imali konkretan plan.</div>
          ]
        }
        icon={<PiDiamondsFourFill className='text-primary-600 text-2xl'/>}
        bulletPointText={
          [
            "Brz i jednostavan početak iznajmljivanja",
            "100% legalno",
            "Osobni savjetnik",
          ]
        }
      /> */}

      {/* <SocialProofSection
        title={<><span className='text-primary-600'>Nadmašite očekivanja</span> svojih gostiju</>}
        reviews={guestReviews}
      /> */}
      <DifferentiatorsSection />
      <HowItWorkSection />
      {/* <ToolsSection /> */}
      <TestemonialSection />
      <FaqSection faqItems={faqItems} />
      <RecapSection
        title={<><span className='text-primary-600'>Prestanite propuštati zaradu</span> i gubiti vrijeme</>}
        body={
          <>
            <BodyText className='text-lg text-neutral-800 '>
              <div className='font-bold'>Zašto čekati još jednu sezonu da biste vidjeli rezultate?</div>
              <div className='mt-4'>
                Svaki period bez rezervacije ili sa preniskom cijenom je izgubljena zarada. Ne dopustite da Vaš trud i kvaliteta smještaja ostanu neprimijećeni.
                S nama imate partnera koji razumije tržište, brine o svakom detalju i radi za Vaš maksimalni profit.
              </div>
              <div className='mt-4'>Kontaktirajte nas danas i osigurajte da svaki dan u sezoni radi u Vašu korist!</div>
            </BodyText>
            <div className='flex flex-col mt-8 xl:mt-12 '>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-2 text-neutral-900'>
                  <LuCircleCheckBig className="text-xl text-primary-600 " />
                  <span className='text-lg'>Povećanje zarade za 20% - 80%</span>
                </div>
                <div className='flex items-center gap-2'>
                  <LuCircleCheckBig className="text-xl text-primary-600 " />
                  <span className='text-lg'>Potpuna usluga - bez obveza za vas</span>
                </div>
                <div className='flex items-center gap-2'>
                  <LuCircleCheckBig className="text-xl text-primary-600 " />
                  <span className='text-lg'>100% transparentno poslovanje </span>
                </div>
              </div>
            </div>
          </>
        }  
      />
    </main>
  )
}

export default Page