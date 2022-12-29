import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Heading from "src/components/Heading/Heading";
import ladiesonly from "public/ladies-only.jpeg";
import nora from "public/nora.jpeg";

const LadiesOnly = () => {
  return (
    <>
      <Head>
        <title>Ladies Only - Vinci Club</title>
      </Head>

      <div className="bg-primary bg-noise py-10 flex-1 text-center w-full ">
        {/* TODO: i18 */}
        <Heading
          aboveHeading="Ladies"
          belowHeading="only"
          headingClassName="text-white"
          lineClassName="bg-secondary"
        />
      </div>

      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row space-x-2">
          <div className="max-w-2xl mx-2">
            <h1 className="text-2xl font-bold">Discover Women Only</h1>

            <p>
              Eindelijk… na een lange periode volbloeiend met ideeën en hard
              werken, kan ik meedelen dat de Vinci club ladies only zijn deuren
              heeft geopend!
            </p>
            <br />
            <p>
              Bij de Vinci ladies only club zijn we meer dan slechts een gym.
              Als doel motiveren we onze dames gedurende hun weg naar een
              gezonde levensstijl. We streven naar een plek waar onze dames hun
              comfort vinden en zich welkom voelen. In onze club vind je
              verschillende faciliteiten terug zoals fitness, groepslessen,
              personal training, kickboks onder begeleiding van N’Wicha en nog
              zoveel meer dat valt te ontdekken!
            </p>
            <br />
            <p>
              We kijken er alvast naar uit om je te verwelkomen en onze avontuur
              samen te starten!
            </p>
            <br />
            <p>Groetjes, Vinci Ladies</p>
          </div>
          <div className="flex w-full justify-center my-4">
            <Image
              src={ladiesonly}
              style={{ maxWidth: "250px" }}
              alt="Lichaamsanalyse"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row space-x-2 mt-20">
          <Image
            src={nora}
            className="h-full my-6 w-full object-cover"
            style={{ maxWidth: "400px" }}
            alt="Nora Ledou"
          />
          <div className="max-w-2xl lg:text-right">
            <h2 className="text-2xl font-bold">Nora Ledou</h2>

            <p>
              Sinds jonge leeftijd voelde ik me niet goed in mijn vel en onzeker
              over mijn lichaam. Ik vond niet snel de gepaste kleding noch stijl
              en wandelde rond met mijn schouders omlaag. Ik stond dagelijks op
              de weegschaal, waarna ik mezelf bekeek in de spiegel en mezelf
              vergeleek met andere dames. Hierdoor creëerde ik een laag
              zelfbeeld. Er zijn dagen geweest dat ik mezelf uithongerde en er
              zijn ook dagen geweest dat ik alles at wat ik tegenkwam omdat ik
              me zo slecht in m’n vel voelde. Mensen deden me geloven dat door
              middel van een koolhydraatarm dieet ik mijn droomfiguur kon
              behalen. Ik heb me hierop gefocust en op zoveel andere diverse
              diëten waarvan ik hoorde of online tegenkwam. Niets was minder
              waar, ik bleef hetzelfde. Op een ochtend stond ik op met een lege
              maag en had ik de mindset dat dit moet veranderen! Na veel
              research en studies vond ik mijn draai en begon ik aan een deftige
              en gezonde voedingsstijl. Het begint allemaal bij jezelf; enkel en
              alleen wanneer je echt iets wil, bereik je jouw doelen. Elke
              kleine stap is een stap vooruit en een stap dichter bij jouw doel.
            </p>
            <br />
            <p>
              Dit werd mijn dagelijkse motivatie om dames te helpen die
              dagelijks met zichzelf worstelen. Met mijn kennis en ervaring, kan
              ik verzekeren dat we met de volle 100% jouw droomlichaam tot
              werkelijkheid kunnen brengen met behulp van een op maat gemaakt
              voedingsschema. Eenieder is een uitdaging en ik sta hiervoor open!
            </p>
            <br />
            <p>De vraag nu is... ga jij de uitdaging aan?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default LadiesOnly;
