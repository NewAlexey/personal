import "../styles/font.css";
import "../styles/globals.css";

import React from "react";
import { AppProps } from "next/dist/pages/_app";

import MainLayout from "src/components/app/layouts/MainLayout/MainLayout";
import { AuthContextProvider } from "src/context";
import {
    ExperimentalContextProvider,
} from "src/context/ExperimentalContext/ExperimentalContext";
import { InitialLoader } from "src/components/library";
import { ToastContextProvider } from "lib/ToastContext";
import { ThemeContextProvider } from "src/context/ThemeContext";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";
import {
    LoadingContextProvider,
} from "src/context/LoadingContext/LoadingContext";
import { APP_THEME } from "src/context/ThemeContext/APP_THEME";

type AppPropsType = AppProps<INextPageDefaultProps>

const App = ({
    Component,
    pageProps,
}: AppPropsType): JSX.Element => {
    const appTheme = pageProps?.theme ?? "light";
    const layout = pageProps?.layoutType ?? "default";
    const isAuthorized = pageProps.isAuthorized ?? false;
    const isShowAuthButton = pageProps.isShowAuthButton ?? false;
    const mainColour = pageProps?.mainColour ?? APP_THEME.mainColour;

    return (
        <ThemeContextProvider
            appTheme={appTheme}
            mainColour={mainColour}
        >
            <LoadingContextProvider>
                <ToastContextProvider>
                    <AuthContextProvider
                        isAuthorized={isAuthorized}
                        isShowAuthButton={isShowAuthButton}
                    >
                        <ExperimentalContextProvider>

                            <InitialLoader appTheme={appTheme} />

                            {layout === "default"
                                ? (
                                    <MainLayout>
                                        <Component {...pageProps} />
                                    </MainLayout>
                                )
                                : null}
                        </ExperimentalContextProvider>
                    </AuthContextProvider>
                </ToastContextProvider>
            </LoadingContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
