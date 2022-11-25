import React from "react";

export interface IAuthContext {
    isAuth: boolean;
    authLogIn: () => void;
    authLogOut: () => void;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export type IMemoizedAuthContextValue = IAuthContext
