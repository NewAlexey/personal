import React, { useCallback, useMemo, useState } from "react";

import {
    IAuthContext,
    IAuthContextProvider,
    IMemoizedAuthContextValue,
} from "src/context/AuthContext/interfaces";
import { AppAuthService } from "service/AppAuthService";
import { AppAuthModel } from "models/AppAuthModel";

const AuthContext = React.createContext<undefined | IAuthContext>(undefined);

export const useAuthContext = (): IAuthContext => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw Error("useAuthContext must be used inside AuthContextProvider");
    }

    return context;
};

export const AuthContextProvider = ({
    children,
    isAuthorized,
    isShowAuthButton,
}: IAuthContextProvider) => {
    const [isAuth, setIsAuth] = useState(isAuthorized);
    const [isShowHiddenAuthButton] = useState(isShowAuthButton);

    const adminLogIn = useCallback(async (model: AppAuthModel) => {
        const AuthService = new AppAuthService();
        const result = await AuthService.authLoginRequest(model);

        setIsAuth(true);

        return result;
    }, []);

    const adminLogOut = useCallback(async () => {
        const AuthService = new AppAuthService();
        const result = await AuthService.authLogoutRequest();

        setIsAuth(false);

        return result;
    }, []);

    const memoizedAuthValue = useMemo((): IMemoizedAuthContextValue => ({
        isAuth,
        adminLogIn,
        adminLogOut,
        isShowHiddenAuthButton,
    }), [adminLogIn, adminLogOut, isAuth, isShowHiddenAuthButton]);

    return (
        <AuthContext.Provider value={memoizedAuthValue}>{children}</AuthContext.Provider>
    );
};
