import React from 'react'
import HeroSection from "@/sections/landing/HeroSection";
import Testimonial from '@/components/ui-lib/common/Testimonial';
import PainPointSection from '@/sections/landing/PainPointSection';
import { PiDiamondsFourFill } from "react-icons/pi";
import SocialProofSection from '@/sections/landing/SocialProofSection';
import Review from '@/components/ui-lib/common/Review';
import { FaAirbnb } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import ValuePropSection from '@/sections/landing/ValuePropSection';
import ValuePropWithImage from '@/components/ui-lib/common/ValuePropWithImage';
import CaseStudySection from '@/sections/landing/CaseStudySection';
import DifferentiatorsSection from '@/sections/landing/DifferentiatorsSection';
import HowItWorkSection from '@/sections/landing/HowItWorkSection';
import ToolsSection from '@/sections/landing/ToolsSection';
import FaqSection from '@/sections/landing/FaqSection';
import FaqItem from '@/components/ui-lib/common/FaqItem';
import { GoDotFill } from "react-icons/go";
import IconedText from '@/components/ui-lib/common/IconedText';
import RecapSection from '@/sections/landing/RecapSection';
import BodyText from '@/components/ui-lib/common/BodyText';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import AbTest from '@/lib/abTest';

export const metadata = {
  title: "PrimeBooker | Profesionalno Upravljanje Apartmanima i Kućama",
  description: "Ne dopustite da Vam apartman stoji prazan. Nudimo potpunu uslugu vođenja smještaja za vlasnike koji nemaju vremena ili nisu u blizini. PrimeBooker preuzima sve: od oglasa i gostiju do čišćenja.",
};

