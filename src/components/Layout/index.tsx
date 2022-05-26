import React from "react";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";

interface ILayout {
  children: React.ReactElement;
  cookie: NextApiRequestCookies;
}

const Layout = ({ children, cookie }: ILayout): JSX.Element => (
  <>
    <Header cookie={cookie} />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
