import styled, { css } from "styled-components";

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
              color: ${theme.mainColour}`
        : css`
              color: ${theme.textColor}`)};
  }
`;
