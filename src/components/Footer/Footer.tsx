import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import logo from 'public/light-logo.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center text-xs p-4 py-8 w-full md:p-24'>
      <section className='p-4 w-full text-white gap-6 grid md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col gap-5 text-center md:text-left w-full'>
          <h3 className='text-xl font-bold'>CONTACT</h3>
          <div className='flex flex-col gap-3 my-4'>
            <p className='text-base'>Fax: 07 3193 7738</p>
            <p className='text-base'>Phone: 07 31937739</p>
            <p className='text-base'>Email: admin@vinciclub.com</p>
          </div>
          <div className='flex items-center justify-center md:justify-start gap-5'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineInstagram size={24} />
            </a>

            <a
              href='#'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div className='text-center w-full my-6 md:m-0'>
          <h3 className='text-xl font-bold'>WORKING HOURS</h3>
          <div className='flex items-center justify-center gap-5 my-4 bg-[#232323BF] p-4 rounded-full'>
            <p className='text-left text-lg flex flex-col gap-2'>
              <span>Monday - Friday : </span>
              <span>07:00 - 21:00</span>
            </p>
            <p className='text-left text-lg flex flex-col gap-2'>
              <span>Saturday : </span>
              <span>07:00 - 16:00</span>
            </p>
          </div>
          <p className='text-lg flex flex-col gap-2'>
            <span>Sunday Closed</span>
          </p>
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
              &copy; vinciclub
            </Link>
            <Link
              href='#'
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
