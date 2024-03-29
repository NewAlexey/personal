export const THEME = "theme";

export type ThemeVariantsType = "light" | "dark";
export const LIGHT_THEME: ThemeVariantsType = "light";
export const DARK_THEME: ThemeVariantsType = "dark";

export interface IThemeColours {
    whatThemeNow: ThemeVariantsType;
    backgroundPrimary: string;
    backgroundSecondary: string;
    boxShadow: string;
    textColor: string;
    disablePrimary: string;
    disableSecondary: string;

}

export interface IAppTheme {
    mainColour: string;
    dark: IThemeColours;
    light: IThemeColours;
}

export interface IThemeContext {
    changeTheme: () => void;
    isLightTheme: boolean;
}
