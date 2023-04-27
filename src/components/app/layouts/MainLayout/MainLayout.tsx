import React from "react";

import { Header } from "src/components/app/Header";
import { Body } from "src/components/app/Body";
import { Footer } from "src/components/app/Footer";

export interface IMainLayout {
    children: React.ReactElement;
}

const Layout = ({
    children,
}: IMainLayout): JSX.Element => (
    <>
        <Header />
        <Body>{children}</Body>
        <Footer />
    </>
);

export default Layout;
