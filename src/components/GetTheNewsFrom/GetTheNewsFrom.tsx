import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import GetTheNewsFromGirlImg from 'public/get-the-news-from-girl.png';
import GetTheNewsFromDumbell from 'public/get-the-news-from-dumbell.png';
import GetTheNewsFromBoxingGloves from 'public/get-the-news-from-boxing-gloves.png';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import axios from 'axios';

const GetTheNewsFrom = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // subscribe to newsletter using mailchimp
    e.preventDefault();

    if (!email) {
      toast.warn('Please enter your email address');
      return;
    }

    axios
      .post('/api/subscribe', { email })
      .then((res) => {
        toast.success(`You have successfully subscribed to our newsletter`);
        setEmail('');
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <div className='py-16 p-4 md:p-20 lg:p-28 w-full bg-secondary'>
      <div className='w-full flex justify-center flex-col-reverse lg:flex-row items-center text-center'>
        <div className='w-full h-full relative'>
          <Image
            src={GetTheNewsFromDumbell}
            alt='dumbell'
            className='max-w-[156px] hidden lg:block absolute top-0 left-0  -translate-x-16 -translate-y-24 xl:-translate-x-20 md:-translate-y-28'
          />
          {/* TODO: i18 */}
          <Heading
            aboveHeading='Get the'
            belowHeading='news from'
            headingClassName='text-primary '
            lineClassName='bg-white'
          />
          <div
            className=' [text-shadow:_0px_13px_1px_rgb(0_0_0_/_0.4%)] uppercase text-4xl md:text-5xl lg:text-6xl font-drukwide'
            style={{
              WebkitTextStroke: '1px #1D1D1D',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {/* TODO: i18 */}
            VINCI CLUB
          </div>
          <p className='text-primary font-normal m-auto text-xl mt-4 md:max-w-[308px]'>
            {/* TODO: i18 */}
            Stay up to date with recent news, advice and weekly offers
          </p>

          <form
            className='w-full flex justify-center items-center flex-col gap-5 my-4 p-6'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              placeholder='Enter your email'
              className={'get-the-news-from-email-input'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className='bg-primary text-white p-4 rounded-full ml-4 flex items-center justify-center gap-2 uppercase max-w-[300px]'
              type='submit'
            >
              {/* TODO: i18 */}
              Subscribe <FiArrowUpRight className='mt-1' />
            </button>
          </form>
        </div>
        <div className='w-full h-full flex items-center justify-center relative p-6'>
          <Image
            src={GetTheNewsFromGirlImg}
            alt='get the news from'
          />
          <Image
            src={GetTheNewsFromBoxingGloves}
            alt='boxing gloves'
            className='max-w-[156px] hidden lg:block absolute bottom-0 right-0 translate-x-24 translate-y-32'
          />
        </div>
      </div>
    </div>
  );
};

export default GetTheNewsFrom;
