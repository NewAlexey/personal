import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { AppProps } from "next/dist/pages/_app";
import { IHomePageData } from "utils/data.interfaces";

type LayoutType = "default";

export interface INextPageDefaultProps {
    cookies?: NextApiRequestCookies;
    layoutType?: LayoutType;
}

export interface IAppProps extends AppProps<INextPageDefaultProps> {
    pageProps: INextPageDefaultProps;
}

export interface IHomePage extends INextPageDefaultProps {
    homePageData: IHomePageData;
}

export interface IPersonalPage extends INextPageDefaultProps {
    homePageData: IHomePageData;
}
