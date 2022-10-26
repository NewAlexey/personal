import "../styles/font.css";
import "../styles/globals.css";

import { AppContextProvider } from "src/context/AppContext";
import { IAppProps } from "utils/interfaces";
import MainLayout from "src/components/app/layouts/MainLayout/MainLayout";

const App = ({
    Component,
    pageProps,
}: IAppProps): JSX.Element => {
    pageProps.layoutType = pageProps.layoutType
        ? pageProps.layoutType
        : "default";

    return (
        <AppContextProvider>
            {pageProps.layoutType === "default"
                ? (
                    <MainLayout cookies={pageProps.cookies}>
                        <Component {...pageProps} />
                    </MainLayout>
                )
                : null}
        </AppContextProvider>
    );
};

export default App;
