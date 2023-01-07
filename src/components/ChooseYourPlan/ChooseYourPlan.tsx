import React from "react";
import BarBellImg from "public/barbell-1.png";
import Image from "next/image";
import Heading from "../Heading/Heading";
import data from "src/data/plans";
import ChooseYourPlanCard from "../Card/ChooseYourPlanCard";
import BodyImg from "public/body.png";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PricingSection } from "../molecules/PricingSection";

const ChooseYourPlan = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-plan py-16 p-4 relative">
      <Image
        src={BarBellImg}
        alt="barbell"
        className="hidden md:block absolute top-0 left-0 lg:left-10 scale-50 lg:scale-100"
      />

      <div className=" w-full flex justify-center flex-col md:flex-row relative">
        <div className="flex-1 text-center w-full ">
          {/* TODO: i18 */}
          <Heading
            aboveHeading={t("Choose your")}
            belowHeading={t("subscription")}
            headingClassName="text-primary"
            lineClassName="bg-secondary"
          />
          <p className="text-lg max-w-3xl m-auto font-normal mt-6">
            {t("plan description")}
          </p>
          <div className="flex items-center justify-center space-x-1">
            <Link href="/prijzen">Bekijk al onze prijzen hier</Link>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
      <PricingSection />

      <div className="flex justify-end items-center">
        <Image
          src={BodyImg}
          alt="body"
          className="max-w-[192px] hidden md:block  lg:-translate-x-40"
        />
      </div>
    </div>
  );
};

export default ChooseYourPlan;
