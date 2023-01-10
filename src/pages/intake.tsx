import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import Heading from 'src/components/Heading/Heading';
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
          aboveHeading="Intake"
          belowHeading="Formulier"
          headingClassName="text-white"
          lineClassName="bg-secondary"
        />
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
