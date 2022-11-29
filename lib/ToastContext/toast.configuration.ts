import {
    IToastConfiguration,
    IToastContainerConfiguration,
} from "lib/ToastContext/toast.interfaces";

export const defaultToastConfiguration: IToastConfiguration = {
    showTime: 3000,
};

export const defaultToastContainerConfiguration: IToastContainerConfiguration = {
    right: "30px",
    bottom: "30px",
    zIndex: 99999,
};
