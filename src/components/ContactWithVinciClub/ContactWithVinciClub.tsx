import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../Heading/Heading";
import Image from "next/image";
import ContactWithVinciBoyImg from "public/contact-with-vinci-club-boy.png";
import ContactWithVinciDumbellImg from "public/contact-with-vinci-club-dumbell.png";
import ContactWithVinciExerciseImg from "public/contact-with-vinci-club-exercise-machine.png";
import Link from "next/link";

const ContactWithVinciClub = () => {
  return (
    <div className="py-16 p-4 md:p-20 lg:p-28 w-full bg-primary bg-noise">
      <div className="w-full flex justify-center flex-col-reverse lg:flex-row items-center text-center">
        <div className="w-full h-full relative">
          <Image
            src={ContactWithVinciDumbellImg}
            alt="dumbell-img"
            className="max-w-[156px] hidden lg:block absolute top-0 left-0 md:h-28 lg:h-32 md:-translate-x-20  md:-translate-y-28 xl:-translate-x-20 xl:-translate-y-36"
          />
          {/* TODO: i18 */}
          <Heading
            aboveHeading="contacteer"
            belowHeading=""
            headingClassName="text-primary-lighter"
          />
          <div
            className=" [text-shadow:_0px_13px_1px_rgb(0_0_0_/_0.4%)] uppercase text-4xl md:text-5xl lg:text-6xl font-drukwide"
            style={{
              WebkitTextStroke: "1px #F0EBE8",
              WebkitTextFillColor: "transparent",
            }}
          >
            {/* TODO: i18 */}
            VINCI CLUB
          </div>
          <p className="text-primary-lighter font-normal m-auto text-xl mt-4 md:max-w-[450px]">
            {/* TODO: i18 */}
            Onze medewerkers en personal trainers staan voor je klaar met al je
            vragen.
          </p>

          <div className="w-full flex justify-center items-center flex-col gap-5 my-4 p-6">
            {/* TODO: use button component */}
            <Link href="#contacform" scroll={false}>
              <button className="bg-secondary text-primary p-4 rounded-full ml-4 flex items-center justify-center gap-2 uppercase max-w-[300px]">
                {/* TODO: i18 */}
                contacteer ons
                <FiArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center relative p-6">
          <Image priority src={ContactWithVinciBoyImg} alt="" />
          <Image
            src={ContactWithVinciExerciseImg}
            alt="exercise-machine-img"
            className="max-w-[156px] hidden md:h-28 lg:block absolute bottom-0 right-0 translate-x-24 translate-y-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactWithVinciClub;
