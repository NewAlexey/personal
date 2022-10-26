import "../styles/font.css";
import "../styles/globals.css";

import { AppProps } from "next/dist/pages/_app";

import { AppContextProvider } from "src/context/AppContext";
import { INextPageDefaultProps } from "utils/interfaces";
import Layout from "../src/components/Layout";

interface IAppProps extends AppProps<INextPageDefaultProps> {
    pageProps: INextPageDefaultProps;
}

const App = (
    {
        Component,
        pageProps,
    }: IAppProps
): JSX.Element => (
    <AppContextProvider>
        <Layout cookies={pageProps.cookies}>
            <Component {...pageProps} />
        </Layout>
    </AppContextProvider>
);

export default App;
