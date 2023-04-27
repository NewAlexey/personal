import React from "react";

import { IFireBaseAuthModel } from "models/FireBaseAuthModel";
import { useDrawer } from "src/components/library/Drawer";
import * as Style from "src/components/library/Form/FireBaseAuthForm/style";
import { ChevronLeft } from "src/components/library/Icons";
import { FireBaseAuthForm } from "src/components/library/Form/FireBaseAuthForm";

interface IFireBaseAuthDrawer {
    submit: (formData: IFireBaseAuthModel, closeDrawer: () => void) => void;
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
                        submit={(formData: IFireBaseAuthModel) =>
                            submit(formData, handleSmoothlyClose)
                        }
                        onClose={handleSmoothlyClose}
                    />
                )}
            />
        </>
    );
};
