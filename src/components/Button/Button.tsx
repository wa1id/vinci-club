import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { FC, MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex items-center text-white hover:text-primary hover:bg-white border-2 font-drukwide text-lg px-4 py-3 rounded-full transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
