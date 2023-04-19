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
import { Toast } from "src/components/library/Toast";
import { OperationStatusEnum } from "service/service.interfaces";
import { FireBaseAuthService } from "service/FireBaseAuthService";
import {
    FireBaseAuthModel,
    IFireBaseAuthModel,
} from "models/FireBaseAuthModel";
import { FireBaseAuthDrawer } from "src/modules/AdminModule/components";

interface IAdminConfigurationPanel {
    homePageInfo: string;
}

const AdminConfigurationPanel = ({ homePageInfo }: IAdminConfigurationPanel) => {
    const ColourServiceRef = useRef(new ColourService());
    const FireBaseAuthServiceRef = useRef(new FireBaseAuthService());
    const HomePageServiceRef = useRef(new HomePageService());

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

        // No need to run useEffect, if "prevColour" is changed
        // eslint-disable-next-line
    }, [hexColour]);

    const onUpdateHomepageInfo = async () => {
        const {
            message,
            status,
        } = await HomePageServiceRef.current.updateHomePageInfoData(infoData);

        createToast(
            <Toast
                message={message}
                type={status === OperationStatusEnum.OK ? "success" : "error"}
            />,
        );
    };

    const submitFireBaseAuth = async (formData: IFireBaseAuthModel) => {
        const {
            status,
            message,
        } = await FireBaseAuthServiceRef.current.fireBaseAuthRequest(new FireBaseAuthModel({
            email: formData.email,
            password: formData.password,
        }));

        createToast(
            <Toast
                message={message}
                type={status === OperationStatusEnum.OK ? "success" : "error"}
            />,
        );

        return status === OperationStatusEnum.OK;
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
