export interface IThemeColours {
    whatThemeNow: string;
    background: string;
    boxShadow: string;
    textColor: string;
}

export type CookieThemeType = "theme";

export interface IAppTheme {
    dark: IThemeColours;
    light: IThemeColours;
}

export interface IThemeContext {
    changeTheme: () => void;
}
