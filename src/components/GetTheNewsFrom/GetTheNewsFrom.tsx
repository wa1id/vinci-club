import React from 'react';
import Heading from '../Heading/Heading';
import GetTheNewsFromGirlImg from 'public/get-the-news-from-girl.png';
import GetTheNewsFromDumbell from 'public/get-the-news-from-dumbell.png';
import GetTheNewsFromBoxingGloves from 'public/get-the-news-from-boxing-gloves.png';
import Image from 'next/image';

const GetTheNewsFrom = () => {
  return (
    <div className='py-16 p-4 md:p-20 w-full bg-secondary'>
      <div className='w-full flex justify-center flex-col-reverse md:flex-row  gap-5  items-center text-center'>
        <div className='w-full h-full relative'>
          <Image
            src={GetTheNewsFromDumbell}
            alt='dumbell'
            className='max-w-[156px] hidden md:block absolute top-0 left-0 -translate-x-10 -translate-y-20'
          />
          <Heading
            aboveHeading='Get the'
            belowHeading='news from'
            headingClassName='text-primary '
            lineClassName='bg-white'
          />
          <h3 className=' [text-shadow:_0px_13px_1px_rgb(0_0_0_/_0.4%)] uppercase text-4xl md:text-5xl lg:text-6xl font-drukwide '>
            VINCI CLUB
          </h3>
          <p className='text-primary font-normal'>
            Stay up to date with recent news, advice and weekly offers
          </p>
        </div>
        <div className='w-full h-full'>
          <Image
            src={GetTheNewsFromGirlImg}
            alt='get the news from'
          />
        </div>
      </div>
    </div>
  );
};

export default GetTheNewsFrom;
