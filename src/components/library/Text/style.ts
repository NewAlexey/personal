import styled from "styled-components";

import { ISpan } from "src/components/library/Text/interfaces";

export const SpanComponent = styled.span<ISpan>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  padding: 5px 0;
`;
