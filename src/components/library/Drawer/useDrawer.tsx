import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

import { Drawer, IDrawerProps } from "src/components/library/Drawer/Drawer";

interface IUseDrawer {
    isDrawerOpen: boolean;
    closeDrawer: () => void;
    openDrawer: () => void;
    Drawer: (props: IDrawerProps) => JSX.Element | null;
}

export const useDrawer = (): IUseDrawer => {
    const [isOpen, setIsOpen] = useState(false);

    const closeDrawer = useCallback(() => setIsOpen(false), []);
    const openDrawer = useCallback(() => setIsOpen(true), []);

    const DrawerComponent = useCallback((props: IDrawerProps) => (
        isOpen
            ? ReactDOM.createPortal(
                <Drawer {...props} closeDrawer={closeDrawer} />,
                document.body,
            )
            : null
    ), [closeDrawer, isOpen]);

    return {
        isDrawerOpen: isOpen,
        closeDrawer,
        openDrawer,
        Drawer: DrawerComponent,
    };
};
