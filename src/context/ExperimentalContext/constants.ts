import {
    IContextRadioList,
    IExperimentalContextValue,
} from "src/context/ExperimentalContext/interfaces";

export const radioList: IContextRadioList[] = [
    {
        id: "timeout1",
        delayValue: "500",
        text: "0.5s",
    },
    {
        id: "timeout2",
        delayValue: "1000",
        text: "1s",
    },
    {
        id: "timeout3",
        delayValue: "2000",
        text: "2s",
    },
];

export const EXPERIMENTAL_CONTEXT_INITIAL_VALUE: IExperimentalContextValue = {
    value1: "Initial First value",
    value2: "Initial Second Value",
    asyncValue: "Initial Async Value",
    selectedDelayValue: "500",
};
