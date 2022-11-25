import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Style from "src/components/app/Header/style";
import {
    AdminLoginButton,
    HEADER_ROUTES,
    LinkItem,
} from "src/components/app/Header/components";
import { isActiveAdminCookie } from "src/shared/helpers";
import { useAuthContext } from "src/context";
import { colours } from "utils/constants";
import { Text } from "src/components/library";
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
                ? <AdminLoginButton />
                : null}

            {isAuth
                ? (
                    <>
                        <Style.HeaderAuthContainer>
                            <Link href="/personal">
                                <Text
                                    color={router.asPath === "/personal"
                                        ? colours.light.active
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
