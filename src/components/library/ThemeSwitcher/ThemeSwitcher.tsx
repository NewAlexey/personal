import React from "react";

import { useThemeContext } from "src/context/ThemeContext";
import * as Style from "./style";

export const ThemeSwitcher = () => {
    const {
        changeTheme,
        isLightTheme,
    } = useThemeContext();

    return (
        <Style.ThemeSwitcherContainer
            isLightThemeActive={isLightTheme}
            onClick={changeTheme}
        >
            <Style.ThemeCloudLeft />
            <Style.ThemeCloudMiddle />
            <Style.ThemeCloudRight />

            <Style.IconContainer
                isActive={isLightTheme}
            >
                <Style.ThemeSunIcon />
            </Style.IconContainer>

            <Style.IconContainer
                isActive={!isLightTheme}
            >
                <Style.Moon />
            </Style.IconContainer>
        </Style.ThemeSwitcherContainer>

    );
};
