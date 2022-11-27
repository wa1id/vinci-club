import React from 'react';
import BarBellImg from 'public/barbell-1.png';
import Image from 'next/image';


const ChooseYourPlan = () => {
  return (
    <div className='bg-plan p-16 w-full '>
      <div className=' w-full flex justify-center flex-col md:flex-row md:px-24'>
        <div className='h-full '>
          <Image
            src={BarBellImg}
            alt='barbell'
            className='max-w-[192px] hidden md:block -mt-16 lg:translate-x-8'
          />
        </div>
        <div className='flex-1 text-center w-full '>
          <h1 className='uppercase text-4xl md:text-6xl lg:text-7xl font-drukwide'>
            Choose <br />
            <span
              className='relative z-10'
            >
              your plan
              <span className='bg-secondary h-8 w-full absolute bottom-2 -right-2 bg-opacity-90
                z-[-1]' />
            </span>
          </h1>
          <p className='text-lg max-w-3xl m-auto font-normal mt-6'>
            Gym fitness dedicated, for a training center or personal trainer,
            suitable to work with sport related websites such as crossfit,
            bodybuilding or yoga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
