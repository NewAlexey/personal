import React from "react";

import * as Style from "src/components/app/Header/style";
import { Navigation } from "src/components/app/Header/components";
import { IHeader } from "src/components/app/Header/interface";
import {
    AdminLoginButton,
} from "src/components/app/Header/components/AdminLoginButton";
import { isActiveAdminCookie } from "src/shared/helpers";

export const Header = ({ cookie }: IHeader): JSX.Element => {
    const isActive = isActiveAdminCookie(cookie);

    return (
        <Style.HeaderComponent>
            <Navigation />
            {isActive ? <AdminLoginButton cookie={cookie} /> : null}
        </Style.HeaderComponent>
    );
};
