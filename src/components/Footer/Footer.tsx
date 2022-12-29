import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "public/light-logo.svg";
import { SocialFollows } from "../SocialFollows/SocialFollows";

const Footer = () => {
  return (
    <footer className="bg-primary bg-noise text-white text-center p-4 py-8 w-full md:p-24">
      <section className="p-4 w-full text-white gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-5 text-center md:text-left w-full">
          {/* TODO: i18 */}
          <h3 className="text-xl font-bold">CONTACT</h3>
          <div className="flex flex-col items-center md:items-start my-4">
            <div className="flex items-center space-x-1">
              {/* TODO: i18 */}
              <span>Tel:</span>
              <a href="tel:+32470702750">+32 470 70 27 50</a>
            </div>
            <div className="flex items-center space-x-1">
              {/* TODO: i18 */}
              <span>E-mail:</span>
              <a href="mailto:info@vinci-club.be">info@vinci-club.be</a>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <SocialFollows />
          </div>
        </div>

        <div className="text-center w-full my-6 md:m-0">
          {/* TODO: i18 */}
          <h3 className="text-xl font-bold uppercase">openingsuren</h3>
          <div className="flex flex-col items-center py-4 lg:p-4 rounded-full text-left">
            {/* TODO: i18 */}
            <div>Maandag - donderdag: 8u - 22u</div>
            <div>Vrijdag: 8u - 21u</div>
            <div>Weekend: 9u - 12u</div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full md:text-left lg:text-right">
          {/* TODO: i18 */}
          <h3 className="text-xl font-bold uppercase">adres</h3>
          <div className="flex flex-col my-4">
            {/* TODO: i18 */}
            <div>Cruyslei 54A</div>
            <div>2100 Antwerpen (Deurne)</div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-col md:flex-row gap-5 w-full border-t-2 border-[#FFFDFD08] py-8 col-span-full">
          <Link href="/">
            {/* TODO: i18 */}
            <span className="sr-only">Vinci Club</span>
            <Image style={{ maxWidth: "250px" }} src={logo} alt="logo" />
          </Link>
          <div className="flex items-center flex-col sm:flex-row sm:justify-center md:justify-end gap-5 mt-4 md:m-0 w-full text-sm">
            <div className="">
              {/* TODO: i18 */}
              &copy; Vinci Club
            </div>
            <Link href="/privacy">
              {/* TODO: i18 */}
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden.pdf">
              {/* TODO: i18 */}
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
