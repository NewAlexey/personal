import React from "react";

import { Button, TextField } from "src/components/library";
import { IFireBaseAuthModel } from "models/FireBaseAuthModel";
import {
    useFireBaseAuthFormData,
} from "src/components/library/Form/FireBaseAuthForm";
import * as Style from "./style";

interface IFireBaseAuthContainer {
    submit: (formData: IFireBaseAuthModel) => void;
    onClose?: () => void;
}

export const FireBaseAuthForm = ({
    submit,
    onClose,
}: IFireBaseAuthContainer) => {
    const {
        fireBaseAuthFormData,
        setFireBaseAuthFormData,
        onSubmit,
    } = useFireBaseAuthFormData(submit);

    return (
        <Style.AuthContainer>
            <TextField
                textAreaTitle="email"
                placeholder="email"
                value={fireBaseAuthFormData.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFireBaseAuthFormData(event.target.value, "email")
                }
            />

            <TextField
                textAreaTitle="password"
                placeholder="password"
                value={fireBaseAuthFormData.password}
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFireBaseAuthFormData(event.target.value, "password")
                }
            />

            <Style.ButtonContainer>
                {onClose ? (
                    <Button
                        onClick={onClose}
                        text="Close"
                    />
                ) : null}

                <Button
                    text="Try Auth"
                    onClick={onSubmit}
                />
            </Style.ButtonContainer>

        </Style.AuthContainer>
    );
};
