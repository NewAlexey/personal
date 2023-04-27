import React from "react";

export interface IAuthContext {
    isAuth: boolean;
    adminLogIn: () => void;
    adminLogOut: () => void;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export type IMemoizedAuthContextValue = IAuthContext
