import styled, { css } from "styled-components";

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0 10px;

  ${({
        isActive,
        theme,
    }) => (isActive
        ? css`
            color: ${theme.mainColour}`
        : css`
            color: ${theme.textColor}`)};

  &:hover {
    color: ${({ theme }) => theme.mainColour};
  }
`;
