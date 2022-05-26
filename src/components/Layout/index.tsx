import React from "react";

import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";

interface ILayout {
  children: React.ReactElement;
}

const Layout = ({ children }: ILayout): JSX.Element => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
