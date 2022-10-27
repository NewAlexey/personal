import React from "react";
import Image from "next/image";

import { Text } from "src/components/library";
import { COLOURS, MY_STACK } from "src/shared/constants";
import {
    TextDisplayEnum,
    TextSizeEnum,
} from "src/components/library/Text/interfaces";
import * as Styled from "src/modules/HomeModule/style";

export const HomeModule = (): JSX.Element => (
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
            <Text
                value="Hi, I'm "
                size={TextSizeEnum.megaText}
                display={TextDisplayEnum.inline}
            />
            <Text
                value="Alexey"
                size={TextSizeEnum.megaText}
                display={TextDisplayEnum.inline}
                color={COLOURS.primary}
            />
            <Text
                value=", Front-End Developer with excellent soft-skills, good time management and "
                size={TextSizeEnum.megaText}
                display={TextDisplayEnum.inline}
            />
            <Text
                value="1.6 year"
                size={TextSizeEnum.megaText}
                display={TextDisplayEnum.inline}
                color={COLOURS.primary}
            />
            <Text
                value=" develop experience"
                size={TextSizeEnum.megaText}
                display={TextDisplayEnum.inline}
            />
        </Styled.TextContainer>
        <Styled.TextContainer>
            <Text
                value="Technology Stack"
                size={TextSizeEnum.hyperText}
                color={COLOURS.primary}
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
