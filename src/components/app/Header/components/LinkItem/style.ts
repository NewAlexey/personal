import styled from "styled-components";

import { THEME_COLOURS } from "utils/constants";

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => isActive && THEME_COLOURS.light.active};

  padding: 0 10px;

  &:hover {
    color: #f26500;
  }
`;
