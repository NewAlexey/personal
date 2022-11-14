import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
} from "next";
import Head from "next/head";

import { HomeModule } from "src/modules";
import { IHomePageProps } from "utils/interfaces";
import MainPageService from "service/HomePageService";

const Home: NextPage<IHomePageProps> = ({ homePageData }) => (
    <>
        <Head>
            <title>Alexey Krupenia Frontend Developer</title>
            <meta
                name="description"
                content="Alexey Krupenia Frontend Developer"
            />
        </Head>
        <HomeModule homePageInfo={homePageData.info} />
    </>
);

export default Home;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IHomePageProps>> {
    const { cookies } = context.req;

    const data = await MainPageService.getHomePageData();

    return {
        props: {
            cookies,
            homePageData: data.homePageData,
        },
    };
}
