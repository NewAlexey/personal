import styled from "styled-components";

export const LinkItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ isActive }) => isActive && "#f26500"};

  padding: 0 10px;

  &:hover {
    color: #f26500;
  }
`;
