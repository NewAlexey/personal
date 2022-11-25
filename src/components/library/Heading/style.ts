import styled from "styled-components";

import { IHeadingElement } from "src/components/library/Heading/interfaces";

export const Heading = styled.h1<IHeadingElement>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
`;
