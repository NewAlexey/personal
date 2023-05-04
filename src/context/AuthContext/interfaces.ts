import React from "react";

import { AppAuthModel } from "models/AppAuthModel";
import { ILoginAdminResponse } from "pages/api/super-login";
import { ILogoutAdminResponse } from "pages/api/super-logout";

export interface IAuthContext {
    isAuth: boolean;
    adminLogIn: (model: AppAuthModel) => Promise<ILoginAdminResponse>;
    adminLogOut: () => Promise<ILogoutAdminResponse>;
    isShowHiddenAuthButton: boolean;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
    isShowAuthButton: boolean;
    isAuthorized: boolean;
}

export type IMemoizedAuthContextValue = IAuthContext
