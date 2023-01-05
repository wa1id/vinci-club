import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string;
  label: string;
  inputClassName?: string;
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
  ...inputProps
}) => {
  return (
    <div
      className={classNames(
        className,
        'flex items-center gap-3 capitalize mt-3'
      )}
    >
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames(inputClassName, 'block')}
        {...inputProps}
      />{' '}
      <span>{label}</span>
    </div>
  );
};

export default RadioOrCheckBox;
