import React from "react";

import { Button, TextField } from "src/components/library";
import { IAppAuthModel } from "models/AppAuthModel";
import { useAppAuthFormData } from "src/components/library/Form/AppAuthForm";
import * as Style from "./style";

interface IAppLoginForm {
    closeModal: () => void;
    submit: ({
        login,
        password,
    }: IAppAuthModel) => void;
}

export const AppAuthForm = ({
    closeModal,
    submit,
}: IAppLoginForm) => {
    const {
        appAuthData,
        setAppAuthData,
        onSubmit,
    } = useAppAuthFormData({ submit });

    return (
        <>
            <TextField
                value={appAuthData.login}
                label="Login"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAppAuthData(event.target.value, "login")
                }
            />
            <TextField
                value={appAuthData.password}
                label="Password"
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAppAuthData(event.target.value, "password")
                }
            />
            <Style.ButtonContainer>
                <Button
                    onClick={onSubmit}
                    text="Send"
                />
                <Button
                    onClick={closeModal}
                    text="Close"
                />
            </Style.ButtonContainer>
        </>
    );
};
