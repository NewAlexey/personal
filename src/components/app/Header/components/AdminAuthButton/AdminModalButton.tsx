import React from "react";

import { AdminAuthModal } from "src/components/app/Header/components";
import * as Style from "src/components/app/Header/style";
import { useModal } from "src/components/library/Modal/useModal";

export const AdminModalButton = (): JSX.Element | null => {
    const {
        Modal,
        openModal,
        closeModal,
    } = useModal();

    return (
        <>
            <Style.LoginButton
                onClick={openModal}
                text="Hidden button"
            />
            <Modal
                closeModal={closeModal}
                render={({ handleSmoothlyClose }) => (
                    <AdminAuthModal closeModal={handleSmoothlyClose} />
                )}
            />
        </>
    );
};
