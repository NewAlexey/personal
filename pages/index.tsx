import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
} from "next";
import Head from "next/head";

import { HomeContainer } from "src/containers";
import { INextPageDefaultProps } from "utils/interfaces";

const Home: NextPage = () => (
    <>
        <Head>
            <title>Alexey Krupenia Frontend Developer</title>
            <meta
                name="description"
                content="Alexey Krupenia Frontend Developer"
            />
        </Head>
        <HomeContainer />
    </>
);

export default Home;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<INextPageDefaultProps>> {
    const { cookies } = context.req;

    return { props: { cookies } };
}
