import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

import { IModal, Modal } from "src/components/library/Modal/Modal";

interface IUseModal {
    isModalOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
    Modal: (props: IModal) => JSX.Element | null;
}

export const useModal = (): IUseModal => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = useCallback(() => setIsOpen(false), []);
    const openModal = useCallback(() => setIsOpen(true), []);

    const ModalComponent = useCallback((props: IModal) => (
        isOpen
            ? ReactDOM.createPortal(
                <Modal {...props} />,
                document.body,
            )
            : null
    ), [isOpen]);

    return {
        closeModal,
        openModal,
        Modal: ModalComponent,
        isModalOpen: isOpen,
    };
};
