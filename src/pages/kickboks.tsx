import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import jamal from 'public/images/jamal.jpeg';
import lady from 'public/images/boxing-lady.jpg';
import Heading from 'src/components/Heading/Heading';
import Link from 'next/link';
import { Button } from 'src/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { CameraIcon } from '@heroicons/react/24/outline';
import GetTheNewsFrom from 'src/components/GetTheNewsFrom/GetTheNewsFrom';
import { motion } from 'framer-motion';

const Kickboks = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Kickboks - Vinci Club</title>
      </Head>

      <div className="flex justify-center  pb-6 lg:pb-16 bg-primary bg-noise">
        {/* TODO: i18 */}
        <Heading
          aboveHeading=""
          belowHeading="Kickboks"
          headingClassName="text-white"
          lineClassName="bg-secondary"
        />
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="mt-2 text-3xl leading-8 font-extrabold textprimary sm:text-4xl"
              >
                Leef je uit in de ring.
              </motion.h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      priority
                      src={jamal}
                      className="object-cover"
                      alt="Jamal Ben Saddik"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">Glory 81</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Kickboks is veel meer dan enkel slaan en trappen. Het is een
                  full body workout die al je spieren aan het werk zet, de{' '}
                  <strong>
                    ultieme combinatie van cardio- en krachttraining.
                  </strong>
                </p>
                <br />
                <p>
                  Tijdens het kickboksen train je niet enkel je kracht en
                  conditie, je leert ook situaties inschatten en oefent je
                  reactievermogen, evenwicht en coördinatie. Bovendien tank je
                  tijdens elke sessie een flinke portie{' '}
                  <strong>zelfvertrouwen.</strong>
                </p>
                <br />
                <p>
                  Bij het boksen train je niet enkel je lichaam, maar ook je
                  geest. We beginnen de lessenreeks met de basisvaardigheden van
                  het boksen om daarop verder te bouwen.
                </p>
                <Link href="/signup">
                  <Button className="my-4" variant="primary">
                    {t('Become member')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white overflow-hidden mb-12">
        <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 right-3/4 w-screen" />

          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-1">
              <svg
                className="hidden lg:block absolute top-0 left-0 -mt-20 -ml-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      src={lady}
                      className="object-cover"
                      alt="Vrouw Kickboks"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:text-right">
              <div className="text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-2">
                <motion.h2
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  className="mb-2 text-3xl font-extrabold text-primary sm:text-4xl"
                >
                  Professionele lesgevers met jarenlange ervaring
                </motion.h2>
                <p>
                  Meervoudig kampioen Jamal Ben Saddik hoeven we je vast niet
                  meer voor te stellen, maar daarnaast geven ook nog heel wat
                  andere professionele coaches met heel wat ervaring training.
                  Zij zorgen voor een doorgedreven begeleiding die veel verder
                  gaat dan de sessies in de club. Voor, tijdens en na de
                  trainingen staan ze je met raad en daad bij en helpen ze je
                  bij je ontwikkeling als kickbokser. Neem jij de handschoen op?{' '}
                </p>
              </div>

              <Link href="/signup">
                <Button className="my-4" variant="primary">
                  {t('Become member')}
                </Button>
              </Link>
            </div>
          </div>
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

export default Kickboks;
