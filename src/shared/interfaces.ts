import { ContextDelayValue } from "src/shared/types";

export interface IHeaderRoute {
    url: string;
    title: string;
}

export interface ILoginData {
    login: string;
    password: string;
}

export interface ISuperData {
    message: string;
}

export interface IContextRadioList {
    id: string;
    delayValue: ContextDelayValue;
    text: string;
}