const page = () => {

  const heroTestimonialsElement = 
  (
    <div className='h-full w-4xl 2xl:w-full py-12 2xl:py-0 xs:mx-8 2xl:mx-0 2xl:mr-8 flex flex-col items-center gap-8 2xl:gap-0 2xl:justify-evenly'>
      <Testimonial 
        className={"max-w-3xl min-[850px]:self-start"}
        image={"/images/people/Matija_T.avif"}
        alt={"Klijent"}
        name={"Matija T."}
        info={"Pula"}
        text={"Moj apartman u Istri godinama je stajao prazan jer jednostavno nisam imao vremena baviti se iznajmljivanjem. Tek kad sam angažirao PrimeBooker shvatio sam koliko sam zarade propuštao. Od početka umjesto mene rade sve i skoro pa nemam nikakvog posla oko iznajmljivanja."}
      />
      <Testimonial 
        className={"max-w-3xl min-[850px]:self-end"}
        image={"/images/people/Ana_V.avif"}
        alt={"User 1"}
        name={"Ana V."}
        info={"Zadar"}
        text={"Nakon što sam umjesto podstanara odlučila prijeći na kratkoročni najam, shvatila sam da mi treba pomoć. Nisam imala pojma odakle krenuti – trebalo je renovirati stan,  rješiti papire i napraviti kategorizaciju, sve mi je to bilo novo. PrimeBooker me vodio kroz sve korake i stvarno mi olakšao početak."}
      />
      <Testimonial
        className={"max-w-3xl  min-[850px]:self-start"}
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
      mobileImageSrc={"/images/general/Calendar_w1274.avif"}
      desktopImageSrc={"/images/general/Calendar_w1274.avif"}
      alt={"Filled Calendar"}
      summary={"Zaradite Više"}
      text={"Kontinuiranom analizom tržišta svakodnevno unaprijeđujemo strategiju iznajmljivanja smještaja kako bi iskoristili sve vaše kapacitete i povećali zaradu."} //To uključuje optimizaciju cijena, promjenu restrikcija (npr. min. noćenja po rezervaciji) i naplatu dodatnih usluga (npr. čišćenje, raniji ulazak).
      imageClassName={"object-left"}
    >
      Ostvarite <span className='text-primary-600'>Maksimalnu Popunjenost </span> i Zaradu
    </ValuePropWithImage>,
    <ValuePropWithImage
      key={2}
      mobileImageSrc={"/images/general/ManAtPool_w800.avif"}
      desktopImageSrc={"/images/general/ManAtPool_w1920.avif"}
      alt={"A Relaxed Host"}
      summary={"Prepustite svu brigu nama"}
      text={"Tu smo kako bi vam pomogli u svemu, od kategorizacije i fotografiranja do oglašavanja i čišćenja. Nudimo vam kompletnu uslugu kako biste bili potpuno bezbrižni."}
      reverse = {true}
      imageClassName={"object-right"}
    >
      Iznajmite bez truda i <span className='text-primary-600'> Ostvarite pasivne prihode</span>
    </ValuePropWithImage>,
    <ValuePropWithImage
    key={3}
    mobileImageSrc={"/images/general/FamilyEntering_w800.avif"}
    desktopImageSrc={"/images/general/FamilyEntering_w1100.avif"}
    alt={"Excited family at a house"}
    summary={"Poslujte Profesionalno"}
    text={"Zadovoljni gosti promoviraju smještaj, vraćaju se i plaćaju više. Mi poznajemo očekivanja i želje gostiju i znamo kako ih nadmašiti."}
    imageClassName={"object-top"}
    >
      <span className='text-primary-600'>Osigurajte idealno iskustvo</span> svojim gostima
    </ValuePropWithImage>
  ];
  
  const dot = <GoDotFill />;
  
  const faqItems = [
    <FaqItem 
      key={0}
      question={"Mogu li i dalje koristiti svoj smještaj za sebe?"}
      text={
        <>
          Naravno! I dalje možete koristiti svoj smještaj kad god želite, a mi ćemo vam osigurati maksimalnu zaradu kada vi ne koristite smještaj.
        </>
      }
    />,
    <FaqItem 
    key={1}
    question={"Hoću li izgubiti kontrolu nad svojim smještajem?"}
    text={
      <>
          Ne. Vi ste i dalje vlasnik smještaja možete doći u njega kada želite i imate potpuni uvid u sve: 
          <span className='py-4 flex flex-col gap-2'>
            <IconedText icon={dot} text="Raspored rezervacija" />
            <IconedText icon={dot} text="Cijene" />
            <IconedText icon={dot} text="Troškove i prihode" />
            <IconedText icon={dot} text="Statistiku popunjenosti" />
          </span>
          Mi smo tu kako bi vam ostvarili zaradu kada vi ne korisite smještaj.
        </>
      }
    />,
    <FaqItem 
      key={2}
      question={"Koliko vaša usluga košta?"}
      text={
        <>
          Naša usluga se naplaćuje kao postotak od ostvarene zarade. 
          Zbog toga ste sigurni da ćemo dati sve od sebe kako bi Vam ostvarili što veću zaradu.
          Točan postotak se određuje prema uslugama koje odaberete.
        </>
      }
    />,
    <FaqItem 
      key={3}
      question={"Kako funkcioniraju isplate?"}
      text={
        <>
          Mi obavljamo sve računovodstvene obveze i plaćamo sve naknade, a Vi svaki mjesec dobivate detaljan izvještaj o prihodima i troškovima. Isplata zarade na vaš račun se vrši do 5. dana u mjesecu za prethodni mjesec.
        </>
      }
    />,
    <FaqItem 
      key={4}
      question={"Koliko vremena je potrebno za početak suradnje?"}
      text={
        <>
          Ukoliko je smještaj spreman za iznajmljivanje potrebno je nekoliko dana za fotografiranje, uređivanje fotografija i objavu oglasa. Ako je smještaj potrebno kategorizirati onda će to potrajati duže, ovisno o brzini procesa kategorizacije.
        </>
      }
    />,

  ];
  return (
    <main className="font-default">
      <HeroSection
        titleText={<AbTest featureKey={"inv-hero-title"} fallBack={"Iznajmite smještaj bez stresa i obveza!!"}/>}
        subtitleText={"Imate smještaj koji vam stoji prazan? Želite zaradite od njega, ali ne želite nikakve obveze? Nudimo sveobuhvatnu uslugu upravljanja smještajem koja vam ostvaruje makismalnu zaradu bez da išta radite."}
        mobileImgSrc="/images/general/HeroImage_w1920.avif"
        desktopImgSrc="/images/general/HeroImage_w1920.avif"
        imgAlt="Hero Background"
        imgClassName="object-[51%-50%] md:object-[65%_50%] lg:object-center "
        children={heroTestimonialsElement}
      />
      <PainPointSection
        title={<>Želite zaraditi od smještaja ali ne želite se baviti iznajmljivanjem? <div className='text-primary-600 mt-2'>Prepustite obveze nama i počnite zarađivati.</div></>}
        boldedText={"Imate nekretninu u kojoj ljetujete? U njoj ste samo par tjedana godišnje? Gledate druge kako zarađuju od svojih apartmana dok vaš stoji prazan... ali:"}
        bodyText={
          [
            <div className='flex flex-col gap-4'>
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Niste tu tijekom cijele godine</div>
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Ne znate ništa o iznajmljivanu</div>
              <div><PiDiamondsFourFill className='text-primary-600 text-2xl inline mr-2'/>Nemate vremena baviti se s gostima, čišćenjem i pravnim obvezama</div> 
            </div>,
            <div>Na kraju odustanete od svega jer vam iznajmljivanje izgleda neizvedivo.</div>,
            <div>Radi toga gubite tisuće eura iz godine u godinu dok drugi zarađuju lako.</div>,
            <div>Postoji rješenje koje vam omogućava da iznajmljujete bez ikakvih obveza i odgovornosti. Rješenje koje iskorištava puni potencijal vašeg smještaja, a vama osigurava bezbrižnost.</div>,
            <div>Mi upravljamo vašim smještajem kako bi ste ostvarili makismalnu zaradu. </div>

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
      />
      <SocialProofSection
        title={<><span className='text-primary-600'>Nadmašite očekivanja</span> svojih gostiju</>}
        reviews={guestReviews}
      />
      <ValuePropSection children={valueProps} />
      <CaseStudySection />
      <DifferentiatorsSection />
      <HowItWorkSection />
      <ToolsSection />
      <FaqSection faqItems={faqItems} />
      <RecapSection
        title={<><span className='text-primary-600'>Prestanite propuštati zaradu</span> i osigurajte uspjeh</>}
        body={
          <>
            <BodyText className='text-lg text-neutral-800 '>
              <div className='font-bold'>Nemojte dopustiti da još jedna godina prođe u premišljanu.</div>
              <div className='mt-4'>
                Svakim danom kojim vaš apartman ostaje prazan gubite laku zaradu.  
                S nama imate partnera koji razumije tržište, brine o svakom detalju i radi za vaš maksimalni profit.
              </div>
              <div className='mt-4'>Kontaktirajte nas danas i osigurajte da svaki dan u sezoni radi u vašu korist!</div>
            </BodyText>
            <div className='flex flex-col mt-8 xl:mt-12 '>
              <div className='flex flex-col gap-4 xl:gap-6'>
                <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Besplatno Fotografiranje"}/>
                <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"100% Transparentno"}/>
                <IconedText icon={<IoCheckmarkDoneSharp className='text-2xl sm:text-3xl text-primary'/>} textClassName={"text-neutral-800 font-semibold text-lg md:text-xl xl:text-2xl"} text={"Sveobuhvatna Usluga"}/>
              </div>
            </div>
          </>
        }  
      />
    </main>
  )
}

export default page