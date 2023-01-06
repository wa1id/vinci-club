import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Heading from "src/components/Heading/Heading";
import ladiesonly from "public/ladies-only.jpeg";
import nora from "public/nora.jpeg";
import InTakeForm from "src/components/form/InTakeForm/InTakeForm";

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
        <InTakeForm />

        <div className="flex flex-col lg:flex-row space-x-2">
          <div className="max-w-2xl mx-2">
            <h1 className="text-2xl font-bold">Discover Women Only</h1>

            <p>
              Eindelijk… a een lange periode vol ideeën en hard werken kan ik
              eindelijk aankondigen dat Vinci Club ladies only haar deuren heeft
              geopend!
            </p>
            <br />
            <p>
              Vinci Club ladies only is meer dan alleen een sportschool. Ons
              doel is om onze dames te motiveren om een gezonde levensstijl te
              behouden. We streven naar een plek waar vrouwen zich comfortabel
              en welkom voelen. Bij ons kun je terecht voor diverse
              faciliteiten, zoals fitness, groepslessen, personal training,
              kickboks onder begeleiding van N&apos;Wicha en nog veel meer om te
              ontdekken!
            </p>
            <br />
            <p>
              We kijken ernaar uit om je te verwelkomen en ons avontuur samen te
              beginnen!
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
              Van jonge leeftijd af aan voelde ik me onzeker over mijn lichaam
              en vond ik moeilijk geschikte kleding of stijl. Ik had mijn
              schouders hangen en weegde mezelf dagelijks, waarna ik mezelf
              bekeek in de spiegel en vergelijkte met andere vrouwen. Dit leidde
              tot een laag zelfbeeld. Er waren dagen dat ik mezelf uithongerde
              en er waren ook dagen dat ik alles at wat ik tegenkwam omdat ik me
              zo slecht voelde. Mensen overtuigden me ervan dat ik mijn
              droomfiguur kon bereiken door een koolhydraatarm dieet. Ik richtte
              me hierop en op zoveel andere diverse diëten die ik online of van
              anderen hoorde. Niets hielp, ik bleef hetzelfde. Op een ochtend
              stond ik op met een lege maag en had ik de mindset dat dit moest
              veranderen! Na veel onderzoek en studie vond ik mijn manier van
              eten en begon ik aan een gezonde voedingsstijl. Het begint
              allemaal bij jezelf; alleen als je echt iets wilt, bereik je je
              doelen. Elke kleine stap is een stap vooruit en een stap
              dichterbij je doel.
            </p>
            <br />
            <p>
              Dit is wat me dagelijks motiveert om vrouwen te helpen die
              worstelen met zichzelf. Met mijn kennis en ervaring kan ik
              garanderen dat we met 100% inzet jouw droomlichaam kunnen
              realiseren met behulp van een op maat gemaakt voedingsschema. Elke
              persoon is een uitdaging voor mij en ik sta hiervoor open!
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
