import { BsFillHousesFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { MdApartment } from "react-icons/md";
import { MdChair } from "react-icons/md";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoMdChatboxes } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdKayaking } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBroom } from "react-icons/fa6";
import { PiWashingMachineFill } from "react-icons/pi";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { IoHammer } from "react-icons/io5";


const navigationData = [

  { 
    to: 'Usluge',
    children: [
      { to: 'Opremanje Smještaja', url: '/usluga/opremanjeSmjestaja', icon: <MdChair /> },
      { to: 'Kategoriziranje', url: '/usluga/kategoriziranje', icon: <BsFileEarmarkCheckFill /> },
      { to: 'Fotografiranje', url: '/usluga/fotografiranje', icon: <IoCamera />},
      { to: 'Porezna Pomoć', url: '/usluga/poreznaPomoc', icon: <RiMoneyEuroCircleFill /> },

      { to: 'Oglašavanje', url: '/usluga/oglasavanje', icon: <BsFillMegaphoneFill /> },
      { to: 'Optimizacija Zarade', url: '/usluga/optimizacijaZarade', icon: <LuChartNoAxesCombined /> },

      { to: 'Komunikacija S Gostima', url: '/usluga/komunikacijaSGostima', icon: <IoMdChatboxes /> },
      { to: 'Check-In Gostiju', url: '/usluga/primanjeGostiju', icon: <FaBuildingUser /> },
      { to: 'Prijava Gostiju', url: '/usluga/prijavaGostiju', icon: <BsPersonCheckFill /> },
      { to: 'Ponuda Sadržaja Gostima', url: '/usluga/ponudaSadrzajaGostima', icon: <MdKayaking /> },
      { to: 'Ponuda Dodatih Pogodnosti', url: '/usluga/ponudaDodatnihPogodnosti', icon: <GiReceiveMoney /> },
      { to: 'Čišćenje', url: '/usluga/čišćenje', icon: <FaBroom />},
      { to: 'Pranje Posteljine', url: '/usluga/pranjePosteljine', icon: <PiWashingMachineFill /> },
      { to: 'Kupovina Potrepština', url: '/usluga/kupovina', icon: <FaShoppingBasket /> },
      { to: 'Uvid U Podatke Poslovanja', url: '/usluga/podatci', icon: <MdOutlineBarChart /> },
      { to: 'Popravci', url: '/usluga/popravci', icon: <IoHammer /> },

    ]
  },
    { 
    to: 'Iznajmljivanje', 
    children: [
      { to: 'Novi Iznajmljivači', url: '/noviIznajmljivac', icon: <BsFillHouseFill/>},
      { to: 'Iskusni Iznajmljivači', url: '/iskusniIznajmljivac', icon: <BsFillHousesFill/> },
      { to: 'Investitori', url: '/investitor', icon: <MdApartment/> }
    ]
  },
  {
    to: "Cijene",
    url: "/cijene"
  },
];

export default navigationData;