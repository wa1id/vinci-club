import classNames from 'classnames';
import React from 'react';

interface IProps {
  text: string;
  className?: string;
}

const ErrorText: React.FC<IProps> = ({ text, className }) => {
  return (
    <div
      className={classNames(
        'p-2 w-full bg-red-600 text-white font-light',
        className
      )}
    >
      <span className='font-semibold mr-1'>x</span> {text}
    </div>
  );
};

export default ErrorText;
