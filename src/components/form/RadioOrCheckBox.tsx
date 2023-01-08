import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label: string;
  inputClassName?: string;
  error?: boolean;
}

const RadioOrCheckBox: React.FC<IProps> = ({
  className,
  labelClassName,
  label,
  inputClassName,
  name,
  required,
  value,
  onChange,
  error,
  ...inputProps
}) => {
  return (
    <>
      {error && <ErrorText text={`${label} is verplicht`} />}
      <div className={classNames(className, "flex items-center gap-3 mt-3")}>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={classNames(inputClassName, "block")}
          {...inputProps}
        />{" "}
        <span>{label}</span>
      </div>
    </>
  );
};

export default RadioOrCheckBox;
