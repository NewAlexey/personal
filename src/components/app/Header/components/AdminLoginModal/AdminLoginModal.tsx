import React, { useState } from "react";
import { useRouter } from "next/router";

import { ILoginData, ISuperData } from "src/shared/interfaces";
import { Button, Text, TextField } from "src/components/library";
import * as Style
    from "src/components/app/Header/components/AdminLoginModal/style";
import {
    IAdminLoginModal,
} from "src/components/app/Header/components/AdminLoginModal/interfaces";
import { useAuthContext } from "src/context";

export const AdminLoginModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loginData, setLoginData] = useState<ILoginData>({
        login: "",
        password: "",
    });
    const router = useRouter();
    const {
        setAuthCookie,
        changeAuthState,
    } = useAuthContext();

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

        // eslint-disable-next-line no-useless-catch
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

            if (response.status === 200) {
                setErrorMessage("");
                setAuthCookie();
                changeAuthState(true);
                router.push("personal");
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            throw error;
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
