import React, { Fragment, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import BecomeAMember from "src/components/form/BecomeAMember";
import { Countdown } from "src/components/Countdown/Countdown";

import hero3 from "public/hero-3.png";
import hero2 from "public/hero-2.png";
import hero1 from "public/hero-1.png";
import logowhite from "public/logo-white.png";
import { Button } from "src/components/Button/Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { SocialFollows } from "src/components/SocialFollows/SocialFollows";
import { SideTextStroke } from "src/components/SideTextStroke";

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Vinci Club Deurne</title>
      </Head>
      <div className="bg-primary bg-noise h-full text-white">
        <div className="bg-lines p-4">
          <div className="flex flex-col p-8 2xl:p-16">
            <div className="flex items-center justify-center mb-16">
              <Image
                className="max-w-xs lg:max-w-lg 2xl:max-w-3xl"
                src={logowhite}
                alt="logo vinci club"
              />
            </div>
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

              <Button onClick={() => setIsOpen(true)}>
                Lid worden <ArrowUpRightIcon className="ml-3" width={20} />
              </Button>

              <SocialFollows label="Follow us" />
            </div>

            <div className="relative w-4/5">
              <div className="flex lg:-translate-x-16 2xl:-translate-x-24">
                <div className="columns-1 m-2">
                  <Image src={hero3} alt="bodybuilder" />
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

          <p className="text-white text-center mt-8 sm:mt-16 underline">
            <Link href="/terms-and-conditions">algemene voorwaarden</Link>
          </p>
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
                <Dialog.Panel className="mx-auto w-full max-w-md bg-white p-5 transform">
                  <Dialog.Title>Lid worden</Dialog.Title>
                  <Dialog.Description>
                    Als je het Inschrijvingsformulier invult doorheen de maand
                    december en tijdens onze opendeurweek jouw inschrijving komt
                    vervolledigen dan kan jij genieten van de eerste maand
                    gratis sporten. Geldig op alle abonnementen mits er wordt
                    gekozen voor een jaarabonnement.
                  </Dialog.Description>

                  {/* TODO: add form here */}
                  <BecomeAMember />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Home;
