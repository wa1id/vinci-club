// components/layout.js

import { FC } from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
};
