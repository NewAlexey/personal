import React, { useState } from "react";

import { ILoginData, ISuperData } from "utils/interfaces";
import { Button, Input, Text } from "src/components/library";
import * as Style from "./Style";

interface IAdminLoginModal {
    closeModal: () => void;
}

export const AdminLoginModal = ({
    closeModal,
}: IAdminLoginModal): JSX.Element => {
    const [error, setError] = useState("");
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
        setError("");
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
                setError(data.message);
            } else {
                setError("");
                closeModal();
            }

            console.log("data is back!!!!!!", data);
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    };

    return (
        <>
            <Input
                value={loginData.login}
                label="Login"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeInput(event, "login")
                }
            />
            <Input
                value={loginData.password}
                label="Password"
                type="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeInput(event, "password")
                }
            />
            <Style.ButtonContainer>
                <Button onClick={handleSubmit}>
                    <Text value="Send" />
                </Button>
                <Button onClick={closeModal}>
                    <Text value="Close" />
                </Button>
            </Style.ButtonContainer>
            {error ? <Text value={error} /> : null}
        </>
    );
};
