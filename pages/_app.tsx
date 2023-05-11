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
    pageProps.layoutType = pageProps?.layoutType
        ? pageProps.layoutType
        : "default";

    return (
        <ThemeContextProvider
            appTheme={pageProps?.theme
                ? pageProps.theme
                : "light"}
            mainColour={pageProps?.mainColour ?? APP_THEME.mainColour}
        >
            <LoadingContextProvider>
                <ToastContextProvider>
                    <AuthContextProvider
                        isAuthorized={pageProps.isAuthorized ?? false}
                        isShowAuthButton={pageProps.isShowAuthButton ?? false}
                    >
                        <ExperimentalContextProvider>

                            <InitialLoader />

                            {pageProps.layoutType === "default"
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
