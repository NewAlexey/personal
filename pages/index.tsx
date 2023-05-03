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

    const CookieService = new AuthCookieService();
    const isAuthorized = CookieService.isAuthorizeByCookie(cookies);
    const isShowAuthButton = CookieService.isShowAuthButton(cookies);

    try {
        const HomePageServiceInstance = new HomePageService();

        const { about } = await HomePageServiceInstance.getHomePageData();

        return {
            props: {
                isAuthorized,
                isShowAuthButton,
                theme: cookies.theme ?? "light",
                homePageData: { about },
            },
        };
    } catch (error) {
        return {
            props: {
                isAuthorized,
                isShowAuthButton,
                theme: cookies.theme ?? "light",
                homePageData: { about: MOCK_HOME_INFO_PAGE_DATA },
            },
        };
    }
}
