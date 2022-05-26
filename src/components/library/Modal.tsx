import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface IModal {
  children: React.ReactElement;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(97, 97, 97, 0.5);

  top: 0;
`;

/* eslint-disable */
export const Modal = ({
  children,
  isOpen,
  closeModal,
}: IModal): JSX.Element | null =>
  isOpen
    ? ReactDOM.createPortal(
        <ModalContainer onClick={closeModal}>{children}</ModalContainer>,
        document.body
      )
    : null;
