import React from "react";

import { CustomLink } from "src/components/library";
import * as Styled from "src/components/app/Footer/style";

export const Footer = (): JSX.Element => (
    <Styled.FooterComponent>
        <CustomLink
            href="https://www.linkedin.com/in/alexey-krupenia"
            target="_blank"
        >
            <Styled.FooterText>Alexey Krupenia, 2022</Styled.FooterText>
        </CustomLink>
    </Styled.FooterComponent>
);
