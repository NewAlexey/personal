import React from "react";

import { Text } from "src/components/library/Text";
import * as Style from "src/components/library/TextField/style";
import { Label } from "src/components/library/Label";

interface ITextField extends React.HTMLAttributes<HTMLInputElement> {
    labelBefore?: string;
    labelAfter?: string;
    textAreaTitle?: string;
    type?: string;
    value?: string;
    id?: string;
    checked?: boolean;
    name?: string;
}

export const TextField = ({
    textAreaTitle,
    type,
    value,
    id,
    name,
    checked = false,
    labelBefore,
    labelAfter,
    ...props
}: ITextField): JSX.Element => (
    <>
        {textAreaTitle ? <Text value={textAreaTitle} /> : null}

        {labelBefore ? (
            <Label
                value={labelBefore}
                htmlFor={id}
            />
        ) : null}

        <Style.Input
            type={type}
            value={value}
            checked={checked}
            id={id}
            name={name}
            {...props}
        />

        {labelAfter ? (
            <Label
                value={labelAfter}
                htmlFor={id}
            />
        ) : null}
    </>
);
