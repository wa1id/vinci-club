import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label: string;
  inputClassName?: string;
}

const Input: React.FC<IProps> = ({
  className,
  labelClassName,
  label,
  inputClassName,
  name,
  required,
  ...inputProps
}) => {
  return (
    <div className={classNames(className, 'my-6')}>
      <label
        htmlFor={name}
        className={classNames(labelClassName, 'capitalize font-semibold text-primary')}
      >
        {label} {required && <sup>*</sup>}
      </label>
      <input
        id={name}
        name={name}
        className={classNames(
          inputClassName,
          'border-b-2 border-b-primary block w-full px-2 pt-2 focus:translate-y-2 focus:border-0 transition-all duration-300 mt-3'
        )}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
