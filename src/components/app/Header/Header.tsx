import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Style from "src/components/app/Header/style";
import {
    AdminModalButton,
    HEADER_ROUTES,
    LinkItem,
} from "src/components/app/Header/components";
import { isActiveAdminCookie } from "src/shared/helpers";
import { useAuthContext } from "src/context";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { ThemeSwitcher } from "src/components/library/ThemeSwitcher";
import { useToastContext } from "lib/ToastContext";

interface IHeader {
    cookie?: NextApiRequestCookies;
}

export const Header = ({ cookie }: IHeader): JSX.Element => {
    const router = useRouter();
    const {
        isAuth,
        adminLogOut,
    } = useAuthContext();
    const { createToast } = useToastContext();

    const isActive = isActiveAdminCookie(cookie);

    const onLogOut = () => {
        router.push("/");
        createToast({
            type: "success",
            message: "Successful logout!",
        });
        adminLogOut();
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
                ? <AdminModalButton />
                : null}

            {!isAuth ? <ThemeSwitcher /> : null}

            {isAuth
                ? (
                    <>
                        <Style.HeaderAuthContainer>
                            <Link href="/personal">
                                <Style.LinkText
                                    isActive={router.asPath === "/personal"}
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
