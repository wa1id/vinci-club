import classNames from 'classnames';
import React from 'react';
import { IoClose } from 'react-icons/io5';

interface IProps {
  text: string;
  className?: string;
}

const ErrorText: React.FC<IProps> = ({ text, className }) => {
  return (
    <div
      className={classNames(
        'p-2 w-full bg-red-500 text-white font-light flex items-center gap-2 my-4',
        className
      )}
    >
      <IoClose />
      <div>{text}</div>
    </div>
  );
};

export default ErrorText;
