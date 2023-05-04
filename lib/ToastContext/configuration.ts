import {
    IToastConfiguration,
    IToastContainerConfiguration,
} from "lib/ToastContext/interfaces";

export const defaultToastConfiguration: IToastConfiguration = {
    showTime: 3000,
};

export const defaultToastContainerConfiguration: IToastContainerConfiguration = {
    right: "30px",
    bottom: "30px",
    zIndex: 999999,
};
