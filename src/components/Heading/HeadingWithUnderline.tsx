import React from 'react';
import classNames from 'classnames';

interface Props {
  title: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  lineClassName?: string;
}

const HeadingWithUnderline: React.FC<Props> = ({
  size = 'small',
  title,
  className,
  lineClassName,
}) => {
  const sizeClasses = classNames(
    size === 'small' && 'text-lg md:text-xl lg:text-2xl',
    size === 'medium' && 'text-xl md:text-2xl lg:text-4xl',
    size === 'large' && 'text-2xl md:text-4xl lg:text-6xl '
  );

  return (
    <h3
      className={classNames(
        sizeClasses,
        className,
        'uppercase font-extrabold'
      )}
    >
      {title}
      <p className={classNames(lineClassName, 'w-24 p-1 bg-secondary')} />
    </h3>
  );
};

export default HeadingWithUnderline;
