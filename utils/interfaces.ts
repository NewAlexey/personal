import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { ContextDelayValue } from "./types";

export interface INextPageDefaultProps {
    cookies: NextApiRequestCookies;
}

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
