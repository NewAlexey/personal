import styled, { css } from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  cursor: pointer;

  width: fit-content;
  height: fit-content;
  padding: 0 15px;

  border-radius: 5px;

  ${({ theme }) => css`
    border: 2px solid ${theme.mainColour};
    background-color: ${theme.backgroundSecondary};
  `};

  &:hover {
    -webkit-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    -moz-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);

    background: ${({ theme }) => `${theme.mainColour}33`};
  }

  &:active {
    -webkit-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    -moz-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);

    background: ${({ theme }) => theme.mainColour};
  }


  ${({
        disabled,
        theme,
    }) =>
        disabled &&
          css`
            pointer-events: none;
            border-color: ${theme.disablePrimary};
          `};
`;
