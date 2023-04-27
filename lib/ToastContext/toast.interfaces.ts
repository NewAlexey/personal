import React from "react";

import { ToastType } from "lib/ToastContext/components/DefaultToast";

export interface ICreateToast {
    message: string;
    type: ToastType;
}

export interface IToastContext {
    createToast: (toastProps: ICreateToast) => void;
}

export interface IToastConfiguration {
    showTime?: number;
}

export interface IToastContainerConfiguration {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    zIndex?: number;
}

export interface IToastContextProvider {
    children: React.ReactNode;
    configuration?: IToastConfiguration;
    toastContainerConfiguration?: IToastContainerConfiguration;
}
