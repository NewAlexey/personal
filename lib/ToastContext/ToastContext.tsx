import React, { useCallback, useMemo, useState } from "react";

import {
    ToastComponentHOC,
} from "lib/ToastContext/components/ToastComponentHOC";
import { getUniqueNumber } from "utils/utils";
import {
    ICreateToast,
    IToastContext,
    IToastContextProvider,
    ToastErrorType,
} from "lib/ToastContext/interfaces";
import {
    defaultToastConfiguration,
    defaultToastContainerConfiguration,
} from "lib/ToastContext/configuration";
import { createStyleForToastContainer } from "lib/ToastContext/utils";
import { DefaultToast } from "lib/ToastContext/components/DefaultToast";
import { errorTypeGuard } from "utils/errorTypeGuard";

const ToastContext = React.createContext<undefined | IToastContext>(undefined);

export const ToastContextProvider = ({
    children,
    configuration = defaultToastConfiguration,
    toastContainerConfiguration = defaultToastContainerConfiguration,
}: IToastContextProvider) => {
    const { showTime } = configuration;
    const [toastList, setToastList] = useState<JSX.Element[]>([]);

    const createToast = useCallback(({
        type,
        message,
    }: ICreateToast) => {
        const id = getUniqueNumber();

        const destroyToast = () => {
            setToastList((prevWindows) =>
                prevWindows.filter((toast) => toast.key !== id));
        };

        setToastList((prevWindows) => [
            ...prevWindows,
            <ToastComponentHOC
                key={id}
                showTime={showTime || 3000}
                destroyToast={destroyToast}
                component={(
                    <DefaultToast
                        message={message}
                        type={type}
                    />
                )}
            />,
        ]);
    }, [showTime]);

    const createErrorToast = useCallback(
        (error: ToastErrorType) => {
            const type = "error";

            if (errorTypeGuard(error)) {
                createToast({
                    type,
                    message: error.message,
                });

                return;
            }

            createErrorToast({
                type,
                message: "Unknown error message...",
            });
        },
        [createToast],
    );

    const memoizedToastValues = useMemo((): IToastContext => ({
        createToast,
        createErrorToast,
    }), [createToast, createErrorToast]);

    const toastContainerStyle = useMemo(() => (
        createStyleForToastContainer(toastContainerConfiguration)
    ), [toastContainerConfiguration]);

    return (
        <ToastContext.Provider value={memoizedToastValues}>
            <>
                {children}

                <div style={toastContainerStyle}>
                    {toastList.length
                        ? toastList.map(((toast) => toast))
                        : null}
                </div>
            </>
        </ToastContext.Provider>
    );
};

export const useToastContext = (): IToastContext => {
    const context = React.useContext(ToastContext);

    if (!context) {
        throw Error("useToastContext must be used inside ToastContextProvider");
    }

    return context;
};
