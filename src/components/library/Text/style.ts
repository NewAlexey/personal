import styled, { css } from "styled-components";

import { ISpan } from "src/components/library/Text/interfaces";
import { COLOURS } from "utils/constants";

export const SpanComponent = styled.span<ISpan>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  display: ${({ display }) => display};
  padding: 5px 0;

  ${({
        isActive,
        theme,
    }) => (isActive
        ? css`
            color: ${COLOURS.active}`
        : css`
            color: ${theme.textColor}`)};
`;
