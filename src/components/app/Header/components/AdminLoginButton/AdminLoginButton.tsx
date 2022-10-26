import React, { useState } from "react";

import { isActiveAdminCookie } from "src/shared/helpers";
import { Modal } from "src/components/library";
import {
    AdminLoginModal,
} from "src/components/app/Header/components/AdminLoginModal";
import {
    IAdminLoginButton,
} from "src/components/app/Header/components/AdminLoginButton/interfaces";
import * as Style
    from "src/components/app/Header/components/AdminLoginButton/style";

export const AdminLoginButton = ({ cookie }: IAdminLoginButton): JSX.Element | null => {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = isActiveAdminCookie(cookie);

    const handleOpenModal = (): void => setIsOpen(true);
    const handleCloseModal = (): void => setIsOpen(false);

    return isActive ? (
        <>
            <Style.LoginButton
                onClick={handleOpenModal}
                text="Hidden button"
            />
            <Modal
                isOpen={isOpen}
                closeModal={handleCloseModal}
                render={({ handleSmoothlyClose }) => (
                    <AdminLoginModal closeModal={handleSmoothlyClose} />
                )}
            />
        </>
    ) : null;
};
