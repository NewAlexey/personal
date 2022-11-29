import React from "react";
import styled from "styled-components";

interface IBackdrop {
    close?: () => void;
    children: JSX.Element;
}

export const Backdrop = ({
    close,
    children,
}: IBackdrop) => (
    <BackdropComponent onClick={close}>
        {children}
    </BackdropComponent>
);

export const BackdropComponent = styled.div`
  position: fixed;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(97, 97, 97, 0.5);

  top: 0;
`;
