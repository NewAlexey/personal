import React from "react";

import { Header } from "src/components/app/Header";
import { Body } from "src/components/app/Body";
import { Footer } from "src/components/app/Footer";
import { IMainLayout } from "src/components/app/layouts/MainLayout/interfaces";

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
