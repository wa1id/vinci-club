import React from "react";
import BarBellImg from "public/barbell-1.png";
import Image from "next/image";
import Heading from "../Heading/Heading";
import data from "src/data/plans";
import ChooseYourPlanCard from "../Card/ChooseYourPlanCard";
import BodyImg from "public/body.png";
import { useTranslation } from "react-i18next";

const ChooseYourPlan = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-plan py-16 p-4 md:p-20 w-full ">
      <div className=" w-full flex justify-center flex-col md:flex-row relative">
        <div className="h-full ">
          <Image
            src={BarBellImg}
            alt="barbell"
            className="max-w-[156px] hidden md:block absolute md:-left-14 lg:-left-5 xl:left-24 -top-20 md:-top-18 lg:-top-16 xl:-top-14"
          />
        </div>
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
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center p-6">
        {data.map((item) => (
          <ChooseYourPlanCard key={item.id} {...item} />
        ))}
      </div>
      <div className="text-center">
        <sup>*</sup>
        {t("yearplan")}
      </div>

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
