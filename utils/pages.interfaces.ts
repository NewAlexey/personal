import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { AppProps } from "next/dist/pages/_app";
import { IHomePageData } from "utils/data.interfaces";

type LayoutType = "default";

export interface INextPageDefaultProps {
    cookies?: NextApiRequestCookies;
    theme?: string;
    layoutType?: LayoutType;
}

export interface IAppProps extends AppProps<INextPageDefaultProps> {
    pageProps: INextPageDefaultProps;
}

export interface IPersonalPage extends INextPageDefaultProps {
    homePageData: IHomePageData;
}
