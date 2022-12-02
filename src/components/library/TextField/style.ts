import styled, { css } from "styled-components";

interface IInput {
    type?: string;
}

export const Input = styled.input<IInput>`
  height: 25px;
  padding: 0 5px;

  ${({ type }) =>
        type && type === "radio" && css`
            cursor: pointer;
          `}
`;
