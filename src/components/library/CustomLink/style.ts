import styled, { css } from "styled-components";
import { COLOURS } from "utils/constants";

export const Link = styled.a<{ isActive?: boolean }>`
  height: fit-content;

  text-decoration: none;
  width: fit-content;

  :visited,
  :hover,
  :active {
    color: inherit;
  }


  > * {
    ${({
        isActive,
        theme,
    }) => (isActive
        ? css`
              color: ${COLOURS.active}`
        : css`
              color: ${theme.textColor}`)};
  }
`;
