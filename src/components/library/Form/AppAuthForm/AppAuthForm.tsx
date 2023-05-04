import React, { useRef } from "react";

import { Button, TextField } from "src/components/library";
import { IAppAuthModel } from "models/AppAuthModel";
import { useAppAuthFormData } from "src/components/library/Form/AppAuthForm";
import { Form } from "src/components/library/Form/Form";
import { useFocus } from "src/shared/hooks/useFocus";
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

    const loginTextFieldRef = useRef<HTMLInputElement>(null);

    useFocus(loginTextFieldRef);

    return (
        <Form onSubmit={onSubmit}>
            <TextField
                ref={loginTextFieldRef}
                autoComplete="username"
                value={appAuthData.login}
                textAreaTitle="Login"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAppAuthData(event.target.value, "login")
                }
            />
            <TextField
                autoComplete="current-password"
                value={appAuthData.password}
                textAreaTitle="Password"
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAppAuthData(event.target.value, "password")
                }
            />
            <Style.ButtonContainer>
                <Button
                    type="submit"
                    text="Send"
                />
                <Button
                    type="button"
                    onClick={closeModal}
                    text="Close"
                />
            </Style.ButtonContainer>
        </Form>
    );
};
