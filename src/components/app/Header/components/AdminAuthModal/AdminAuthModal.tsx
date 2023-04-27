import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AppAuthService } from "service/AppAuthService";
import { AppAuthModel, IAppAuthModel } from "models/AppAuthModel";
import { useToastContext } from "lib/ToastContext";
import { Toast } from "src/components/library/Toast";
import { AppAuthForm } from "src/components/library/Form/AppAuthForm";
import { errorTypeGuard } from "utils/errorTypeGuard";

interface IAdminLoginModal {
    closeModal: () => void;
}

export const AdminAuthModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const AuthService = useRef(new AppAuthService());
    const router = useRouter();

    const {
        authLogIn,
    } = useAuthContext();

    const { createToast } = useToastContext();

    const onSubmit = async ({
        login,
        password,
    }: IAppAuthModel): Promise<void> => {
        const AuthModel = new AppAuthModel({
            login,
            password,
        });

        try {
            await AuthService.current.authLoginRequest(AuthModel);

            createToast(
                <Toast
                    message="Authentication success!"
                    type="success"
                />,
            );

            authLogIn();
            closeModal();
            await router.push("personal");
        } catch (error) {
            if (errorTypeGuard(error)) {
                createToast(
                    <Toast
                        message={error.message}
                        type="error"
                    />,
                );
            } else {
                createToast(
                    <Toast
                        message="Unknown error"
                        type="error"
                    />,
                );
            }
        }
    };

    return (
        <AppAuthForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
