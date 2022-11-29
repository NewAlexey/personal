import React, { useEffect, useState } from "react";

import { useMount } from "src/shared/hooks";
import { IModal } from "src/components/library/Modal/interfaces";
import * as Style from "src/components/library/Modal/style";
import { Backdrop } from "src/components/library/Backdrop";

export const Modal = ({
    closeModal,
    render,
}: IModal): JSX.Element => {
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
        <Backdrop close={handleSmoothlyClose}>
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
        </Backdrop>
    );
};
