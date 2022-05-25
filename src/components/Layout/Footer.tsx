import React from 'react';

import * as Styled from './Style';
import { Anchor } from '../library';

export const Footer = (): JSX.Element => (
  <Styled.FooterComponent>
    <Anchor href="https://www.linkedin.com/in/alexey-krupenia" target="_blank">
      <Styled.FooterText>Alexey Krupenia, 2022</Styled.FooterText>
    </Anchor>
  </Styled.FooterComponent>
);
