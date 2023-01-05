import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label: string;
  inputClassName?: string;
  hideRequiredIcon?: boolean;
}

const Input: React.FC<IProps> = ({
  className,
  labelClassName,
  label,
  inputClassName,
  name,
  required,
  hideRequiredIcon = false,
  ...inputProps
}) => {
  return (
    <div className={classNames(className, 'my-6')}>
      <label
        htmlFor={name}
        className={classNames(labelClassName, 'capitalize text-primary')}
      >
        {label} {required && !hideRequiredIcon && <sup>*</sup>}
      </label>
      <input
        id={name}
        name={name}
        required
        className={classNames(
          inputClassName,
          'appearance-none block w-full lg:w-3/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-light focus:border-primary mt-3'
        )}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
