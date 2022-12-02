import React from "react";

import * as Style from "./style";

interface ILabel extends React.HTMLAttributes<HTMLLabelElement> {
    value: string;
    htmlFor?: string;
}

export const Label = ({
    value,
    htmlFor,
    ...props
}: ILabel) => (
    <Style.LabelComponent {...props} htmlFor={htmlFor}>{value}</Style.LabelComponent>
);
