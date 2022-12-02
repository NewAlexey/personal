import React from "react";

import { CustomLink, Text, TextSizeEnum } from "src/components/library";
import * as Styled from "src/components/app/Footer/style";

export const Footer = (): JSX.Element => (
    <Styled.FooterComponent>
        <CustomLink
            href="https://www.linkedin.com/in/alexey-krupenia"
            target="_blank"
        >
            <Text
                value="Alexey Krupenia, 2022"
                size={TextSizeEnum.large}
            />
        </CustomLink>
    </Styled.FooterComponent>
);
