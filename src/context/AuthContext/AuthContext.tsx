import React, {
    useCallback, useEffect, useMemo, useState
} from "react";
import { useCookies } from "react-cookie";

import {
    IAuthContext,
    IAuthContextProvider,
    IMemoizedAuthContextValue,
} from "src/context/AuthContext/interfaces";

const AuthContext = React.createContext<undefined | IAuthContext>(undefined);

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
    const [isAuth, setIsAuth] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies([
        process.env.NEXT_PUBLIC_SUPER_LESHA ?? "heh",
        "ac",
    ]);

    useEffect(() => {
        const acCookie = cookies.ac;

        if (acCookie) {
            setIsAuth(true);
        }
    }, [cookies.ac]);

    const authLogIn = useCallback(() => {
        setCookies("ac", "1", {
            maxAge: 3600,
            sameSite: "none",
            secure: true,
        });
        setIsAuth(true);
    }, [setCookies]);

    const authLogOut = useCallback(() => {
        removeCookie("ac");
        setIsAuth(false);
    }, [removeCookie]);

    const memoizedAuthValue = useMemo((): IMemoizedAuthContextValue => ({
        isAuth,
        authLogIn,
        authLogOut,
    }), [authLogIn, authLogOut, isAuth]);

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
