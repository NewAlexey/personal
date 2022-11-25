import React from "react";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { Header } from "src/components/app/Header";
import { Body } from "src/components/app/Body";
import { Footer } from "src/components/app/Footer";

export interface IMainLayout {
    children: React.ReactElement;
    cookies?: NextApiRequestCookies;
}

const Layout = ({
    children,
    cookies,
}: IMainLayout): JSX.Element => (
    <>
        <Header cookie={cookies} />
        <Body>{children}</Body>
        <Footer />
    </>
);

export default Layout;
