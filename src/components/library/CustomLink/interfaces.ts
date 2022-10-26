export type AnchorType = "_blank" | "_self" | "_parent" | "_top";

export interface ICustomLink {
    href: string;
    children: JSX.Element;
    target?: AnchorType;
}
