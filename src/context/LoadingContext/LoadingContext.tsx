import React, { useMemo, useState } from "react";
import { LoadingComponent } from "src/context/LoadingContext/LoadingComponent";

interface ILoadingContext {
    showLoader: () => void;
    hideLoader: () => void;
    isLoading: boolean;
}

interface ILoadingContextProvider {
    children: React.ReactNode;
}

type MemoizedLoadingContextValue = ILoadingContext;

const LoadingContext = React.createContext<ILoadingContext | undefined>(undefined);

export const useLoadingContext = (): ILoadingContext => {
    const context = React.useContext(LoadingContext);

    if (!context) {
        throw Error("useLoadingContext must be used inside LoadingContextProvider");
    }

    return context;
};

export const LoadingContextProvider = ({ children }: ILoadingContextProvider) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowLoader, setIsShowLoader] = useState(false);

    const memoizedLoadingValue = useMemo((): MemoizedLoadingContextValue => ({
        isLoading,
        hideLoader: () => setIsLoading(false),
        showLoader: () => {
            setIsLoading(true);
            setIsShowLoader(true);
        },
    }), [isLoading]);

    return (
        <LoadingContext.Provider value={memoizedLoadingValue}>
            <>
                {isShowLoader ? (
                    <LoadingComponent
                        isLoading={isLoading}
                        hideLoader={() => setIsShowLoader(false)}
                    />
                ) : null}

                {children}
            </>
        </LoadingContext.Provider>
    );
};
