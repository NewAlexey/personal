import React, {
    useCallback, useEffect, useMemo, useState
} from "react";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";

import {
    CookieThemeType,
    DARK_THEME,
    IThemeColours,
    IThemeContext,
    LIGHT_THEME,
    THEME,
    ThemeVariantsType,
} from "src/context/ThemeContext/interfaces";
import { APP_THEME } from "src/context/ThemeContext/APP_THEME";

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export const ThemeContextProvider = ({
    children,
    appTheme,
}: { children: JSX.Element, appTheme: string }) => {
    const [, setCookies] = useCookies<CookieThemeType>([THEME]);
    const [theme, setTheme] = useState<IThemeColours>(
        appTheme === DARK_THEME
            ? APP_THEME.dark
            : APP_THEME.light,
    );

    useEffect(() => {
        const currentTheme: ThemeVariantsType = theme.whatThemeNow === DARK_THEME
            ? DARK_THEME
            : LIGHT_THEME;

        setCookies(THEME, currentTheme, {
            sameSite: "none",
            secure: true,
        });
    }, [setCookies, theme]);

    const changeTheme = useCallback(() => {
        setTheme((prevState) => (
            prevState.whatThemeNow === LIGHT_THEME
                ? { ...APP_THEME.dark }
                : { ...APP_THEME.light }
        ));
    }, []);

    const ThemeProviderValue = useMemo(() => ({
        changeTheme,
        isLightTheme: theme.whatThemeNow === LIGHT_THEME,
    }), [changeTheme, theme.whatThemeNow]);

    return (
        <ThemeContext.Provider value={ThemeProviderValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = React.useContext(ThemeContext);

    if (!context) {
        throw Error("useThemeContext must be used inside ThemeContextProvider");
    }

    return context;
};
