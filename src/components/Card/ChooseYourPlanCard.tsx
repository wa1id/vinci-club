import React from "react";
import { TiTick } from "react-icons/ti";
import InfoWithIcon from "../Info/InfoWithIcon";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export interface IChooseYourPlanCardProps {
  id?: number;
  name: string;
  price: number;
  studentPrice?: number;
  info: string[];
  subtitle?: string;
}

const ChooseYourPlanCard: React.FC<IChooseYourPlanCardProps> = ({
  name,
  price,
  studentPrice,
  info,
  subtitle,
  id,
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col bg-plan rounded-lg border-primary border-2 max-w-sm w-full">
      <h3 className="font-bold text-3xl uppercase px-4 py-6 text-center">
        {name}
      </h3>
      <div className="flex flex-col justify-between h-full">
        <div className="bg-secondary text-primary text-center p-4 relative flex items-center justify-center ">
          <div className="flex flex-col">
            <div>
              <span className="text-[50px] font-bold">
                €{price.toLocaleString("nl-BE")}
              </span>
              <span className="text-xl">
                {t("/per month")}
                <sup>*</sup>
              </span>
            </div>
          </div>
          {subtitle && (
            <small className="text-[15px] font-normal flex items-center justify-center w-full absolute bottom-2">
              {subtitle}
            </small>
          )}
        </div>

        {studentPrice && (
          <div className="text-center">
            <div className="text-sm">Student?</div>

            <span className="text-xl font-bold">
              €{studentPrice.toLocaleString("nl-BE")}
            </span>
            <span className="text-xl">
              {t("/per month")}
              <sup>*</sup>
            </span>
          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-5 w-full px-8 py-12">
          {info.map((text) => (
            <InfoWithIcon
              key={text}
              icon={<TiTick className="text-white" />}
              info={text}
            />
          ))}
        </div>

        <button className="border-primary border-2 hover:bg-secondary text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto font-bold text-2xl uppercase transition-colors ease-in-out duration-200">
          {t("Sign up")}
        </button>
      </div>
    </div>
  );
};

export default ChooseYourPlanCard;
