import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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

  return (
    <>
      <Head>
        <title>Vinci Club - Fitness & Boxing</title>
      </Head>
      <div className="bg-primary bg-noise h-full text-white">
        <div className="bg-lines p-8">
          <div className="flex flex-col p-8 2xl:p-16">
            {/* <Countdown /> */}
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <div className="z-10 lg:ml-20 xl:ml-28 space-y-8 text-center sm:text-left">
              <h1 className="flex flex-col uppercase text-6xl sm:text-8xl 2xl:text-9xl font-drukwide [text-shadow:_15px_10px_10px_rgb(0_0_0_/_75%)]">
                <span>vinci</span>
                <span
                  className=" [text-shadow:_0px_13px_1px_rgb(0_0_0_/_0.4%)] uppercase text-6xl sm:text-8xl 2xl:text-9xl font-drukwide"
                  style={{
                    WebkitTextStroke: "1px #F0EBE8",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  club
                </span>
              </h1>

              <p className="max-w-md">
                Verander je leven met fitness en kickboks bij ons! In onze
                sportschool bieden we fitness- en kickbokslessen aan om je
                fysiek en mentaal te versterken.
              </p>

              <Link href="/signup">
                <Button className="my-4" variant="tertiary">
                  {t("Become member")}
                </Button>
              </Link>

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

      <ChooseYourPlan />
      <PersonalTrainers />
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
