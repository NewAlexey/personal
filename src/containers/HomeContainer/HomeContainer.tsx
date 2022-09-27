import React from "react";
import Image from "next/image";

import Container from "../Container";
import { Text } from "../../components/library";
import * as Styled from "./Styled";
import {
  COLOURS,
  MY_STACK,
  textDisplay,
  textSizes,
} from "../../../utils/constants";

export const HomeContainer = (): JSX.Element => (
  <Container>
    <Styled.ImageContainer>
      <Image src="/avatar.jpg" layout="fill" />
    </Styled.ImageContainer>
    <Styled.TextContainer>
      <Text
        value="Hi, I'm "
        size={textSizes.megaText}
        display={textDisplay.inline}
      />
      <Text
        value="Alexey"
        size={textSizes.megaText}
        display={textDisplay.inline}
        color={COLOURS.primary}
      />
      <Text
        value=", Front-End Developer with excellent soft-skills, good time management and "
        size={textSizes.megaText}
        display={textDisplay.inline}
      />
      <Text
        value="1.6 year"
        size={textSizes.megaText}
        display={textDisplay.inline}
        color={COLOURS.primary}
      />
      <Text
        value=" develop experience"
        size={textSizes.megaText}
        display={textDisplay.inline}
      />
    </Styled.TextContainer>
    <Styled.TextContainer>
      <Text
        value="Technology Stack"
        size={textSizes.hyperText}
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
  </Container>
);
