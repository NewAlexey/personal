import styled from "styled-components";

import { Z_INDEX_LEVELS } from "utils/constants";

export const ThemeSwitcherContainer = styled.div<{ isLightThemeActive: boolean }>`
  cursor: pointer;
  position: absolute;
  right: 50px;

  -webkit-box-shadow: 0 2px 3px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 2px 3px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 2px 3px 2px rgba(34, 60, 80, 0.2);

  background-color: ${({ isLightThemeActive }) => (isLightThemeActive
        ? "#0087ff"
        : "#0f0fd0")};

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 35px;

  border-radius: 10px;
  //border: 2px solid black;
`;

export const Moon = styled.div`
  width: 35px;
  height: 35px;
  margin: 2px 0 29px 0;
  border-radius: 50%;
  box-shadow: 8px -10px 0 0 yellow;
  z-index: 50;
  position: absolute;
  transform: rotate(180deg);
  left: 0;
  top: -27px;
`;

export const IconContainer = styled.div<{ isActive: boolean }>`
  transform-origin: 50% 30px;
  position: absolute;
  transition: all 0.5s ease-in;

  ${({ isActive }) => (isActive
        ? "transform: rotate(0deg)"
        : "transform: rotate(180deg)")};
`;

const Cloud = styled.div`
  position: absolute;
  background-color: white;
  z-index: ${Z_INDEX_LEVELS.first};
  border: 1px solid #d5d5d5;
  border-radius: 50%;

  pointer-events: none;
`;

export const ThemeCloudLeft = styled(Cloud)`
  width: 40px;
  height: 40px;
  bottom: -22px;
  left: -18px;
`;

export const ThemeCloudMiddle = styled(Cloud)`
  width: 50px;
  height: 40px;
  bottom: -23px;
  right: -14px;
`;

export const ThemeCloudRight = styled(Cloud)`
  width: 50px;
  height: 40px;
  bottom: -30px;
  right: 7px;
`;

export const ThemeSunIcon = styled.div`
  width: 65px;
  height: 50px;

  position: absolute;
  top: -12px;
  left: -32px;

  border-radius: 50%;

  background-color: yellow;
`;
