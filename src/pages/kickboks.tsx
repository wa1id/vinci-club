import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import jamal from "public/jamal.jpeg";
import Heading from "src/components/Heading/Heading";
import Link from "next/link";
import { Button } from "src/components/Button/Button";
import { useTranslation } from "react-i18next";

const Kickboks = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Kickboks - Vinci Club</title>
      </Head>

      <div className="py-16 p-4 md:p-20 lg:p-28 w-full bg-primary bg-noise">
        <div className="w-full flex justify-center flex-col-reverse lg:flex-row items-center text-center">
          <div className="w-full h-full relative">
            {/* TODO: i18 */}
            <Heading
              aboveHeading=""
              belowHeading="Kickboks"
              headingClassName="text-white"
              lineClassName="bg-secondary"
            />
            <p className="text-white mt-8">
              Boksen is meer dan enkel boksen, het is cardio -en krachttraining
              tezamen. Hierbij train je niet enkel jouw kracht en conditie maar
              tegelijk jouw reactievermogen, behendigheid, evenwicht,
              coördinatie en zelfvertrouwen. Boksen is een uitstekende training
              voor zowel jouw lichaam als geest. In deze training bestuderen we
              alle basistechnieken, waarna we hierop verder bouwen.
            </p>
            <br />
            <p className="text-white">
              Naast Jamal Ben Saddik, worden de cursussen gegeven door experts
              met jarenlange ervaring op meerdere vlakken dan enkel boks. Ook na
              de trainingen helpen we je graag verder voor het geval je nog
              vragen, hulp of advies nodig hebt. Heb jij passie voor deze sport
              en wil je graag hogerop klimmen met behulp van de beste trainers?
              Trek je bokshandschoenen aan en klim in de kring!
            </p>

            <Link href="/signup">
              <Button className="my-4" variant="tertiary">
                {t("Become member")}
              </Button>
            </Link>
          </div>
          <div className="w-full h-full flex items-center justify-center relative p-6">
            <Image priority src={jamal} alt="Jamal Ben Saddik" />
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

export default Kickboks;
