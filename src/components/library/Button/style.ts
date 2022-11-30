import styled, { css } from "styled-components";
import { COLOURS } from "utils/constants";

export const Button = styled.button<{ disabled?: boolean }>`
  cursor: pointer;

  width: fit-content;
  height: fit-content;
  padding: 0 15px;

  border: 1px solid ${COLOURS.active};
  border-radius: 10px;

  box-shadow: 0 0 20px -4px rgba(34, 60, 80, 0.2);

  &:hover {
    background: #ffd9be;
    box-shadow: 0 0 20px -4px rgba(34, 60, 80, 0.5);
  }

  &:active {
    background: ${COLOURS.active};
  }


  ${({ disabled }) =>
        disabled &&
          css`
            pointer-events: none;
            border: 1px solid black;
          `}
`;
