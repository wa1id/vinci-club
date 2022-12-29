import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import jamal from "public/jamal.jpeg";
import Heading from "src/components/Heading/Heading";
import Link from "next/link";
import ContactWithVinciDumbellImg from "public/contact-with-vinci-club-dumbell.png";
import ContactWithVinciExerciseImg from "public/contact-with-vinci-club-exercise-machine.png";

const Kickboks = () => {
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
          </div>
          <div className="w-full h-full flex items-center justify-center relative p-6">
            <Image src={jamal} alt="Jamal Ben Saddik" />
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
