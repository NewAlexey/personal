import React, { useState } from "react";

import { Button, Text, TextField } from "src/components/library";
import * as Style
    from "src/components/app/Header/components/AdminLoginModal/style";

export interface IAuthLoginFormData {
    login: string;
    password: string;
}

interface IAdminLoginForm {
    errorMessage: string;
    closeModal: () => void;
    submit: ({
        login,
        password,
    }: IAuthLoginFormData) => void;
}

export const AdminLoginForm = ({
    errorMessage,
    closeModal,
    submit,
}: IAdminLoginForm) => {
    const [loginData, setLoginData] = useState<IAuthLoginFormData>({
        login: "",
        password: "",
    });

    const handleChangeInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        label: keyof IAuthLoginFormData,
    ): void => {
        setLoginData({
            ...loginData,
            [label]: event.target.value,
        });
    };

    const handleSubmit = () => submit(loginData);

    return (
        <>
            <TextField
                value={loginData.login}
                label="Login"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeInput(event, "login")
                }
            />
            <TextField
                value={loginData.password}
                label="Password"
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeInput(event, "password")
                }
            />
            <Style.ButtonContainer>
                <Button
                    onClick={handleSubmit}
                    text="Send"
                />
                <Button
                    onClick={closeModal}
                    text="Close"
                />
            </Style.ButtonContainer>
            {errorMessage ? <Text value={errorMessage} /> : null}
        </>
    );
};
