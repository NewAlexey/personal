import { CSSProperties } from "react";

export enum TextSizeEnum {
    small = "12px",
    regular = "14px",
    large = "16px",
    mega = "18px",
    megaText = "40px",
    hyperText = "50px",
}

export enum TextWeightEnum {
    regular = "400",
    bold = "700",
}

export enum TextDisplayEnum {
    inline = "inline",
    block = "block",
    inlineBlock = "inline-block",
}

export interface ISpan {
    isActive?: boolean;
    size?: TextSizeEnum;
    weight?: TextWeightEnum;
    display?: TextDisplayEnum;
    disabled?: boolean;
}

export interface IText extends ISpan {
    value: string;
    style?: CSSProperties;
    className?: string;
}
