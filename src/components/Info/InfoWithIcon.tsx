import React from 'react'


interface Props {
  icon: React.ReactNode;
  info: string
  infoClassName?: string;
}

const InfoWithIcon: React.FC<Props> = (props) => {

  const { icon, info, infoClassName } = props;

  return (
    <div className='flex items-center gap-3 w-full'>
      <span className='bg-primary rounded-full text-xl'>
        {icon}
      </span>{' '}
      <p className={`${infoClassName}`}>{info}</p>
    </div>
  );
}

export default InfoWithIcon