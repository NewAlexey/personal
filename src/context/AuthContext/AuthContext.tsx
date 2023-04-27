import React, {
    useCallback, useEffect, useMemo, useState
} from "react";
import { useCookies } from "react-cookie";

import {
    IAuthContext,
    IAuthContextProvider,
    IMemoizedAuthContextValue,
} from "src/context/AuthContext/interfaces";

// Cookie age in seconds.
const COOKIE_MAX_AGE = 3600;

const AUTH_COOKIE_NAME = "ac";

const AUTH_COOKIE_VALID_VALUE = "1";

const AuthContext = React.createContext<undefined | IAuthContext>(undefined);

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
    const [isAuth, setIsAuth] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies([
        process.env.NEXT_PUBLIC_SUPER_LESHA ?? "heh",
        AUTH_COOKIE_NAME,
    ]);

    useEffect(() => {
        const acCookie = cookies.ac;

        if (acCookie === AUTH_COOKIE_VALID_VALUE) {
            setIsAuth(true);
        }
    }, [cookies.ac]);

    const adminLogIn = useCallback(() => {
        setCookies(AUTH_COOKIE_NAME, AUTH_COOKIE_VALID_VALUE, {
            maxAge: COOKIE_MAX_AGE,
            sameSite: "none",
            secure: true,
        });
        setIsAuth(true);
    }, [setCookies]);

    const adminLogOut = useCallback(() => {
        removeCookie(AUTH_COOKIE_NAME);
        setIsAuth(false);
    }, [removeCookie]);

    const memoizedAuthValue = useMemo((): IMemoizedAuthContextValue => ({
        isAuth,
        adminLogIn,
        adminLogOut,
    }), [adminLogIn, adminLogOut, isAuth]);

    return (
        <AuthContext.Provider value={memoizedAuthValue}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = (): IAuthContext => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw Error("useAuthContext must be used inside AuthContextProvider");
    }

    return context;
};
