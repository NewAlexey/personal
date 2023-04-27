import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AppAuthService } from "service/AppAuthService";
import { AppAuthModel, IAppAuthModel } from "models/AppAuthModel";
import { useToastContext } from "lib/ToastContext";
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
        adminLogIn,
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
            const { message } = await AuthService.current.authLoginRequest(AuthModel);

            createToast({
                message,
                type: "success",
            });

            adminLogIn();
            closeModal();
            await router.push("personal");
        } catch (error) {
            if (errorTypeGuard(error)) {
                createToast({
                    message: error.message,
                    type: "error",
                });

                return;
            }

            createToast({
                message: "Unknown error...",
                type: "error",
            });
        }
    };

    return (
        <AppAuthForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
