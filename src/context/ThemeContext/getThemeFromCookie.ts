import {
    DARK_THEME,
    LIGHT_THEME,
    THEME,
    ThemeVariantsType,
} from "src/context/ThemeContext/interfaces";

export function getThemeFromCookie(cookies: Partial<{ [p: string]: string }>): ThemeVariantsType {
    const theme = cookies?.[THEME];

    return theme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
}
