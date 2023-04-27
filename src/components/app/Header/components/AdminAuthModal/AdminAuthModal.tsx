import React, { useRef } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AppAuthService } from "service/AppAuthService";
import { AppAuthModel, IAppAuthModel } from "models/AppAuthModel";
import { useToastContext } from "lib/ToastContext";
import { AppAuthForm } from "src/components/library/Form/AppAuthForm";

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

    const {
        createToast,
        createErrorToast,
    } = useToastContext();

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
            await router.push("personal");
        } catch (error) {
            createErrorToast(error);
        }
    };

    return (
        <AppAuthForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
