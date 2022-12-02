export interface IThemeColours {
    whatThemeNow: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    boxShadow: string;
    textColor: string;
    disablePrimary: string;
    disableSecondary: string;
}

export type CookieThemeType = "theme";

export interface IAppTheme {
    dark: IThemeColours;
    light: IThemeColours;
}

export interface IThemeContext {
    changeTheme: () => void;
    isLightTheme: boolean;
}
