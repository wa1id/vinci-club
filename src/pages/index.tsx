import React, { Fragment, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import BecomeAMember from "src/components/form/BecomeAMember";

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Vinci Club Deurne</title>
      </Head>
      <div className="bg-primary">
        <div className="bg-noise min-h-screen p-4">
          <div className="grid grid-cols-3 gap-4 text-white p-16">
            <div>Logo</div>
            <div className="flex justify-center">
              <div className="flex">
                <div className="grid place-items-center h-20 w-20 border-2 border-white font-drukwide">
                  05
                </div>
              </div>
            </div>
          </div>

          <button
            className="text-white"
            onClick={() => setIsOpen(true)}
          >
            Lid worden
          </button>

          <p className="text-white text-center mt-8 sm:mt-16 underline">
            <Link href="/terms-and-conditions">algemene voorwaarden</Link>
          </p>
        </div>
      </div>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
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
