// components/layout.js

import Head from "next/head";
import { FC } from "react";
// import Footer from "./Footer/Footer";
// import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
