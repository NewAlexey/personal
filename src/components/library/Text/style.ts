import styled, { css } from "styled-components";

import { ISpan } from "src/components/library/Text/interfaces";

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
            color: ${theme.mainColour}`
        : css`
            color: ${theme.textColor}`)};

  ${({
        disabled,
        theme,
    }) => (disabled && css`
            color: ${theme.disableSecondary}`
    )};
`;
