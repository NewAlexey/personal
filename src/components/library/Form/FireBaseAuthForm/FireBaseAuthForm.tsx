import React, { useRef } from "react";

import { Button, TextField } from "src/components/library";
import { IFireBaseAuthModel } from "models/FireBaseAuthModel";
import {
    useFireBaseAuthFormData,
} from "src/components/library/Form/FireBaseAuthForm";
import { Form } from "src/components/library/Form/Form";
import { useFocus } from "src/shared/hooks/useFocus";
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

    const emailTextFieldRef = useRef<HTMLInputElement>(null);

    useFocus(emailTextFieldRef);

    return (
        <Form onSubmit={onSubmit}>
            <TextField
                ref={emailTextFieldRef}
                autoComplete="email"
                textAreaTitle="email"
                placeholder="email"
                value={fireBaseAuthFormData.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFireBaseAuthFormData(event.target.value, "email")
                }
            />
            <TextField
                autoComplete="current-password"
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
                        text="Close"
                        type="button"
                        onClick={onClose}
                    />
                ) : null}

                <Button
                    text="Try Auth"
                    type="submit"
                />
            </Style.ButtonContainer>
        </Form>
    );
};
