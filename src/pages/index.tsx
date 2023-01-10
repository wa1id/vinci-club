import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import hero3 from 'public/images/hero-3.png';
import hero2 from 'public/images/hero-2.png';
import box from 'public/images/bg-box.jpg';
import boxLady from 'public/images/bg-ladies.jpg';
import { Button } from 'src/components/Button/Button';
import { SocialFollows } from 'src/components/SocialFollows/SocialFollows';
import { SideTextStroke } from 'src/components/SideTextStroke';
import ChooseYourPlan from 'src/components/ChooseYourPlan/ChooseYourPlan';
import PersonalTrainers from 'src/components/PersonalTrainers/PersonalTrainers';
import GetTheNewsFrom from 'src/components/GetTheNewsFrom/GetTheNewsFrom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const supportLinks = [
  {
    name: 'Kickboks',
    href: '/kickboks',
    description:
      'Je eerste stappen in de ring zetten, kickboks training volgen of een programma op maat? Wij zorgen voor de begeleiding.',
    image: box
  },
  {
    name: 'Fitness ladies only',
    href: '/ladies-only',
    description:
      'In een ongedwongen sfeer aan je lichaam werken? In onze Ladies only fitness kom je thuis en word je optimaal begeleid.',
    image: boxLady
  }
];

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Vinci Club - Fitness & Boxing</title>
      </Head>
      <div className="bg-primary bg-noise h-full text-white">
        <div className="bg-lines px-8 pt-8 pb-24 lg:p-8">
          <div className="flex flex-col p-8 2xl:p-16">
            {/* <Countdown /> */}
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="z-10 lg:ml-20 xl:ml-28 space-y-8 text-center lg:text-left">
              <h1 className="flex flex-col uppercase text-6xl sm:text-8xl 2xl:text-9xl font-drukwide [text-shadow:_15px_10px_10px_rgb(0_0_0_/_75%)]">
                <motion.span
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                >
                  vinci
                </motion.span>
                <motion.span
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
                  className=" [text-shadow:_0px_13px_1px_rgb(0_0_0_/_0.4%)] uppercase text-6xl sm:text-8xl 2xl:text-9xl font-drukwide"
                  style={{
                    WebkitTextStroke: '1px #F0EBE8',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  club
                </motion.span>
              </h1>

              <p className="max-w-md">
                Jouw leven zowel fysiek als mentaal naar een hoger niveau
                tillen, dat is waarom je bij ons traint. Bij Vinci Club verander
                je je leven met fitness en doorgedreven kickbokstrainingen op
                jouw niveau. In onze sportschool wordt niet enkel je lichaam,
                maar ook je geest scherper en sterker. Vinci Club is een manier
                van leven, veel meer dan een sportclub.
              </p>

              <Link href="/signup">
                <Button className="my-4" variant="tertiary">
                  {t('Become member')}
                </Button>
              </Link>

              <SocialFollows label={t('Follow us')} />
            </div>

            <div className="hidden lg:block relative w-3/5">
              <div className="flex justify-end 2xl:-translate-x-24">
                <div className="columns-1 m-2">
                  <Image priority src={hero3} alt="bodybuilder" />
                </div>
                <div className="rows-2 -translate-y-8 md:-translate-y-16 lg:-translate-y-24 2xl:-translate-y-32">
                  <Image className="m-4" src={hero2} alt="woman working out" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideTextStroke />
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-16 max-w-7xl mx-auto relative z-10 pb-16 px-12"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Meer info
        </h2>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8 rounded-2xl">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col  rounded-2xl shadow-xl"
            >
              <div
                // className={`flex-1 rounded-t-2xl relative px-6 md:px-8 ${link.image} shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.5)] bg-center bg-cover`}
                className="relative px-6 md:px-8"
              >
                <div className="bg-black/50 absolute w-full h-full inset-0 z-10" />
                <Image
                  fill
                  className="object-cover object-[50%_70%] rounded-t-2xl"
                  src={link.image}
                  alt=""
                />

                <div className="relative py-6 z-20">
                  <motion.h3
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.75, ease: 'easeOut' }}
                    className="text-4xl font-bold text-white uppercase"
                  >
                    {link.name}
                  </motion.h3>
                  <p className="mt-4 text-base text-white">
                    {link.description}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-b-2xl md:px-8">
                <Link href={link.href}>
                  <Button variant={'primary'}>Lees meer</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChooseYourPlan />
      <PersonalTrainers />
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

export default Home;
