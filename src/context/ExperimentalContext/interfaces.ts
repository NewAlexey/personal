import React from "react";

import { ContextDelayValue } from "src/shared/types";

export interface IExperimentalContext {
    experimentalContextValue: IExperimentalContextValue;
    setDelayValue: (delayValue: ContextDelayValue) => void;
    updateContextValue1: (value: string) => void;
    updateContextValue2: (value: string) => void;
    asyncUpdateContextValue: (value: string, timeout: number) => Promise<void>;
}

export interface IExperimentalContextValue {
    value1: string;
    value2: string;
    asyncValue: string;
    selectedDelayValue: ContextDelayValue;
}

export interface IExperimentalContextProvider {
    children: React.ReactNode;
}
