import classNames from 'classnames';
import React from 'react';

interface Props {
  icon: React.ReactNode;
  info: string;
  infoClassName?: string;
}

const InfoWithIcon: React.FC<Props> = ({ icon, info, infoClassName }) => {
  return (
    <div className="flex items-center gap-3 w-full">
      <span className="bg-primary rounded-full text-xl">{icon}</span>{' '}
      <p className={classNames(infoClassName)}>{info}</p>
    </div>
  );
};

export default InfoWithIcon;
