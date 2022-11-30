import React from "react";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

import { DangerText, Text } from "src/components/library";
import { MY_STACK } from "src/shared/constants";
import {
    TextDisplayEnum,
    TextSizeEnum,
} from "src/components/library/Text/interfaces";
import * as Styled from "src/modules/HomeModule/style";

interface IHomeModule {
    homePageInfo: string;
}

export const HomePage = ({ homePageInfo }: IHomeModule): JSX.Element => {
    const sanitizedData = DOMPurify.sanitize(homePageInfo);

    return (
        <>
            <Styled.ImageContainer>
                <Image
                    alt="avatar"
                    src="/avatar.jpg"
                    width="275"
                    height="257"
                />
            </Styled.ImageContainer>
            <Styled.TextContainer>
                <DangerText
                    value={sanitizedData}
                    size={TextSizeEnum.megaText}
                    display={TextDisplayEnum.inline}
                />
            </Styled.TextContainer>
            <Styled.TextContainer>
                <Text
                    value="Technology Stack"
                    size={TextSizeEnum.hyperText}
                />
            </Styled.TextContainer>
            <Styled.TextContainer>
                <Styled.List>
                    {MY_STACK.map((item) => (
                        <Styled.ListItem key={item}>
                            <Text value={item} />
                        </Styled.ListItem>
                    ))}
                </Styled.List>
            </Styled.TextContainer>
        </>
    );
};
