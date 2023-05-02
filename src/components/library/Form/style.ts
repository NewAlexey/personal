import styled, { css } from "styled-components";

type FormOrientationType = "horizontal" | "vertical";

type FormAlignmentType = "center";

export interface IFormStyle {
    alignment?: FormAlignmentType;
    orientation?: FormOrientationType;
}

export const Form = styled.form<IFormStyle>`
  display: flex;

  ${({ alignment }) => alignment === "center" && css`
    justify-content: center;
    align-items: center;
  `}

  ${({ orientation }) => orientation === "vertical" && css`
    flex-direction: column;
  `}
`;
