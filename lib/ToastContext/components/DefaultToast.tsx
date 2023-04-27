import React from "react";

import { Text } from "src/components/library/Text";
import * as Style from "lib/ToastContext/components/style";

export type ToastType = "info" | "error" | "success";

interface IToast {
    message: string;
    type: ToastType;
}

export const DefaultToast = ({
    message,
    type,
}: IToast) => (
    <Style.ToastContainer>
        <Style.ToastTypeIndicator type={type} />
        <Text value={message} />
    </Style.ToastContainer>
);
