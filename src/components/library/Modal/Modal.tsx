import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

import { useMount } from "src/shared/hooks";
import {
    IModal,
    IModalComponent,
} from "src/components/library/Modal/interfaces";
import * as Style from "src/components/library/Modal/style";

export const Modal = ({
    isOpen,
    closeModal,
    render,
}: IModal): JSX.Element | null => (isOpen
    ? ReactDOM.createPortal(
        <ModalComponent
            closeModal={closeModal}
            render={render}
        />,
        document.body,
    )
    : null);

const ModalComponent = ({
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
        <Style.ModalBackdrop onClick={handleSmoothlyClose}>
            <Style.ModalContainer
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    event.stopPropagation();
                }}
                isMount={isMount}
                isOpen={isOpen}
                onTransitionEnd={transitionEndCloseModal}
            >
                {render({ handleSmoothlyClose })}
            </Style.ModalContainer>
        </Style.ModalBackdrop>
    );
};
