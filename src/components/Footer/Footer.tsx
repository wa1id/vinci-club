import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from 'public/light-logo.svg';
import { SocialFollows } from '../SocialFollows/SocialFollows';

const Footer = () => {
  return (
    <footer className='bg-primary bg-noise text-white text-center text-xs p-4 py-8 w-full md:p-24'>
      <section className='p-4 w-full text-white gap-6 grid md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col gap-5 text-center md:text-left w-full'>
          <h3 className='text-xl font-bold'>CONTACT</h3>
          <div className='flex flex-col items-center md:items-start gap-3 my-4'>
            <p className='text-base flex items-center gap-2'>
              <span>Phone:</span>
              <a href='tel:07 31937739 '>07 31937739</a>
            </p>
            <p className='text-base flex items-center gap-2'>
              <span>Email:</span>
              <a href='mailto:admin@vinciclub.com'>admin@vinciclub.com</a>
            </p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-5'>
            <SocialFollows />
          </div>
        </div>

        <div className='text-center w-full my-6 md:m-0'>
          <h3 className='text-xl font-bold'>WORKING HOURS</h3>
          <div className='flex flex-col items-center gap-5 my-4 py-4 lg:p-4 rounded-full'>
            <p className='text-left text-lg'>Monday - Friday : 07:00 - 21:00</p>
            <p className='text-left text-lg'>
              Saturday - Sunday: 07:00 - 15:00
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-full md:text-left lg:text-right'>
          <h3 className='text-xl font-bold'>LOCATION AT</h3>
          <div className='flex flex-col gap-3 my-4'>
            <p className='text-base'>LEVEL 7</p>
            <p className='text-base'>BRISBANE PRIVATE HOSPITAL</p>
            <p className='text-base'>259 Wickham Terrace, Spring Hill Q 4000</p>
          </div>
        </div>

        <div className='flex items-center justify-between flex-col md:flex-row gap-5 w-full border-t-2 border-[#FFFDFD08] py-8 col-span-full'>
          <Link href='/'>
            <span className='sr-only'>Vinci Club</span>
            <Image
              style={{ maxWidth: '250px' }}
              src={logo}
              alt='logo'
            />
          </Link>
          <div className='flex items-center flex-col sm:flex-row sm:justify-center md:justify-end gap-5 mt-4 md:m-0 w-full'>
            <Link
              href='#'
              className='text-sm'
            >
              &copy; Vinci Club
            </Link>
            <Link
              href='/privacy'
              className='text-sm'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms-and-conditions'
              className='text-sm'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
