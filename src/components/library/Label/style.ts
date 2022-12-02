import styled, { css } from "styled-components";

export const LabelComponent = styled.label`
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
`;
