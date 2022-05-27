import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

import { useMount } from "../../../utils/hooks";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  render: (props: { handleSmoothlyClose: () => void }) => JSX.Element;
}

const ModalBackdrop = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(97, 97, 97, 0.5);

  top: 0;
`;

export const ModalContainer = styled.div<{ isMount: boolean; isOpen: boolean }>`
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

  ${({ isMount, isOpen }) =>
    isMount &&
    isOpen &&
    css`
      opacity: 1;
      transform: translateY(300px);
    `}
`;

/* eslint-disable */
export const Modal = ({
  isOpen,
  closeModal,
  render,
}: IModal): JSX.Element | null => {
  return isOpen
    ? ReactDOM.createPortal(
        <ModalComponent closeModal={closeModal} render={render} />,
        document.body
      )
    : null;
};

interface IModalComponent extends Omit<IModal, "isOpen"> {}

export const ModalComponent = ({
  closeModal,
  render,
}: IModalComponent): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const isMount = useMount();

  const handleSmoothlyClose = () => {
    if (!isMount) {
      return;
    }

    setIsOpen(false);
  };

  const transitionEndCloseModal = () => {
    if (isOpen) {
      return;
    }

    closeModal();
  };

  useEffect(() => setIsOpen(true), []);

  return (
    <ModalBackdrop onClick={handleSmoothlyClose}>
      <ModalContainer
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
        }}
        isMount={isMount}
        isOpen={isOpen}
        onTransitionEnd={transitionEndCloseModal}
      >
        {render({ handleSmoothlyClose })}
      </ModalContainer>
    </ModalBackdrop>
  );
};
