import {
    DARK_THEME,
    IAppTheme,
    LIGHT_THEME,
} from "src/context/ThemeContext/interfaces";

export const APP_THEME: IAppTheme = {
    mainColour: "#f26500",
    light: {
        whatThemeNow: LIGHT_THEME,
        backgroundPrimary: "white",
        backgroundSecondary: "white",
        textColor: "black",
        boxShadow: "",
        disablePrimary: "rgba(0, 0, 0, 0.1)",
        disableSecondary: "rgba(0, 0, 0, 0.3)",
    },
    dark: {
        whatThemeNow: DARK_THEME,
        backgroundPrimary: "#353535",
        backgroundSecondary: "#4d4d4d",
        textColor: "white",
        boxShadow: "",
        disablePrimary: "rgba(255, 255, 255, 0.1)",
        disableSecondary: "rgba(255, 255, 255, 0.3)",
    },
};
