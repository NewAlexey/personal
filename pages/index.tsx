import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
} from "next";
import Head from "next/head";

import MainPageService from "service/HomePageService";
import { HomePage } from "src/modules";
import { MOCK_HOME_INFO_PAGE_DATA } from "utils/constants";
import { IHomePage } from "utils/pages.interfaces";

const Home: NextPage<IHomePage> = ({ homePageData }) => (
    <>
        <Head>
            <title>Alexey Krupenia Frontend Developer</title>
            <meta
                name="description"
                content="Alexey Krupenia Frontend Developer"
            />
        </Head>
        <HomePage homePageInfo={homePageData.info ?? MOCK_HOME_INFO_PAGE_DATA} />
    </>
);

export default Home;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IHomePage>> {
    const { cookies } = context.req;

    const data = await MainPageService.getHomePageData();

    return {
        props: {
            cookies,
            homePageData: data.homePageData,
        },
    };
}
