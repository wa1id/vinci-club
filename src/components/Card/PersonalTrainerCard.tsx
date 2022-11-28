import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';

interface Props {
  image: string | StaticImageData;
  name: string;
  title: string;
  description: string;
}

const PersonalTrainerCard: React.FC<Props> = ({
  image,
  name,
  title,
  description,
}) => {
  return (
    <div className='w-full md:w-80 lg:w-96 h-full bg-white'>
      <div className='w-full h-80 overflow-hidden'>
        <Image
          src={image}
          className='h-full -mt-1 w-full object-cover'
          alt={name}
        />
      </div>
      <div>
        <div className='p-4 '>
          <div className='flex items-center justify-start gap-2 w-full mb-1'>
            <a href='#'>
              <AiOutlineTwitter
                className='text-primary'
                size={24}
              />
            </a>
            <a href='#'>
              <AiOutlineInstagram
                className='text-primary'
                size={24}
              />
            </a>
            <a href='#'>
              <FaFacebookF
                className='text-primary'
                size={20}
              />
            </a>
          </div>
          <div className='py-2 border-primary border-b-[1px] border-opacity-5'>
            <h1 className='uppercase text-2xl font-bold text-primary'>
              {name}
            </h1>
            <p className='text-primary text-[18px] leading-6 font-normal'>
              {title}
            </p>
          </div>

          <p className='overflow-hidden my-4 font-light h-24 text-primary text-justify'>
            {description}
          </p>

          <div className='flex'>
            <Link
              href='/personal-trainer'
              className='bg-primary-lighter text-black py-2 px-4 rounded-full flex items-center gap-2 '
            >
              Read more
              <BsChevronDown />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainerCard;
