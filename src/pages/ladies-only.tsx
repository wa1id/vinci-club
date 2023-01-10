import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Heading from 'src/components/Heading/Heading';
import ladiesonly from 'public/images/ladies-only.jpeg';
import nora from 'public/images/nora.jpeg';
import { motion } from 'framer-motion';
import { CameraIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from 'src/components/Button/Button';
import GetTheNewsFrom from 'src/components/GetTheNewsFrom/GetTheNewsFrom';
import { useTranslation } from 'react-i18next';

const LadiesOnly = () => {
  const { t } = useTranslation();
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

      {/* TODO: extract to component */}
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
                Fitness Ladies only
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
                  <div>
                    <Image
                      src={ladiesonly}
                      className="object-cover w-full max-w-sm"
                      alt="Lichaamsanalyse"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">Lichaamsanalyse</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Op een ongedwongen manier sporten als vrouw? Dat doe je bij
                  Vinci Club Ladies only. Een sportschool op maat van vrouwen
                  met net dat tikkeltje meer. Een plek waar je je keer op keer
                  welkom en comfortabel voelt. Wij motiveren, stimuleren en
                  halen het beste in je naar boven. Stevige workouts met een
                  gezonde levensstijl vormen daarbij de basis.
                </p>
                <br />
                <p>
                  Fitness, een groepsles meepikken, personal training of een
                  rondje sparren tijdens het kickboksen onder begeleiding van
                  N&apos;Wicha? Je zegt het maar, bij ons train je op jouw tempo
                  en ladies only!
                </p>
                <br />

                <Link href="/signup">
                  <Button className="my-4" variant="primary">
                    Kom de club ontdekken
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
                  <div className="">
                    <Image
                      src={nora}
                      className="h-full my-6 w-full object-cover max-w-sm"
                      alt="Nora Ledou"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      Nora Ledou, @gezondmetnora op Instagram
                    </span>
                  </figcaption>
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
                  Nora Ledou
                </motion.h2>
                <p>
                  Van jongs af aan voelde ik me onzeker over mijn lichaam en
                  vond ik moeilijk geschikte kleding of een passende stijl. Ik
                  had hangende schouders, woog me dagelijks en was me
                  voortdurend aan het vergelijken met anderen. Een laag
                  zelfbeeld was het gevolg. Geregeld hongerde ik mezelf uit om
                  vervolgens alles te eten wat ik kon vastkrijgen. Ik voelde me
                  slecht. Het ene dieet na het andere begon ik, maar niets
                  hielp.
                </p>
                <br />
                <p>
                  Op een ochtend stond ik op met honger en had ik écht het
                  gevoel: dit moet veranderen. Na veel onderzoek en studie vond
                  ik mijn manier van eten en startte ik me een gezonde
                  levensstijl. Eindelijk had ik de drive gevonden om mijn doelen
                  te bereiken. Met kleine stappen vooruit bereikte ik
                  uiteindelijk mijn doel en ook jij kunt dit. Samen kunnen we
                  jouw droomlichaam realiseren door een combinatie van training
                  en een op maat gemaakt voedingsschema.
                </p>
                <br />
                <p>Gaan we samen de uitdaging aan? </p>
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

      {/* TODO: extract component */}
      <div className="bg-noise bg-primary ">
        <div className="max-w-2xl mx-auto flex flex-col py-12 px-4 text-center text-white items-center space-y-4">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-3xl font-bold"
          >
            Gaan we samen de uitdaging aan?
          </motion.h2>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          >
            Ben jij klaar om de meest fitte en zelfverzekerde versie van jezelf
            te worden? Vul het intake formulier in, zodat ik een goed beeld
            krijg van wie je bent en wat jouw doelen zijn.{' '}
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/intake">
              <Button variant="tertiary">Formulier invullen</Button>
            </Link>
          </motion.div>
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

export default LadiesOnly;
