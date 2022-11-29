import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AppAuthService } from "service/AppAuthService";
import { AppAuthModel, IAppAuthModel } from "models/AppAuthModel";
import { OperationStatusEnum } from "service/service.interfaces";
import { useToastContext } from "lib/ToastContext";
import { Toast } from "src/components/library/Toast";
import { AppAuthForm } from "src/components/library/Form/AppAuthForm";

interface IAdminLoginModal {
    closeModal: () => void;
}

export const AdminAuthModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const AuthServiceRef = useRef(new AppAuthService());

    const router = useRouter();
    const {
        authLogIn,
    } = useAuthContext();

    const { createToast } = useToastContext();

    const onSubmit = async ({
        login,
        password,
    }: IAppAuthModel): Promise<void> => {
        const authData = new AppAuthModel({
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
        <AppAuthForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
