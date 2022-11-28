import React, { useCallback, useMemo, useState } from "react";

import { PopupComponentHOC } from "lib/PopupContext/PopupComponentHOC";
import { getUniqueNumber } from "utils/helpers";
import {
    IPopupContext,
    IPopupContextProvider,
} from "lib/PopupContext/popup.interfaces";
import {
    defaultConfiguration,
    defaultPopupContainerConfiguration,
} from "lib/PopupContext/popup.configuration";
import { createStyleForPopupContainer } from "lib/PopupContext/popup.helpers";

const PopupContext = React.createContext<undefined | IPopupContext>(undefined);

export const PopupContextProvider = ({
    children,
    configuration = defaultConfiguration,
    popupContainerConfiguration = defaultPopupContainerConfiguration,
}: IPopupContextProvider) => {
    const { showTime } = configuration;
    const [popupList, setPopupList] = useState<JSX.Element[]>([]);

    const createPopup = useCallback((popupComponent: JSX.Element) => {
        const id = getUniqueNumber();

        const destroyPopup = () => {
            setPopupList((prevWindows) =>
                prevWindows.filter((popup) => popup.key !== id));
        };

        setPopupList((prevWindows) => [
            ...prevWindows,
            <PopupComponentHOC
                key={id}
                showTime={showTime || 3000}
                destroyPopup={destroyPopup}
                component={popupComponent}
            />,
        ]);
    }, [showTime]);

    const memoizedPopupValues = useMemo((): IPopupContext => ({
        createPopup,
    }), [createPopup]);

    const popupContainerStyle = useMemo(() => (
        createStyleForPopupContainer(popupContainerConfiguration)
    ), [popupContainerConfiguration]);

    return (
        <PopupContext.Provider value={memoizedPopupValues}>
            <>
                {children}

                <div style={popupContainerStyle}>
                    {popupList.length
                        ? popupList.map(((popup) => popup))
                        : null}
                </div>
            </>
        </PopupContext.Provider>
    );
};

export const usePopupContext = (): IPopupContext => {
    const context = React.useContext(PopupContext);

    if (!context) {
        throw Error("usePopupContext must be used inside PopupContextProvider");
    }

    return context;
};
