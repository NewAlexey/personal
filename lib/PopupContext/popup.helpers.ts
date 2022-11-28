import React from "react";

import {
    IPopupContainerConfiguration,
} from "lib/PopupContext/popup.interfaces";

export function createStyleForPopupContainer(
    styles: IPopupContainerConfiguration,
): React.CSSProperties {
    const entries = Object.entries(styles);

    return entries.reduce((acc, pair) => ({
        ...acc,
        [pair[0]]: pair[1],
    }), { position: "fixed" } as React.CSSProperties);
}
