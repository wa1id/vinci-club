import React from "react";
import { TiTick } from "react-icons/ti";
import InfoWithIcon from "../Info/InfoWithIcon";
import { FiArrowUpRight } from "react-icons/fi";

export interface IChooseYourPlanCardProps {
  id?: number;
  name: string;
  price: number;
  info: string[];
  isSubtitle?: boolean;
  subtitle?: string;
}

const ChooseYourPlanCard: React.FC<IChooseYourPlanCardProps> = ({
  name,
  price,
  info,
  isSubtitle,
  subtitle,
}) => {
  return (
    <div className="bg-plan rounded-lg border-primary border-2 max-w-sm w-full">
      <h3 className="font-bold text-3xl uppercase px-4 py-6 text-center">
        {name}
      </h3>
      <div className="bg-secondary text-primary text-center font-bold p-4 text-[50px] relative flex items-center justify-center ">
        <>
          €{price}{" "}
          <span className="font-normal text-xl">
            {/* TODO: i18 */}
            /per month
            <sup>*</sup>
          </span>
        </>
        {isSubtitle && (
          <small className="text-[15px] font-normal flex items-center justify-center w-full absolute bottom-2">
            {/* TODO: i18 */}
            {subtitle}
          </small>
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-full px-8 py-12">
        {info.map((text) => (
          <InfoWithIcon
            key={text}
            icon={<TiTick className="text-white" />}
            info={text}
          />
        ))}
      </div>

      <button className="border-primary border-2 hover:bg-secondary text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto text-[22px] uppercase transition-colors ease-in-out duration-200">
        {/* TODO: i18 */}
        Choose <FiArrowUpRight />
      </button>
    </div>
  );
};

export default ChooseYourPlanCard;