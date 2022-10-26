import styled, { css } from "styled-components";

import { IModalContainer } from "src/components/library/Modal/interfaces";

export const ModalBackdrop = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(97, 97, 97, 0.5);

  top: 0;
`;

export const ModalContainer = styled.div<IModalContainer>`
  width: 300px;
  padding: 25px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: white;
  margin: 0 auto;

  transform: translateY(250px);

  opacity: 0;
  transition: all 0.4s ease-in-out;

  ${({
        isMount,
        isOpen,
    }) =>
        isMount &&
          isOpen &&
          css`
            opacity: 1;
            transform: translateY(300px);
          `}
`;
