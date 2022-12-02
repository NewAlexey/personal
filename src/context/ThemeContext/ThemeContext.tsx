import React, {
    useCallback, useEffect, useMemo, useState
} from "react";

import { ThemeProvider } from "styled-components";
import {
    CookieThemeType,
    IThemeColours,
    IThemeContext,
} from "src/context/ThemeContext/theme.interfaces";
import { APP_THEME } from "src/context/ThemeContext/app.theme";
import { useCookies } from "react-cookie";

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export const ThemeContextProvider = ({
    children,
    appTheme,
}: { children: JSX.Element, appTheme: string }) => {
    const [, setCookies] = useCookies<CookieThemeType>(["theme"]);
    const [theme, setTheme] = useState<IThemeColours>(
        appTheme === "dark"
            ? APP_THEME.dark
            : APP_THEME.light,
    );

    useEffect(() => {
        const currentTheme = theme.whatThemeNow === "dark" ? "dark" : "light";

        setCookies("theme", currentTheme, {
            sameSite: "none",
            secure: true,
        });
    }, [setCookies, theme]);

    const changeTheme = useCallback(() => {
        setTheme((prevState) => (
            prevState.whatThemeNow === "light"
                ? { ...APP_THEME.dark }
                : { ...APP_THEME.light }
        ));
    }, []);

    const ThemeProviderValue = useMemo(() => ({
        changeTheme,
        isLightTheme: theme.whatThemeNow === "light",
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
