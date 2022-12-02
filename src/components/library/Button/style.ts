import styled, { css } from "styled-components";
import { COLOURS } from "utils/constants";

export const Button = styled.button<{ disabled?: boolean }>`
  cursor: pointer;

  width: fit-content;
  height: fit-content;
  padding: 0 15px;

  border: 2px solid ${COLOURS.active};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.backgroundSecondary};

  &:hover {
    -webkit-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    -moz-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);

    background: #f2650024;
  }

  &:active {
    -webkit-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    -moz-box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);
    box-shadow: 0 0 10px 3px rgba(34, 60, 80, 0.3);

    background: ${COLOURS.active};
  }


  ${({
        disabled,
        theme,
    }) =>
        disabled &&
          css`
            pointer-events: none;
            border-color: ${theme.disablePrimary};
          `}
`;
