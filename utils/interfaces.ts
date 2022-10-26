import { AppProps } from "next/dist/pages/_app";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

type LayoutType = "default";

export interface IAppProps extends AppProps<INextPageDefaultProps> {
    pageProps: INextPageDefaultProps;
}

export interface INextPageDefaultProps {
    cookies: NextApiRequestCookies;
    layoutType?: LayoutType;
}
