import React from "react";

import * as Style from "./style";
import { IFormStyle } from "./style";

interface IForm extends Omit<React.ComponentProps<"form">, "ref">, IFormStyle {
    onSubmit: () => void;
}

export const Form = ({
    children,
    onSubmit,
    ...props
}: IForm) => {
    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <Style.Form
            {...props}
            orientation="vertical"
            alignment="center"
            onSubmit={submit}
        >{children}
        </Style.Form>
    );
};
