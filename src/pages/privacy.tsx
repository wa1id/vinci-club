import Head from "next/head";
import React from "react";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacybeleid | Vinci Club</title>
      </Head>
      <div className="p-4 md:p-8 ">
        <h1 className="text-xl md:text-4xl font-bold text-black uppercase text-center underline">
          Privacybeleid
        </h1>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">
            Welke persoonlijke gegevens we verzamelen en waarom we die
            verzamelen
          </h2>
          <p>
            We doen er alles aan om jouw privégegevens ook echt privé te houden.
            Je wilt natuurlijk niet van iemand vandoor gaat met jouw
            persoonsgegevens. Terecht ook. We vragen wel gegevens van jou, zodat
            we je zo goed mogelijk kunnen helpen. Welke gegevens we vragen en
            waarvoor we ze gebruiken lees je hieronder. Ook zie je wat je
            rechten zijn, wie toegang heeft tot je data en hoe lang we je
            gegevens bewaren. Dit privacybeleid is voor het laatst gewijzigd op
            23 november 2022.
          </p>
          <br />
          <h3 className="font-bold text-lg">Cookies</h3>
          <p>
            Dankzij cookies hoef je niet steeds dezelfde informatie in te voeren
            of te downloaden wanneer je bij ons terugkomt. Bovendien helpen ze
            ons inzien hoe je onze sites gebruikt en hoe wij de boel beter en
            klantvriendelijker kunnen maken. Het moet gezegd worden: we
            gebruiken ze ook voor marketingdoeleinden. Het staat je vrij om
            cookies uit te schakelen. Hou er dan wel rekening mee dat de
            websites niet optimaal werken.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
