import React, { forwardRef } from "react";

import { Text } from "src/components/library/Text";
import * as Style from "src/components/library/TextField/style";
import { Label } from "src/components/library/Label";

interface ITextField extends React.ComponentProps<"input"> {
    labelBefore?: string;
    labelAfter?: string;
    textAreaTitle?: string;
    type?: string;
    value?: string;
    id?: string;
    checked?: boolean;
    name?: string;
    ref?: React.RefObject<HTMLInputElement>;
}

export const TextField = forwardRef(({
    textAreaTitle,
    type,
    value,
    id,
    name,
    checked = false,
    labelBefore,
    labelAfter,
    ...props
}: ITextField, ref: React.Ref<HTMLInputElement>): JSX.Element => (
    <>
        {textAreaTitle ? <Text value={textAreaTitle} /> : null}

        {labelBefore ? (
            <Label
                value={labelBefore}
                htmlFor={id}
            />
        ) : null}

        <Style.Input
            ref={ref}
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
));
