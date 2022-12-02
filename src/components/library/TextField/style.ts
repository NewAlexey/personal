import styled, { css } from "styled-components";
import { COLOURS } from "utils/constants";

interface IInput {
    type?: string;
}

export const Input = styled.input<IInput>`
  height: 25px;
  padding: 0 5px;

  ${({ theme }) => css`
    color: ${theme.textColor};
    background-color: ${theme.backgroundSecondary};
    border: 1px solid ${theme.textColor};
  `};

  &:focus-visible {
    border: 1px solid ${COLOURS.active};
    outline: 1px solid ${COLOURS.active};
  }

  ${({ type }) =>
        type && type === "radio" && css`
            cursor: pointer;
          `}
`;
