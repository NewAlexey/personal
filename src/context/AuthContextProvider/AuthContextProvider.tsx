import React, {
    useCallback, useEffect, useMemo, useState
} from "react";
import { useCookies } from "react-cookie";

import {
    IAppContextProvider,
    IAuthContext,
    IMemoizedAuthValue,
} from "src/context/AuthContextProvider/interfaces";

const AuthContext = React.createContext({ isAuth: false } as IAuthContext);

export const AuthContextProvider = ({ children }: IAppContextProvider) => {
    const [isAuth, setIsAuth] = useState(false);
    const [cookies, setCookies] = useCookies([
        process.env.NEXT_PUBLIC_SUPER_LESHA ?? "heh",
        "ac",
    ]);

    useEffect(() => {
        const acCookie = cookies.ac;

        if (acCookie) {
            setIsAuth(true);
        }
    });

    const changeAuthState = useCallback((state: boolean) => {
        setIsAuth(state);
    }, []);

    const setAuthCookie = useCallback(() => {
        setCookies("ac", "1", { maxAge: 3600 });
    }, [setCookies]);

    const memoizedAuthValue = useMemo((): IMemoizedAuthValue => ({
        isAuth,
        changeAuthState,
        setAuthCookie,
    }), [changeAuthState, isAuth, setAuthCookie]);

    return (
        <AuthContext.Provider value={memoizedAuthValue}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = (): IAuthContext =>
    React.useContext(AuthContext);
