import Head from "next/head";
import React from "react";
import RecursiveList from "src/components/lists/RecursiveList";
import {
  termsAndConditionsData1,
  termsAndConditionsData2,
} from "src/data/terms-and-conditions";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Algemene voorwaarden | Vinci Club</title>
      </Head>
      <div className="p-4 md:p-8 ">
        <h1 className="text-xl md:text-4xl font-bold text-black uppercase text-center underline">
          Algemene voorwaarden
        </h1>

        <div className="flex flex-col gap-2 mt-4">
          {termsAndConditionsData1.map((item, index) => (
            <RecursiveList key={index} {...item} />
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="font-semibold">
              7. Beëindiging of ontbinding lidmaatschap
            </h1>
            <div className="px-4">
              <p>
                <span className="font-semibold">7.1. </span>
                Indien het Lid zijn lidmaatschap niet 4 weken voor de einddatum
                van de initiële contractduur schriftelijk bij de desbetreffende
                club opzegt, wordt het lidmaatschap na de contractduur
                automatisch verlengd voor onbepaalde duur en geldt een
                opzegtermijn van 4 weken.
              </p>
              <p>
                <span className="font-semibold">7.2. </span>
                De opzegging kan worden gedaan op dezelfde wijze als de
                Overeenkomst is afgesloten, dan wel naar keus van het Lid
                schriftelijk middels een het bij Vinci Club verkrijgbaar
                opzegformulier of middels een eigen opzegbrief. Een
                schriftelijke opzegging dient het Lid te richten aan Vinci Club
                B.V. , Cruyslei 54A, 2100 Deurne. In geval het Lid zich online
                heeft ingeschreven, kan het Lid ook online (via de website
                www.vinci-club.be) of per e-mail (info@vinci-club.be) opzeggen.
              </p>
              <p>
                <span className="font-semibold">7.3. </span>
                Om de goede ontvangst van de opzegbrief te waarborgen, adviseert
                Vinci Club deze per aangetekende post te verzenden.
              </p>
              <p>
                <span className="font-semibold">7.4. </span>
                Het, door het Lid, tussentijds beëindigen van de Overeenkomst is
                uitsluitend kosteloos mogelijk op medische gronden waarbij een
                medische verklaring of ander – ten genoegen van Vinci Club –
                deugdelijk bewijs vereist is, bij het verhuizen buiten een
                straal van vijftien kilometer van de club van Vinci Club,
                waarbij een bewijs van inschrijving in de nieuwe gemeente
                vereist is, krijgt het lid de mogelijkheid om tussentijds de
                overeenkomst te beëindigen, met inachtneming van een
                opzegtermijn van 28 dagen.
              </p>
              <p>
                <span className="font-semibold">7.5. </span>
                Vinci Club geeft een Looptijd Verkorting optie. Indien het lid
                besluit gebruik te maken van de Looptijd Verkorting optie zal
                Vinci Club de door het Lid verschuldigde lidmaatschapsprijs
                herberekenen op basis van de resterende periode (inclusief de
                betaalperiode opzegtermijn) vermenigvuldigd met het van
                toepassing zijnde vaste tarief van 17,50 euro per 4 weken. Een
                indicatieve berekening van de vergoeding voor Looptijd
                Verkorting kan worden opgevraagd aan de balie van in de club van
                Vinci Club. De uiteindelijke verschuldigde totale vergoeding
                voor Looptijd Verkorting zal worden vermeld in de opzeg
                bevestiging van Vinci Club. Voor de in dit artikel 7.4 en
                artikel 7.5 genoemde gevallen geldt een opzegtermijn van 4
                weken.
              </p>
              <div>
                <span className="font-semibold">7.6. </span>
                Vinci Club mag de lidmaatschapsovereenkomst ontbinden zonder
                ingebrekestelling of mededeling:
                <p className="px-4 mt-2">
                  <span className="font-semibold">7.6.1 </span>
                  als het Lid niet (tijdig) aan zijn betalingsverplichtingen
                  heeft voldaan;
                </p>
                <p className="px-4">
                  <span className="font-semibold">7.6.2 </span>
                  als het Lid de machtiging tot SEPA automatische incasso
                  intrekt en/of een bedrag storneert;
                </p>
                <p className="px-4">
                  <span className="font-semibold">7.6.3 </span>
                  in geval van faillissement, (voorlopige) surseance van
                  betaling, schuldsanering of onder curatelestelling van het
                  Lid;
                </p>
                <p className="px-4">
                  <span className="font-semibold">7.6.4 </span>
                  indien het Lid de huisregels niet naleeft, dan wel indien het
                  Lid de toegang is geweigerd of ontzegd. Bij ontbinding van de
                  overeenkomst worden alle voor de resterende duur van het
                  lidmaatschap verschuldigde termijnen opeisbaar.
                </p>
              </div>
            </div>
          </div>
          {termsAndConditionsData2.map((item, index) => (
            <RecursiveList key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
