import React from "react";

export interface IAuthContext {
    isAuth: boolean;
    changeAuthState: (state: boolean) => void;
    setAuthCookie: () => void;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export type IMemoizedAuthContextValue = IAuthContext
