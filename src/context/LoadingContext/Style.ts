import styled, { css, keyframes } from "styled-components";

import { COLOURS, Z_INDEX_LEVELS } from "utils/constants";

const TRANSITION_SPEED = "0.2s";

export const LoadingBackdrop = styled.div<{ isShow: boolean }>`
  position: absolute;

  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(0 0 0 / 0);
  z-index: ${Z_INDEX_LEVELS.globalLoader};

  transition: background-color ${TRANSITION_SPEED} ease-in;

  ${({ isShow }) => isShow && css`
    background-color: rgb(0 0 0 / 25%);
  `}
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div<{ isShow: boolean }>`
  display: inline-block;
  width: 80px;
  height: 80px;

  position: absolute;
  top: calc(50vh - 40px);
  left: calc(50vw - 40px);

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${COLOURS.active};

    border-color: transparent;
    animation: ${Rotate} 1.2s linear infinite;

    transition: border ${TRANSITION_SPEED} ease-in;

    ${({ isShow }) => isShow && css`
      border-color: ${COLOURS.active} transparent ${COLOURS.active} transparent;
    `}
  }
`;
