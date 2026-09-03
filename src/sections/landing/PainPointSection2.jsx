import Section from "@/components/ui-lib/common/Section";
import Title from "@/components/ui-lib/common/Title";
import BodyText from '@/components/ui-lib/common/BodyText'
import { FaCircleCheck } from "react-icons/fa6";
import CtaFudReduced from "@/components/ui-lib/common/CtaFudReduced";

export default function PainPointSection2( ) {

  const icon = <FaCircleCheck className="min-w-5 min-h-5 mr-2 mt-1 text-green-800"/>;

  return (
    <Section className="bg-neutral-50 flex justify-center">
      <div className="max-w-4xl">

        {/*         <Title>Gubite 20% - 80% moguće zarade od svog smještaja, a niste toga svijesni</Title>
        Iznajmljivate apartman ili kuću i:
        
        - Niste sigurni kako ostvariti maksimalnu zaradu? (cijene "od oka" ili prema susjedima)
        - Smještaj vam nije stalno popunjen izvan vrhunca sezone?
        - Nemate vremena za konstantnu brigu o oglasima, cijenama, smještaju i gostima?

        Kako biste izvukli maksimum iz svog smještaja, potreban je svakodnevni rad i praćenje tržišta, a to je gotovo nemoguće ako imate još jedan posao ili obitelj.

        Zbog toga, mnogi iznajmljivači gube tisuće eura (ponekad čak i više) moguće zarade od svog smještaja, misleći da rade dobro.

        Imate stalnu obvezu koja vam oduzima vrijeme i energiju, a vjerojatno ne zarađujete koliko biste mogli. 

        Naš tim pomaže iznajmljivačima da povećaju svoju zaradu u prosjeku 40% u odnosu na samostalno izanjmljivanje.

        To postižemo kroz:

        - Oglašavanje na mnogo platformi istovremeno (Airbnb, Booking, Expedia, Vrbo i dr.)

        - Svakodnevnu optimizaciju cijena i uvjeta rezervacije

        - Vrhunsko iskustvo gosta koje dugoročno podiže zaradu (prosječna ocjena gosta 4.91/5)

        Saznajte koliko zarade propuštate i zbog čega pomoću besplatne analize.
        
 */}
        <Title><span className="text-primary-600">Gubite 20% do 80% moguće zarade</span> od svog smještaja, a da toga niste ni svjesni</Title>
        <BodyText>
          <div className="font-semibold mt-4 mb-8">Iznajmljujete apartman ili kuću i:</div>
          
          <span className="flex flex-row items-start mb-6">
            {icon}
            <p>Postavljate cijene "od oka" ili prema susjedima</p>
          </span>
          <span className="flex flex-row items-start mb-6">
            {icon}
            <p>Smještaj vam nije stalno popunjen izvan vrhunca sezone?</p>
          </span>
          <span className="flex flex-row items-start mb-10">
            {icon}
            <p>Nemate vremena za konstantnu brigu o oglasima, cijenama, smještaju i gostima?</p>
          </span>

          <div className="mb-8">Istina je jednostavna: Maksimalna popunjenost i vrhunske cijene traže svakodnevni rad s podacima. Uz redovan posao i obiteljske obveze, to je gotovo nemoguće.</div>

          <div className="mb-8">Rezultat? Mnogi iznajmljivači svake godine nesvjesno <span className="font-semibold border-b-2 border-primary-600">gube TISUĆE eura</span> moguće zarade, trošeći pritom vlastite živce i energiju na posao koji ne daje maksimum.</div>
          <div className="mb-8">Naš tim pomaže iznajmljivačima da povećaju svoju zaradu u prosjeku 40% u odnosu na samostalno izanjmljivanje.</div>
          <div className="mb-8">To postižemo kroz:</div>

          <span className="flex flex-row items-start mb-6">
            {icon}
            <p>Istovremeno oglašavanje na svim ključnim platformama (Airbnb, Booking.com, Expedia, Vrbo i dr.)</p>
          </span>
          <span className="flex flex-row items-start mb-6">
            {icon}
            <p>Pametno prilagođavanje cijena na dnevnoj bazi ovisno o potražnji na tržištu</p>
          </span>
          <span className="flex flex-row items-start mb-10">
            {icon}
            <p>Vrhunsku uslugu za goste koja donosi ocjene od 4.91/5 i stalne preporuke</p>
          </span>


          <div className="mb-8">Saznajte koliko zarade propuštate i zbog čega pomoću besplatne analize.</div>

          <CtaFudReduced />
        </BodyText>



      </div>
    </Section>
  );
}