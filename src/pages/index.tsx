import React from "react";
import Logo from "public/logo.png";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Vinci Club Deurne</title>
      </Head>
      <div className="bg-black   min-h-screen  p-4">
        <div className="flex justify-center items-center flex-col md:flex-row ">
          <div className="w-full p-4 flex items-center justify-center flex-col md:flex-row md:justify-end gap-4">
            <Image src={Logo} alt="logo" width={500} />

            <h1 className="text-5xl font-bold text-red-600 uppercase text-center md:hidden -mt-6">
              Coming Soon
            </h1>
          </div>

          <div className="w-full h-full flex flex-col md:flex-row md:items-center md:gap-5 p-4">
            <div className="border-2 border-red-600 w-full md:w-auto  md:h-96 mb-6 md:m-0" />

            <div className="flex flex-col p-2 px-8 w-full gap-4 mx-auto ">
              <div className="flex  gap-2">
                <IoIosCall color="red" className="mt-1" size={20} />
                <a className="text-white" href="tel:+32470702750">
                  +32 470 70 27 50
                </a>
              </div>

              <div className="flex  gap-2">
                <GrMail color="red" className="mt-1" size={20} />
                <a className="text-white" href="mailto:info@vinci-club.be">
                  info@vinci-club.be
                </a>
              </div>

              <div className="flex  gap-2">
                <AiFillHome color="red" className="mt-1" size={20} />
                <div className="text-white">
                  2100 Antwerpen (Deurne), Cruyslei 54 A
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="animate-bounce	hidden md:block md:text-8xl md:mb-36 lg:m-0 lg:text-9xl font-bold text-red-600 uppercase text-center">
          Coming Soon
        </h1>

        <p className="text-white text-center mt-8 sm:mt-16 underline">
          <Link href="/terms-and-conditions">algemene voorwaarden</Link>
        </p>
      </div>
    </>
  );
};

export default Home;
