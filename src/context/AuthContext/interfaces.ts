import React from "react";

export interface IAuthContext {
    isAuth: boolean;
    adminLogIn: () => void;
    adminLogOut: () => void;
    isShowHiddenButton: boolean;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
    cookie: Partial<{ [key: string]: string; }> | undefined;
}

export type IMemoizedAuthContextValue = IAuthContext
