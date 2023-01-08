import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';
import ErrorText from './ErrorText';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label: string;
  inputClassName?: string;
  hideRequiredIcon?: boolean;
  error?: boolean;
}

const Input: React.FC<IProps> = ({
  className,
  labelClassName,
  label,
  inputClassName,
  name,
  required,
  hideRequiredIcon = false,
  error,
  value,
  ...inputProps
}) => {
  return (
    <div className={classNames(className, 'my-6')}>
      <label
        htmlFor={name}
        className={classNames(labelClassName, 'text-primary')}
      >
        {label} {required && !hideRequiredIcon && <sup>*</sup>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className={classNames(
          inputClassName,
          'appearance-none block w-full lg:w-3/5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-light focus:border-primary mt-3'
        )}
        value={value}
        {...inputProps}
      />
      {error && <ErrorText text={`${label} is verplicht`} />}
    </div>
  );
};

export default Input;
