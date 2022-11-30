import styled, { css } from "styled-components";

import { COLOURS } from "utils/constants";

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0 10px;

  ${({
        isActive,
        theme,
    }) => (isActive
        ? css`
            color: ${COLOURS.active}`
        : css`
            color: ${theme.textColor}`)};

  &:hover {
    color: #f26500;
  }

`;
