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
              Boksen is meer dan alleen het uitvoeren van bokshandelingen. Het
              is een combinatie van cardio- en krachttraining. Tijdens het
              boksen train je niet alleen je kracht en conditie, maar ook je
              reactievermogen, behendigheid, evenwicht, coördinatie en
              zelfvertrouwen. Boksen is een uitstekende manier om zowel je
              lichaam als geest te trainen. In deze training leer je de
              basisvaardigheden van het boksen en bouw je hierop verder.
            </p>
            <br />
            <p className="text-white">
              Naast Jamal Ben Saddik geven experts met jarenlange ervaring in
              verschillende vakgebieden de cursussen. Ook na de trainingen staan
              we graag voor je klaar als je vragen, hulp of advies nodig hebt.
              Ben je geïnteresseerd in deze sport en wil je graag begeleid
              worden door de beste trainers om hogerop te komen? Trek je
              bokshandschoenen aan en stap de ring in!
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
