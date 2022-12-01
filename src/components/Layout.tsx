// components/layout.js

import { FC } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
