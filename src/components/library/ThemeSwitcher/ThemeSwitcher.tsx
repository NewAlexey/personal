import React from "react";

import { MoonSvg, SunSvg } from "src/components/library/Icons";
import { useThemeContext } from "src/context/ThemeContext";
import * as Style from "./style";

export const ThemeSwitcher = () => {
    const {
        changeTheme,
        isLightTheme,
    } = useThemeContext();

    return (
        <Style.ThemeSwitcherContainer
            onClick={() => changeTheme()}
        >
            <Style.IconContainer
                isActive={isLightTheme}
            >
                <SunSvg />
            </Style.IconContainer>

            <Style.IconContainer
                isActive={!isLightTheme}
            >
                <MoonSvg />
            </Style.IconContainer>
        </Style.ThemeSwitcherContainer>

    );
};
