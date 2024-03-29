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
import { AppSettingsService } from "service/AppSettingsService";
import { ColourService } from "service/ColourService";
import { APP_THEME } from "src/context/ThemeContext/APP_THEME";

interface IHomePage extends INextPageDefaultProps {
    isAuthorized: boolean;
    mainColour: string;
    homePageData: {
        about: string;
    };
}

const Home: NextPage<IHomePage> = ({
    homePageData,
    mainColour,
}) => {
    const ColourServiceInstance = new ColourService();
    const updatedAboutHomePageData = ColourServiceInstance.injectNewColour(homePageData.about, mainColour);

    return (
        <>
            <Head>
                <title>Alexey Krupenia Frontend Developer</title>
                <meta
                    name="description"
                    content="Alexey Krupenia Frontend Developer"
                />
            </Head>
            <HomePage about={updatedAboutHomePageData} />
        </>
    );
};

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

        const AppSettingsServiceInstance = AppSettingsService.getInstance();
        const { mainColour } = await AppSettingsServiceInstance.getAppSettings();

        return {
            props: {
                theme,
                mainColour,
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
                mainColour: APP_THEME.mainColour,
                homePageData: { about: MOCK_HOME_INFO_PAGE_DATA },
            },
        };
    }
}
