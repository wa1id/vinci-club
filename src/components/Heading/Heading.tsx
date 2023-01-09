import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

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
  lineClassName
}) => {
  return (
    <h2
      className={classNames(
        'uppercase text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-drukwide',
        headingClassName
      )}
    >
      {aboveHeading} <br />
      <span className="relative z-10">
        <motion.span className=" [text-shadow:_0px_3px_0px_rgb(0_0_0_/_19%)]">
          {belowHeading}
        </motion.span>
        <span
          className={classNames(
            'h-4 md:h-8 w-full absolute bottom-2 -right-1 bg-opacity-90 z-[-1]',
            lineClassName
          )}
        />
      </span>
    </h2>
  );
};

export default Heading;
