import { CSSProperties } from "react";

export interface IHeadingElement {
    size: HeadingSizeEnum;
    color?: string;
}

export enum HeadingSizeEnum {
    h1 = "28px",
    h2 = "26px",
    h3 = "24px",
    h4 = "22px",
    h5 = "20px",
    h6 = "18px",
}

export interface IHeading extends IHeadingElement {
    value: string;
    style?: CSSProperties;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
