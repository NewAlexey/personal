import styled, { css } from "styled-components";

import { IInput } from "src/components/library/TextField/interfaces";

export const Input = styled.input<IInput>`
  height: 25px;
  padding: 0 5px;

  ${({ type }) =>
        type && type === "radio" && css`
            cursor: pointer;
          `}
`;
