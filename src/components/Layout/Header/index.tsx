import React from "react";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import * as Style from "../Style";
import { AdminButton, Navigation } from "./components";

interface IHeader {
    cookie: NextApiRequestCookies;
}

export const Header = ({ cookie }: IHeader): JSX.Element => (
    <Style.HeaderComponent>
        <Navigation />
        <AdminButton cookie={cookie} />
    </Style.HeaderComponent>
);
