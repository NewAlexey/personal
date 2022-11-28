import {
    IPopupConfiguration,
    IPopupContainerConfiguration,
} from "lib/PopupContext/popup.interfaces";

export const defaultConfiguration: IPopupConfiguration = {
    showTime: 3000,
};

export const defaultPopupContainerConfiguration: IPopupContainerConfiguration = {
    right: "30px",
    bottom: "30px",
    zIndex: 99999,
};
