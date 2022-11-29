import React, { useEffect, useRef, useState } from "react";

import {
    Button,
    DangerText,
    Heading,
    HeadingSizeEnum,
    TextSizeEnum,
} from "src/components/library";

import HomePageService from "service/HomePageService";
import * as Style from "src/modules/AdminModule/style";
import { ColourService } from "service/ColourService";
import { SeparatorLine } from "src/components/library/SeparatorLine";
import { useToastContext } from "lib/ToastContext";
import { Toast } from "src/components/library/Toast";
import { OperationStatusEnum } from "service/service.interfaces";
import { FBAuthService } from "service/FBAuthService";
import {
    FireBaseAuthModel,
    IFireBaseAuthModel,
} from "models/FireBaseAuthModel";
import { FireBaseAuthForm } from "src/components/library/Form/FireBaseAuthForm";

interface IConfigurationAdminPanel {
    homePageInfo: string;
}

const ConfigurationAdminPanel = ({ homePageInfo }: IConfigurationAdminPanel) => {
    const ColourServiceRef = useRef(new ColourService());
    const FBAuthServiceRef = useRef(new FBAuthService());

    const [hexColour, setHexColour] = useState(ColourServiceRef.current.getHexColourFromStringBySymbol(homePageInfo));
    const [prevColour, setPrevColour] = useState(hexColour);
    const [infoData, setInfoData] = useState(homePageInfo);

    const { createToast } = useToastContext();

    useEffect(() => {
        setInfoData((prevInfoData) => ColourServiceRef.current.changeAllColoursInString(
            prevInfoData,
            prevColour,
            hexColour,
        ));
        setPrevColour(hexColour);

        // No need to run useEffect, if prevColour is changed
        // eslint-disable-next-line
    }, [hexColour]);

    const onUpdateHomepageInfo = async () => {
        const {
            message,
            status,
        } = await HomePageService.updateHomePageInfoData(infoData);

        createToast(
            <Toast
                message={message}
                type={status === OperationStatusEnum.OK ? "success" : "error"}
            />,
        );
    };

    const submitFBAuth = async (formData: IFireBaseAuthModel) => {
        const {
            status,
            message,
        } = await FBAuthServiceRef.current.fbAuthRequest(new FireBaseAuthModel({
            email: formData.email,
            password: formData.password,
        }));

        createToast(
            <Toast
                message={message}
                type={status === OperationStatusEnum.OK ? "success" : "error"}
            />,
        );
    };

    return (
        <Style.AdminPanelContainer>
            <Heading
                value="FireBase Authentication Form"
                size={HeadingSizeEnum.h1}
                as="h2"
            />

            <FireBaseAuthForm submit={submitFBAuth} />

            <SeparatorLine />

            <div>
                <DangerText
                    value={infoData}
                    size={TextSizeEnum.megaText}
                />
            </div>

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

export default ConfigurationAdminPanel;
