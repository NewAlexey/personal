import styled, { css } from "styled-components";

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

    &:focus-visible {
      border: 1px solid ${theme.mainColour};
      outline: 1px solid ${theme.mainColour};
    }
  `};

  ${({ type }) =>
        type && type === "radio" && css`
            cursor: pointer;
          `}
`;
