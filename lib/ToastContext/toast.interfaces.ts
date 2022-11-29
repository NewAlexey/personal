import React from "react";

export interface IToastContext {
    createToast: (toastComponent: JSX.Element) => void;
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
