import styled from "styled-components";

export const ThemeSwitcherContainer = styled.div`
  cursor: pointer;
  position: relative;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  border-radius: 50%;
  border: 2px solid red;
`;

export const IconContainer = styled.div<{ isActive: boolean }>`
  transform-origin: 50% 30px;
  position: absolute;
  transition: all 0.5s ease-in;

  ${({ isActive }) => (isActive
        ? "transform: rotate(0deg)"
        : "transform: rotate(180deg)")};
`;
