import React from "react";

import {
    IToastContainerConfiguration,
} from "lib/ToastContext/toast.interfaces";

export function createStyleForToastContainer(
    styles: IToastContainerConfiguration,
): React.CSSProperties {
    const entries = Object.entries(styles);

    return entries.reduce<React.CSSProperties>((acc, pair) => ({
        ...acc,
        [pair[0]]: pair[1],
    }), { position: "fixed" });
}
