import styled, { css } from "styled-components";

import { IHeadingElement } from "src/components/library/Heading/interfaces";

export const Heading = styled.h1<IHeadingElement>`
  font-size: ${({ size }) => size};

  ${(props) => css`
    color: ${props.theme.textColor};
  `}
`;
