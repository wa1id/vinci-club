import classNames from "classnames";
import { FC, MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "tertiary" | "outline";
}

export const Button: FC<Props> = ({ onClick, children, type, variant }) => {
  const variantClasses = classNames(
    variant === "outline" &&
      "text-primary hover:text-white hover:bg-primary border-primary",
    variant === "primary" &&
      "bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary hover:border-primary",
    variant === "secondary" && "text-primary hover:bg-secondary border-primary",
    variant === "tertiary" && "text-white hover:text-primary hover:bg-white"
  );

  return (
    <button
      type={type ? type : "button"}
      className={classNames(
        variantClasses,
        "inline-flex items-center border-2 text-lg px-4 py-2 rounded-full transition-colors duration-200 ease-in-out uppercase font-bold"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
