import React from 'react'
import HeroSection from "@/sections/landing/HeroSection";
import Testimonial from '@/components/ui-lib/common/Testimonial';
import PainPointSection from '@/sections/landing/PainPointSection';
import { PiDiamondsFourFill } from "react-icons/pi";
import SocialProofSection from '@/sections/landing/SocialProofSection';
import Review from '@/components/Review';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import ValuePropSection from '@/sections/landing/ValuePropSection';
import ValuePropWithImage from '@/components/ui-lib/common/ValuePropWithImage';



const page = () => {

  const heroTestimonialsElement = 
  (
    <div className='h-full w-4xl 2xl:w-full py-12 2xl:py-0 xs:mx-8 2xl:mx-0 2xl:mr-8 flex flex-col items-center gap-8 2xl:gap-0 2xl:justify-evenly'>
      <Testimonial
        className={"max-w-3xl  min-[850px]:self-start"}
        image={"/images/temp/Tihomir_J.PNG"}
        alt={"User 1"}
        name={"Tihomir J."}
        info={"Zagreb"}
        text={"Odlučio sam dati priliku PrimeStay-u jer sam htio da netko stručan vodi brigu o oglašavanju moje kuće. Vidio sam da su novi na tržištu i da će dati sve od sebe. Prvi gosti su došli 2 dana nakon početka suradnje i tada sam znao da sam donio ispravnu odluku."}
      />
      <Testimonial 
        className={"max-w-3xl  min-[850px]:self-end"}
        image={"/images/temp/ANJA.PNG"}
        alt={"User 1"}
        name={"Anja Vrljičak"}
        info={"Villa, Makarska"}
        text={"Full Beds mi je uštedio toliko vremena i truda. Njihov sistem je jednostavan za korištenje, a podrška je uvijek tu kad mi zatreba. asda sd asd asd asd as das dasdr asdf asdf afas yxasklid has kljhdčlasčdlkjahfčkljhgaskljd fhčasklj hsčakljfa "}
      />
      <Testimonial 
        className={"max-w-3xl  min-[850px]:self-start"}
        image={"/images/temp/ANJA.PNG"}
        alt={"User 1"}
        name={"Anja Vrljičak"}
        info={"Soba, Makarska"}
        text={"Full Beds mi je uštedio toliko vremena i truda. Njihov sistem je jednostavan za korištenje, a podrška je uvijek tu kad mi zatreba."}
      />
    </div>
  );

  const airbnbIcon = <FaAirbnb className='text-red-700'/>;
  const bookingIcon = <TbBrandBooking className='text-blue-800'/>;

  const reviewClass = "bg-neutral-50 border-neutral-200 shadow-md";
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
      image="/images/temp/Marcelina.avif"
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
      mobileImageSrc={"/images/temp/Data4.png"}
      desktopImageSrc={"/images/temp/Data4.png"}
      alt={"Earning Statistics"}
      summary={"Zaradite Više"}
      text={"Kontinuiranom analizom tržišta svakodnevno unaprijeđujemo strategiju iznajmljivanja smještaja kako bi  iskoristili sve vaše kapacitete i povećali zaradu."} //To uključuje optimizaciju cijena, promjenu restrikcija (npr. min. noćenja po rezervaciji) i naplatu dodatnih usluga (npr. čišćenje, raniji ulazak).
      imageClassName={"object-left"}
    >
      Ostvarite Maksimalnu <span className='text-primary-600'>Popunjenost i Zaradu </span>
    </ValuePropWithImage>,
    <ValuePropWithImage
      key={2}
      mobileImageSrc={"/images/temp/ManAtPool.jpeg"}
      desktopImageSrc={"/images/temp/ManAtPool.jpeg"}
      alt={"A Relaxed Host"}
      summary={"Prepustite svu brigu nama"}
      text={"Tu smo kako bi vam pomogli u svemu, od kategorizacije i fotografiranja do oglašavanja i komunikacije s gostima. Nudimo vam kompletnu uslugu kako biste bili potpuno bezbrižni."}
      reverse = {true}
      imageClassName={"object-right"}
    >
      Riješite se obveza, <span className='text-primary-600'> Uštedite Vrijeme</span>
    </ValuePropWithImage>,
    <ValuePropWithImage
      key={3}
      mobileImageSrc={"/images/temp/FamilyEntering.png"}
      desktopImageSrc={"/images/temp/FamilyEntering.png"}
      alt={"Excited family at a house"}
      summary={"Poslujte Profesionalno"}
      text={"Zadovoljni gosti promoviraju smještaj, vraćaju se i plaćaju više. Mi poznajemo očekivanja i želje gostiju i znamo kako ih nadmašiti."}
    >
      Osigurajte <span className='text-primary-600'>idealno iskustvo</span> svojim gostima
    </ValuePropWithImage>
  ];

  return (
    <>
      <HeroSection
        titleText={"Pokrenite iznajmljivanje bez stresa i gubitka vremena"}
        // subtitleText={"Sve što ti treba za uspješan početak iznajmljivanja nalazi se na jednom mjestu — mi radimo, ti zarađuješ."}
        // subtitleText={"Neznate kako funkcioniraju kategorizacija, porezi i online oglašavanje? Naš jedinstveni sistem osigurava jednostavan i bezbrižan početak iznajmljivanja."}
        subtitleText={"Naš jedinstveni sistem vodi vas kroz sve, od kategorizacije do poreza i oglašavanja, za bezbrižan početak."}
        mobileImgSrc="/images/temp/HeroImageTemp.jpg"
        desktopImgSrc="/images/temp/HeroImageTemp.jpg"
        imgAlt="Hero Background"
        imgClassName="object-[51%-50%] md:object-[65%_50%] lg:object-center "
        children={heroTestimonialsElement}
      />
      <PainPointSection
        title={<>Želite iznajmiti smještaj ali ne znate gdje početi? <div className='text-primary-600 mt-2'>Osigurat ćemo vam jednostavan i lagan početak.</div></>}
        boldedText={"Imate nekretninu koju želite iznajmiti, ali ne znate ništa o kategorizaciji, oglašavanju, porezima i naknadama?"}
        bodyText={
          [
            "Informacije su često zbunjujuće i teško ih je pronaći, što čini početak iznajmljivanja stresnim i kompliciranim. Dok pokušavate razumjeti sve te informacije, vrijeme prolazi, a vi GUBITE potencijalnu zaradu.",
            "Tu smo da vam pomognemo! Naš jedinstveni sistem vodi vas kroz sve korake, od opremanja i kategorizacije do oglašavanja i poreza, kako biste bezbrižno započeli svoje iznajmljivanje."
          ]
        }
        icon={<PiDiamondsFourFill className='text-primary-600 text-2xl'/>}
        bulletPointText={
          [
            "Ušteda 16+ sati",
            "Pristup svim informacijama na jednom mjestu",
            "Neograničeno stručno savjetovanje"
          ]
        }
      />
      <SocialProofSection
        title={"Nadmašujemo očekivanja vaših gostiju"}
        reviews={guestReviews}
      />
      <ValuePropSection children={valueProps} />
    </>
  )
}

export default page