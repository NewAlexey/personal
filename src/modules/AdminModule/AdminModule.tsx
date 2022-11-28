import { useEffect, useRef, useState } from "react";

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
import { usePopupContext } from "lib/PopupContext";
import { Popup } from "src/components/library/Popup";
import { OperationStatusEnum } from "service/service.interfaces";

interface IConfigurationAdminPanel {
    homePageInfo: string;
}

const ConfigurationAdminPanel = ({ homePageInfo }: IConfigurationAdminPanel) => {
    const ColourServiceRef = useRef(new ColourService());

    const [hexColour, setHexColour] = useState(ColourServiceRef.current.getHexColourFromStringBySymbol(homePageInfo));
    const [prevColour, setPrevColour] = useState(hexColour);
    const [infoData, setInfoData] = useState(homePageInfo);

    const { createPopup } = usePopupContext();

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

        createPopup(
            <Popup
                message={message}
                type={status === OperationStatusEnum.OK ? "success" : "error"}
            />,
        );
    };

    return (
        <Style.AdminPanelContainer>
            <Style.InformationDataContainer>
                <DangerText
                    value={infoData}
                    size={TextSizeEnum.megaText}
                />
            </Style.InformationDataContainer>

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
