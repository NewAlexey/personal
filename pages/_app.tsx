import "../styles/font.css";
import "../styles/globals.css";

import React, { useState } from "react";

import MainLayout from "src/components/app/layouts/MainLayout/MainLayout";
import { AuthContextProvider } from "src/context";
import {
    ExperimentalContextProvider,
} from "src/context/ExperimentalContext/ExperimentalContext";
import { InitialLoader } from "src/components/library";
import { ToastContextProvider } from "lib/ToastContext";
import { ThemeContextProvider } from "src/context/ThemeContext";
import { AppProps } from "next/dist/pages/_app";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";

type IAppProps = AppProps<INextPageDefaultProps>

const App = ({
    Component,
    pageProps,
}: IAppProps): JSX.Element => {
    pageProps.layoutType = pageProps.layoutType
        ? pageProps.layoutType
        : "default";

    const [showLoader, setShowLoader] = useState(true);

    return (
        <ThemeContextProvider
            appTheme={pageProps.theme
                ? pageProps.theme
                : "light"}
        >
            <ToastContextProvider>
                <AuthContextProvider cookie={pageProps.cookies}>
                    <ExperimentalContextProvider>

                        {showLoader
                            ? <InitialLoader setShowLoader={setShowLoader} />
                            : null}

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
        </ThemeContextProvider>
    );
};

export default App;
