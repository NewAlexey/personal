import React from "react";

import { AppAuthModel } from "models/AppAuthModel";
import { IVerifyAdminDataResponse } from "pages/api/super-login";

export interface IAuthContext {
    isAuth: boolean;
    adminLogIn: (model: AppAuthModel) => Promise<IVerifyAdminDataResponse>;
    adminLogOut: () => void;
    isShowHiddenAuthButton: boolean;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
    isShowAuthButton: boolean;
    isAuthorized: boolean;
}

export type IMemoizedAuthContextValue = IAuthContext
