import React from "react";
import { TextField } from "src/components/library";
import { IFireBaseAuthModel } from "models/FireBaseAuthModel";
import {
    useFireBaseAuthFormData,
} from "src/components/library/Form/FireBaseAuthForm";
import * as Style from "./style";

interface IFBAuthContainer {
    submit: (formData: IFireBaseAuthModel) => void;
}

export const FireBaseAuthForm = ({ submit }: IFBAuthContainer) => {
    const {
        fireBaseAuthFormData,
        setFireBaseAuthFormData,
        onSubmit,
    } = useFireBaseAuthFormData(submit);

    return (
        <Style.FBAuthContainer>
            <TextField
                label="email"
                placeholder="email"
                value={fireBaseAuthFormData.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFireBaseAuthFormData(event.target.value, "email")
                }
            />

            <TextField
                label="password"
                placeholder="password"
                value={fireBaseAuthFormData.password}
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFireBaseAuthFormData(event.target.value, "password")
                }
            />

            <Style.FBAuthButton
                text="Try Auth"
                onClick={onSubmit}
            />

        </Style.FBAuthContainer>
    );
};
