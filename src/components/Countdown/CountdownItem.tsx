import { FC } from "react";

interface Props {
  number: string;
  label: string;
}

export const CountdownItem: FC<Props> = ({ number, label }) => {
  return (
    <div className="grid place-items-center h-24 w-24 border-2 border-[#4A4A4E] bg-gradient-to-br from-black via-[#2B2C30] to-primary rounded-lg text-center">
      <div className="flex-col">
        <div>{number}</div>
        <div className="text-2xl">{label}</div>
      </div>
    </div>
  );
};
