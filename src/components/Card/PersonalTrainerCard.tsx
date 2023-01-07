import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { PersonalTrainer } from "src/typings/personalTrainer";
import { Button } from "../Button/Button";

const PersonalTrainerCard: React.FC<PersonalTrainer> = ({
  image,
  name,
  title,
  description,
  socials,
  placeholder,
}) => {
  return (
    <div className="w-full max-w-sm lg:w-72 h-full bg-white">
      <div className="w-full h-80 overflow-hidden">
        <Image
          src={image}
          className="h-full -mt-1 w-full object-cover object-top"
          alt={name}
        />
      </div>
      <div className="h-80">
        <div className="p-4 ">
          <div className="flex items-center justify-start gap-2 w-full mb-1">
            {socials?.instagram && (
              <a href={socials?.instagram}>
                <AiOutlineInstagram className="text-primary" size={24} />
              </a>
            )}
            {socials?.facebook && (
              <a href={socials?.facebook}>
                <FaFacebookF className="text-primary" size={20} />
              </a>
            )}
            {socials?.twitter && (
              <a href={socials.twitter}>
                <AiOutlineTwitter className="text-primary" size={24} />
              </a>
            )}
          </div>
          <div className="py-2 border-primary border-b-[1px] border-opacity-5">
            <h1 className="uppercase text-2xl font-bold text-primary">
              {name}
            </h1>
            <p className="text-primary text-[18px] leading-6 font-normal">
              {title}
            </p>
          </div>

          <p className="overflow-hidden my-4 font-light h-24 text-primary text-justify">
            {description}
          </p>

          <div className="flex">
            {placeholder ? (
              <Link passHref href="/contact">
                <Button size="sm" variant="primary">
                  Contact
                </Button>
              </Link>
            ) : (
              <Link passHref href="/personal-trainers">
                <Button size="sm" variant="primary">
                  Meer informatie
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainerCard;
