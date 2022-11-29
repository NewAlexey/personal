import React, { useState } from "react";

import { Modal } from "src/components/library";
import { AdminAuthModal } from "src/components/app/Header/components";
import * as Style from "src/components/app/Header/style";

export const AdminAuthButton = (): JSX.Element | null => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (): void => setIsOpen(true);
    const handleCloseModal = (): void => setIsOpen(false);

    return (
        <>
            <Style.LoginButton
                onClick={handleOpenModal}
                text="Hidden button"
            />
            <Modal
                isOpen={isOpen}
                closeModal={handleCloseModal}
                render={({ handleSmoothlyClose }) => (
                    <AdminAuthModal closeModal={handleSmoothlyClose} />
                )}
            />
        </>
    );
};
