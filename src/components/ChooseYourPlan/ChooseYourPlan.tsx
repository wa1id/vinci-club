import React from 'react';
import BarBellImg from 'public/barbell-1.png';
import Image from 'next/image';
import Heading from '../Heading/Heading';
import data from 'src/data/plans';
import ChooseYourPlanCard from '../Card/ChooseYourPlanCard';
import BodyImg from 'public/body.png';

const ChooseYourPlan = () => {
  return (
    <div className='bg-plan py-16 p-4 md:p-20 w-full '>
      <div className=' w-full flex justify-center flex-col md:flex-row lg:px-24'>
        <div className='h-full '>
          <Image
            src={BarBellImg}
            alt='barbell'
            className='max-w-[184px] hidden md:block -mt-16 lg:translate-x-8'
          />
        </div>
        <div className='flex-1 text-center w-full '>
          <Heading
            aboveHeading='Choose '
            belowHeading='your plan'
            headingClassName='text-primary'
            lineClassName='bg-secondary'
          />
          <p className='text-lg max-w-3xl m-auto font-normal mt-6'>
            Gym fitness dedicated, for a training center or personal trainer,
            suitable to work with sport related websites such as crossfit,
            bodybuilding or yoga.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 justify-center items-center p-6'>
        {data.map((item) => (
          <ChooseYourPlanCard key={item.id} {...item}/>
        ))}
      </div>
      <div className='flex justify-end items-center'>
        <Image
          src
          ={BodyImg}
          alt='body'
          className='max-w-[192px] hidden md:block  lg:-translate-x-40'
        />
        </div>
    </div>  
  );
};

export default ChooseYourPlan;
