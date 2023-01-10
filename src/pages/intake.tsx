import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Heading from 'src/components/Heading/Heading';
import jamal from 'public/images/jamal.jpeg';
import GetTheNewsFrom from 'src/components/GetTheNewsFrom/GetTheNewsFrom';
import InTakeForm from 'src/components/form/InTakeForm/InTakeForm';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Intake formulier - Vinci Club</title>
      </Head>

      <div className="bg-primary bg-noise py-10 flex-1 text-center w-full ">
        {/* TODO: i18 */}
        <Heading
          aboveHeading="Lid worden bij"
          belowHeading="Vinci Club"
          headingClassName="text-white"
          lineClassName="bg-secondary"
        />

        <p className="text-md max-w-3xl m-auto font-normal mt-6 text-white">
          Ben jij klaar om lid te worden van de Vinci Club? Vul dan het
          onderstaande formulier in en kom langs in onze club!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly lg:p-10">
        <div>
          <InTakeForm />
        </div>
      </div>

      <GetTheNewsFrom />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Signup;
