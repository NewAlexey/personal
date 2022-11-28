import React from "react";

export interface IPopupContext {
    createPopup: (popupComponent: JSX.Element) => void;
}

export interface IPopupConfiguration {
    showTime?: number;
}

export interface IPopupContainerConfiguration {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    zIndex?: number;
}

export interface IPopupContextProvider {
    children: React.ReactNode;
    configuration?: IPopupConfiguration;
    popupContainerConfiguration?: IPopupContainerConfiguration;
}
