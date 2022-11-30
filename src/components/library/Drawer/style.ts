import styled, { css } from "styled-components";

const DRAWER_WIDTH = "350px";

export const DrawerContainer = styled.div<{ isOpen: boolean, isMount: boolean, position: "left" | "right" }>`
  width: ${DRAWER_WIDTH};
  background-color: white;
  min-height: 100vh;
  padding: 55px 20px 20px;
  position: absolute;
  text-align: center;

  -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.41);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.41);

  ${({ position }) => (position === "left" ? "left: 0" : "right: 0")};

  transition: all 0.5s ease-in;

  transform: translateX(${DRAWER_WIDTH});

  ${({
        isOpen,
        isMount,
    }) => isOpen
          && isMount
          && css`
            transform: translateX(0);`
};


`;

export const CrossContainer = styled.div`
  cursor: pointer;

  position: absolute;

  right: 20px;
  top: 20px;
`;
