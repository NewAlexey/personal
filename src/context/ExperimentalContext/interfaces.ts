import React from "react";

export type ContextDelayValue = "500" | "1000" | "2000";

export interface IContextRadioList {
    id: string;
    delayValue: ContextDelayValue;
    text: string;
}

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
