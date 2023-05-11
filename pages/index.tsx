import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
} from "next";
import Head from "next/head";

import { HomePageService } from "service/HomePageService";
import { HomePage } from "src/modules";
import { MOCK_HOME_INFO_PAGE_DATA } from "utils/constants";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";
import { AuthCookieService } from "service/AuthCookieService";
import {
    getThemeFromCookie,
} from "src/context/ThemeContext/getThemeFromCookie";

interface IHomePage extends INextPageDefaultProps {
    homePageData: {
        about: string;
    };
    isAuthorized: boolean;
}

const Home: NextPage<IHomePage> = ({ homePageData }) => (
    <>
        <Head>
            <title>Alexey Krupenia Frontend Developer</title>
            <meta
                name="description"
                content="Alexey Krupenia Frontend Developer"
            />
        </Head>
        <HomePage about={homePageData.about} />
    </>
);

export default Home;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IHomePage>> {
    const { cookies } = context.req;

    const theme = getThemeFromCookie(cookies);

    const CookieService = new AuthCookieService();
    const isAuthorized = CookieService.isAuthorizeByCookie(cookies);
    const isShowAuthButton = CookieService.isShowAuthButton(cookies);

    try {
        const HomePageServiceInstance = HomePageService.getInstance();
        const { about } = await HomePageServiceInstance.getHomePageData();

        return {
            props: {
                theme,
                isAuthorized,
                isShowAuthButton,
                homePageData: { about },
            },
        };
    } catch (error) {
        return {
            props: {
                theme,
                isAuthorized,
                isShowAuthButton,
                homePageData: { about: MOCK_HOME_INFO_PAGE_DATA },
            },
        };
    }
}
