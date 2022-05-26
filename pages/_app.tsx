import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout cookie={pageProps}>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
