import "../styles/font.css";
import "../styles/globals.css";

import React, { useState } from "react";

import MainLayout from "src/components/app/layouts/MainLayout/MainLayout";
import { AuthContextProvider } from "src/context";
import {
    ExperimentalContextProvider,
} from "src/context/ExperimentalContext/ExperimentalContext";
import { InitialLoader } from "src/components/library";
import { IAppProps } from "utils/pages.interfaces";
import { PopupContextProvider } from "lib/PopupContext";

const App = ({
    Component,
    pageProps,
}: IAppProps): JSX.Element => {
    pageProps.layoutType = pageProps.layoutType
        ? pageProps.layoutType
        : "default";

    const [showLoader, setShowLoader] = useState(true);

    return (
        <PopupContextProvider>
            <AuthContextProvider>
                <ExperimentalContextProvider>

                    {showLoader
                        ? <InitialLoader setShowLoader={setShowLoader} />
                        : null}

                    {pageProps.layoutType === "default"
                        ? (
                            <MainLayout cookies={pageProps.cookies}>
                                <Component {...pageProps} />
                            </MainLayout>
                        )
                        : null}
                </ExperimentalContextProvider>
            </AuthContextProvider>
        </PopupContextProvider>
    );
};

export default App;
