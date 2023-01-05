import React, { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import BecomeAMember from "src/components/form/BecomeAMember";
import { Countdown } from "src/components/Countdown/Countdown";

import hero3 from "public/hero-3.png";
import hero2 from "public/hero-2.png";
import hero1 from "public/hero-1.png";
import { Button } from "src/components/Button/Button";
import { SocialFollows } from "src/components/SocialFollows/SocialFollows";
import { SideTextStroke } from "src/components/SideTextStroke";
import ChooseYourPlan from "src/components/ChooseYourPlan/ChooseYourPlan";
import PersonalTrainers from "src/components/PersonalTrainers/PersonalTrainers";
import GetTheNewsFrom from "src/components/GetTheNewsFrom/GetTheNewsFrom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Vinci Club - Fitness & Boxing</title>
      </Head>
      <div className="bg-primary bg-noise h-full text-white">
        <div className="bg-lines p-4">
          <div className="flex flex-col p-8 2xl:p-16">
            <Countdown />
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="z-10 lg:ml-20 xl:ml-28 space-y-8 text-center sm:text-left">
              <h1 className="flex flex-col uppercase text-6xl sm:text-8xl 2xl:text-9xl font-drukwide [text-shadow:_15px_10px_10px_rgb(0_0_0_/_75%)]">
                <span>new</span>
                <span className="text-secondary">year&apos;s</span>
                <span>deal</span>
              </h1>

              <p className="max-w-md">
                Als je het inschrijvingsformulier invult doorheen de maand
                december en tijdens onze opendeurweek jouw inschrijving komt
                vervolledigen dan kan jij genieten van de eerste maand gratis
                sporten. Geldig op alle abonnementen mits er wordt gekozen voor
                een jaarabonnement.
              </p>

              <Button variant="tertiary" onClick={() => setIsOpen(true)}>
                {t("Become member")}
              </Button>

              <SocialFollows label={t("Follow us")} />
            </div>

            <div className="relative w-4/5">
              <div className="flex justify-end lg:-translate-x-16 2xl:-translate-x-24">
                <div className="columns-1 m-2">
                  <Image priority src={hero3} alt="bodybuilder" />
                </div>
                <div className="rows-2 -translate-y-8 md:-translate-y-16 lg:-translate-y-24 2xl:-translate-y-32">
                  <Image className="m-4" src={hero2} alt="woman working out" />
                  <Image
                    className="m-4"
                    src={hero1}
                    alt="boxing glove against bag"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideTextStroke />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto w-full max-w-xl bg-white transform">
                  <div className="px-5">
                    <Dialog.Title className="text-3xl font-bold text-gray-900 uppercase my-4">
                      Lid worden
                    </Dialog.Title>
                    <Dialog.Description>
                      Als je het Inschrijvingsformulier invult doorheen de maand
                      december en tijdens onze opendeurweek jouw inschrijving
                      komt vervolledigen dan kan jij genieten van de eerste
                      maand gratis sporten. Geldig op alle abonnementen mits er
                      wordt gekozen voor een jaarabonnement.
                    </Dialog.Description>
                  </div>

                  <BecomeAMember />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ChooseYourPlan />
      {/* <PersonalTrainers /> */}
      <GetTheNewsFrom />
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

export default Home;
