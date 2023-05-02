import React, { useEffect, useRef, useState } from "react";

import {
    Button,
    DangerText,
    Heading,
    HeadingSizeEnum,
    TextSizeEnum,
} from "src/components/library";
import { HomePageService } from "service/HomePageService";
import * as Style from "src/modules/AdminModule/style";
import { ColourService } from "service/ColourService";
import { SeparatorLine } from "src/components/library/SeparatorLine";
import { useToastContext } from "lib/ToastContext";
import {
    FireBaseAuthModel,
    IFireBaseAuthModel,
} from "models/FireBaseAuthModel";
import { FireBaseAuthDrawer } from "src/modules/AdminModule/components";
import { FireBaseApi } from "integrations/FireBaseApi";

interface IAdminConfigurationPanel {
    aboutInfo: string;
}

const AdminConfigurationPanel = ({ aboutInfo }: IAdminConfigurationPanel) => {
    const ColourServiceRef = useRef(new ColourService());
    const FireBaseAuthServiceRef = useRef(FireBaseApi.getInstance());
    const HomePageServiceRef = useRef(new HomePageService());

    const [hexColour, setHexColour] = useState(ColourServiceRef.current.getHexColourFromStringBySymbol(aboutInfo));
    const [prevColour, setPrevColour] = useState(hexColour);
    const [infoData, setInfoData] = useState(aboutInfo);

    const {
        createToast,
        createErrorToast,
    } = useToastContext();

    useEffect(() => {
        setInfoData((prevInfoData) => ColourServiceRef.current.changeAllColoursInString(
            prevInfoData,
            prevColour,
            hexColour,
        ));
        setPrevColour(hexColour);

        // No need to run useEffect, if "prevColour" is changed
        // eslint-disable-next-line
    }, [hexColour]);

    const onUpdateHomepageInfo = async () => {
        try {
            const {
                message,
            } = await HomePageServiceRef.current.updateHomePageInfoData(infoData);

            createToast({
                message,
                type: "success",
            });
        } catch (error) {
            createErrorToast(error);
        }
    };

    const submitFireBaseAuth = async (formData: IFireBaseAuthModel, closeDrawer: () => void) => {
        const fireBaseAuthModel = new FireBaseAuthModel({
            email: formData.email,
            password: formData.password,
        });

        try {
            const {
                message,
            } = await FireBaseAuthServiceRef.current.authInFireBase(fireBaseAuthModel);

            createToast({
                message,
                type: "success",
            });

            closeDrawer();
        } catch (error) {
            createErrorToast(error);
        }
    };

    return (
        <Style.AdminPanelContainer>
            <FireBaseAuthDrawer submit={submitFireBaseAuth} />

            <DangerText
                value={infoData}
                size={TextSizeEnum.megaText}
            />

            <SeparatorLine />

            <Heading
                value="Configurations"
                size={HeadingSizeEnum.h1}
                as="h2"
            />
            <Style.ConfigurationToolsContainer>
                <Style.CustomTextArea
                    value={infoData}
                    onChange={(event) => setInfoData(event.target.value)}
                />
                <input
                    type="color"
                    value={hexColour}
                    onChange={(event) => setHexColour(event.target.value)}
                />
            </Style.ConfigurationToolsContainer>

            <Style.ButtonContainer>
                <Button
                    text="Update Homepage Info"
                    onClick={onUpdateHomepageInfo}
                />
            </Style.ButtonContainer>
        </Style.AdminPanelContainer>
    );
};

export default AdminConfigurationPanel;
