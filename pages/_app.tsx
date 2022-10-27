import "../styles/font.css";
import "../styles/globals.css";

import { IAppProps } from "utils/interfaces";
import MainLayout from "src/components/app/layouts/MainLayout/MainLayout";
import { AuthContextProvider } from "src/context";
import {
    ExperimentalContextProvider,
} from "src/context/ExperimentalContext/ExperimentalContext";

const App = ({
    Component,
    pageProps,
}: IAppProps): JSX.Element => {
    pageProps.layoutType = pageProps.layoutType
        ? pageProps.layoutType
        : "default";

    return (
        <AuthContextProvider>
            <ExperimentalContextProvider>
                {pageProps.layoutType === "default"
                    ? (
                        <MainLayout cookies={pageProps.cookies}>
                            <Component {...pageProps} />
                        </MainLayout>
                    )
                    : null}
            </ExperimentalContextProvider>
        </AuthContextProvider>
    );
};

export default App;
