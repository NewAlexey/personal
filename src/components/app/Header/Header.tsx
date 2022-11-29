import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Style from "src/components/app/Header/style";
import {
    AdminAuthButton,
    HEADER_ROUTES,
    LinkItem,
} from "src/components/app/Header/components";
import { isActiveAdminCookie } from "src/shared/helpers";
import { useAuthContext } from "src/context";
import { THEME_COLOURS } from "utils/constants";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

interface IHeader {
    cookie?: NextApiRequestCookies;
}

export const Header = ({ cookie }: IHeader): JSX.Element => {
    const isActive = isActiveAdminCookie(cookie);
    const {
        isAuth,
        authLogOut,
    } = useAuthContext();

    const router = useRouter();

    const onLogOut = () => {
        authLogOut();
        router.push("/");
    };

    return (
        <Style.HeaderComponent>
            <Style.SiteNavigation>
                {HEADER_ROUTES.map(({
                    url,
                    title,
                }) => (
                    <LinkItem
                        key={url}
                        url={url}
                        title={title}
                    />
                ))}
            </Style.SiteNavigation>

            {isActive && !isAuth
                ? <AdminAuthButton />
                : null}

            {isAuth
                ? (
                    <>
                        <Style.HeaderAuthContainer>
                            <Link href="/personal">
                                <Style.LinkText
                                    color={router.asPath === "/personal"
                                        ? THEME_COLOURS.light.active
                                        : "black"}
                                    value="Admin Page"
                                />
                            </Link>
                        </Style.HeaderAuthContainer>

                        <Style.LoginButton
                            onClick={onLogOut}
                            text="Logout"
                        />
                    </>
                )
                : null}
        </Style.HeaderComponent>
    );
};
