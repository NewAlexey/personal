import React from "react";

import { Text } from "src/components/library/Text";
import * as Style from "./style";

export type PopupType = "info" | "error" | "success";

interface IPopup {
    message: string;
    type: PopupType;
}

export const Popup = ({
    message,
    type,
}: IPopup) => (
    <Style.PopupContainer>
        <Style.PopupTypeIndicator type={type} />
        <Text value={message} />
    </Style.PopupContainer>
);
