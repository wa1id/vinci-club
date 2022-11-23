import { FC, MouseEventHandler } from "react";
import { classNames } from "src/utils/common";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "tertiary";
}

export const Button: FC<Props> = ({ onClick, children, type, variant }) => {
  const primaryClasses =
    variant === "primary"
      ? "text-primary hover:text-white hover:bg-primary border-primary hover:border-white"
      : "";

  const secondaryClasses =
    variant === "secondary"
      ? "text-white hover:text-primary hover:bg-white"
      : "";

  return (
    <button
      type={type ? type : "button"}
      className={classNames(
        primaryClasses,
        secondaryClasses,
        "inline-flex items-center border-2 font-drukwide text-lg px-4 py-3 rounded-full transition-colors duration-200 ease-in-out"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
