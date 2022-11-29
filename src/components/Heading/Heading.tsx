import React from 'react';
import classNames from 'classnames';

interface Props {
  aboveHeading: string;
  belowHeading: string;
  headingClassName?: string;
  lineClassName?: string;
}

const Heading: React.FC<Props> = ({
  aboveHeading,
  belowHeading,
  headingClassName,
  lineClassName,
}) => {
  return (
      <h2
        className={classNames(
          'uppercase text-4xl md:text-6xl lg:text-7xl font-drukwide',
          headingClassName
        )}
      >
        {aboveHeading} <br />
        <span className='relative z-10'>
          <span className=' [text-shadow:_0px_3px_0px_rgb(0_0_0_/_19%)]'>
            {belowHeading}
          </span>
          <span
            className={classNames(
              'h-4 md:h-8 w-full absolute bottom-2 -right-2 bg-opacity-90 z-[-1]',
              lineClassName
            )}
          />
        </span>
      </h2>
  );
};

export default Heading;
