import React, { useState } from "react";

import { ILoginData, ISuperData } from "src/shared/interfaces";
import { Button, Text, TextField } from "src/components/library";
import * as Style
    from "src/components/app/Header/components/AdminLoginModal/style";
import {
    IAdminLoginModal,
} from "src/components/app/Header/components/AdminLoginModal/interfaces";

export const AdminLoginModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loginData, setLoginData] = useState<ILoginData>({
        login: "",
        password: "",
    });

    const handleChangeInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        label: keyof ILoginData,
    ): void => {
        setLoginData({
            ...loginData,
            [label]: event.target.value,
        });
    };

    const handleSubmit = async (): Promise<void> => {
        setErrorMessage("");
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}api/super-login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                },
            );

            const data = (await response.json()) as ISuperData;

            if (response.status !== 200) {
                setErrorMessage(data.message);
            } else {
                setErrorMessage("");
                closeModal();
            }

            console.log("data is back!!!!!!", data);
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

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
