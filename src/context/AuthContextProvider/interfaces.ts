import React from "react";

export interface IAuthContext {
    isAuth: boolean;
    changeAuthState: (state: boolean) => void;
    setAuthCookie: () => void;
}

export interface IAppContextProvider {
    children: React.ReactNode;
}

export type IMemoizedAuthValue = IAuthContext
