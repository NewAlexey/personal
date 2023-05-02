import React from "react";

import * as Style from "src/components/library/Button/style";
import { Text } from "src/components/library/Text";

interface IButton extends Omit<React.ComponentProps<"button">, "ref"> {
    text: string;
    disabled?: boolean;
}

export const Button = ({
    text,
    disabled,
    ...props
}: IButton) => (
    <Style.Button {...props} disabled={disabled}>
        <Text
            value={text}
            disabled={disabled}
        />
    </Style.Button>
);
