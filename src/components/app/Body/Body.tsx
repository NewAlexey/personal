import React from "react";

import * as Style from "src/components/app/Body/style";
import { IMain } from "src/components/app/Body/interface";

export const Body = ({ children }: IMain): JSX.Element => (
    <Style.MainComponent>{children}</Style.MainComponent>
);
