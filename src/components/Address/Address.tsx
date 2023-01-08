import React from 'react';
import Heading from '../Heading/Heading';
import GoogleMap from 'src/components/GoogleMap/GoogleMap';
import PhoneImg from 'public/phone.png';
import EmailImg from 'public/email.png';
import Image from 'next/image';

const Address = () => {
  return (
    <div className="bg-secondary py-16 p-4 lg:p-20 w-full text-center">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 ">
        <div className="md:mr-10">
          {/* TODO: i18 */}
          <Heading
            aboveHeading=""
            belowHeading="Ons adres"
            headingClassName="text-primary"
            lineClassName="bg-white"
          />
          <p className="text-primary text-[24px] mt-4 max-w-3xl mx-auto">
            {/* TODO: i18 */}
            Cruyslei 54A,
            <br /> 2100 Antwerpen (Deurne)
          </p>

          <div className="mt-8 flex items-center justify-center w-full gap-10">
            <div className="flex flex-col items-center gap-3">
              <Image src={PhoneImg} alt="phone-icon" width={44} height={44} />
              <a href="tel:+32470702750">+32 470 70 27 50</a>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Image src={EmailImg} alt="email-icon" width={44} height={44} />
              <a href="mailto:info@vinci-club.be">info@vinci-club.be</a>
            </div>
          </div>
        </div>

        <GoogleMap />
      </div>
    </div>
  );
};

export default Address;
