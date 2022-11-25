import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import { useAuthContext } from "src/context";
import { AuthService } from "service/AuthService";
import { AuthModel } from "models/AuthModel";
import { OperationStatusEnum } from "service/service.interfaces";
import {
    AdminLoginForm,
    IAuthLoginFormData,
} from "src/components/app/Header/components";

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

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async ({
        login,
        password,
    }: IAuthLoginFormData): Promise<void> => {
        setErrorMessage("");
        const authData = new AuthModel({
            login,
            password,
        });

        const {
            message,
            status,
        } = await AuthServiceRef.current.authRequest(authData.authDataToString());

        if (status !== OperationStatusEnum.OK) {
            setErrorMessage(message);

            return;
        }

        authLogIn();
        closeModal();
        await router.push("personal");
    };

    return (
        <AdminLoginForm
            errorMessage={errorMessage}
            closeModal={closeModal}
            submit={onSubmit}
        />
    );
};
