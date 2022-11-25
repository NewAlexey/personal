import styled from "styled-components";

import { colours } from "utils/constants";

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => isActive && colours.light.active};

  padding: 0 10px;

  &:hover {
    color: #f26500;
  }
`;
