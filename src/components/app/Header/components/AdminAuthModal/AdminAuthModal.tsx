import React from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AppAuthModel, IAppAuthModel } from "models/AppAuthModel";
import { useToastContext } from "lib/ToastContext";
import { AppAuthForm } from "src/components/library/Form/AppAuthForm";
import { useLoadingContext } from "src/context/LoadingContext/LoadingContext";

interface IAdminLoginModal {
    closeModal: () => void;
}

export const AdminAuthModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const router = useRouter();

    const {
        adminLogIn,
    } = useAuthContext();

    const {
        createToast,
        createErrorToast,
    } = useToastContext();

    const {
        showLoader,
        hideLoader,
    } = useLoadingContext();

    const onSubmit = async ({
        login,
        password,
    }: IAppAuthModel): Promise<void> => {
        showLoader();

        const AuthModel = new AppAuthModel({
            login,
            password,
        });

        try {
            const { message } = await adminLogIn(AuthModel);

            createToast({
                message,
                type: "success",
            });
            await router.push("personal");
            closeModal();
        } catch (error) {
            createErrorToast(error);
        } finally {
            hideLoader();
        }
    };

    return (
        <AppAuthForm
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
