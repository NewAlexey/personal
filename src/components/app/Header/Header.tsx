import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Style from "src/components/app/Header/style";
import {
    AdminModalButton,
    HEADER_ROUTES,
    LinkItem,
} from "src/components/app/Header/components";
import { useAuthContext } from "src/context";
import { ThemeSwitcher } from "src/components/library/ThemeSwitcher";
import { useToastContext } from "lib/ToastContext";

export const Header = (): JSX.Element => {
    const router = useRouter();
    const {
        isAuth,
        adminLogOut,
        isShowHiddenAuthButton,
    } = useAuthContext();
    const { createToast } = useToastContext();

    const onLogOut = () => {
        createToast({
            type: "success",
            message: "Successful logout!",
        });
        adminLogOut();
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

            {isShowHiddenAuthButton && !isAuth
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
