import React, { useCallback, useMemo, useState } from "react";

import {
    ContextDelayValue,
    IExperimentalContext,
    IExperimentalContextProvider,
    IExperimentalContextValue,
} from "src/context/ExperimentalContext/interfaces";
import {
    EXPERIMENTAL_CONTEXT_INITIAL_VALUE,
} from "src/context/ExperimentalContext/constants";

const ExperimentalContext = React.createContext({} as IExperimentalContext);

export const ExperimentalContextProvider = ({ children }: IExperimentalContextProvider) => {
    const [experimentalContextValue, setExperimentalContextValue] =
        useState<IExperimentalContextValue>(EXPERIMENTAL_CONTEXT_INITIAL_VALUE);

    const setDelayValue = useCallback(
        (value: ContextDelayValue) =>
            setExperimentalContextValue((prevState) => ({
                ...prevState,
                selectedDelayValue: value,
            })),
        [],
    );

    const updateContextValue1 = useCallback(
        (value: string) =>
            setExperimentalContextValue((prevState) => ({
                ...prevState,
                value1: value,
            })),
        [],
    );

    const updateContextValue2 = useCallback(
        (value: string) =>
            setExperimentalContextValue((prevState) => ({
                ...prevState,
                value2: value,
            })),
        [],
    );

    const asyncUpdateContextValue = useCallback(async (value: string, timeout: number) =>
        new Promise<void>((resolve) => {
            setTimeout(() => {
                setExperimentalContextValue((prevState) => ({
                    ...prevState,
                    asyncValue: value,
                }));

                resolve();
            }, timeout);
        }), []);

    const memoizedValue = useMemo(
        (): IExperimentalContext => ({
            experimentalContextValue,
            setDelayValue,
            updateContextValue1,
            updateContextValue2,
            asyncUpdateContextValue,
        }),
        [
            asyncUpdateContextValue,
            experimentalContextValue,
            setDelayValue,
            updateContextValue1,
            updateContextValue2,
        ],
    );

    return (
        <ExperimentalContext.Provider value={memoizedValue}>{children}</ExperimentalContext.Provider>
    );
};

export const useExperimentalContextProvider = (): IExperimentalContext =>
    React.useContext(ExperimentalContext);
