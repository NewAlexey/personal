import React from "react";

import { IFireBaseAuthModel } from "models/FireBaseAuthModel";
import { useDrawer } from "src/components/library/Drawer";
import * as Style from "src/components/library/Form/FireBaseAuthForm/style";
import { ChevronLeft } from "src/components/library/Icons";
import { FireBaseAuthForm } from "src/components/library/Form/FireBaseAuthForm";

interface IFireBaseAuthDrawer {
    submit: (formData: IFireBaseAuthModel) => Promise<boolean>;
}

export const FireBaseAuthDrawer = ({ submit }: IFireBaseAuthDrawer) => {
    const {
        Drawer,
        openDrawer,
    } = useDrawer();

    return (
        <>
            <Style.OpenDrawerContainer onClick={openDrawer}>
                <ChevronLeft />
            </Style.OpenDrawerContainer>

            <Drawer
                heading="FireBase Authentication"
                position="right"
                render={({ handleSmoothlyClose }) => (
                    <FireBaseAuthForm
                        submit={async (formData: IFireBaseAuthModel) => {
                            const result = await submit(formData);

                            if (result) {
                                handleSmoothlyClose();
                            }
                        }}
                        onClose={handleSmoothlyClose}
                    />
                )}
            />
        </>
    );
};
