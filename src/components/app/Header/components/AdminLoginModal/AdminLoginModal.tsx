import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AuthService } from "service/AuthService";
import { AuthModel } from "models/AuthModel";
import { OperationStatusEnum } from "service/service.interfaces";
import {
    AdminLoginForm,
    IAuthLoginFormData,
} from "src/components/app/Header/components";
import { useToastContext } from "lib/ToastContext";
import { Toast } from "src/components/library/Toast";

interface IAdminLoginModal {
    closeModal: () => void;
}

export const AdminLoginModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const AuthServiceRef = useRef(new AuthService());

    const router = useRouter();
    const {
        authLogIn,
    } = useAuthContext();

    const { createToast } = useToastContext();

    const onSubmit = async ({
        login,
        password,
    }: IAuthLoginFormData): Promise<void> => {
        const authData = new AuthModel({
            login,
            password,
        });

        const {
            message,
            status,
        } = await AuthServiceRef.current.authRequest(authData.authDataToString());

        if (status !== OperationStatusEnum.OK) {
            createToast(
                <Toast
                    message={message}
                    type="error"
                />,
            );

            return;
        }

        createToast(
            <Toast
                message={message}
                type="success"
            />,
        );

        authLogIn();
        closeModal();
        await router.push("personal");
    };

    return (
        <AdminLoginForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
