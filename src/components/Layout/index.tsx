import React from "react";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { Footer } from "./Footer";
import { Content } from "./Content";
import { Header } from "./Header";

interface ILayout {
  children: React.ReactElement;
  cookies: NextApiRequestCookies;
}

const Layout = ({ children, cookies }: ILayout): JSX.Element => (
  <>
    <Header cookie={cookies} />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
