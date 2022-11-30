import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import dynamic from "next/dynamic";

import MainPageService from "service/HomePageService";
import { Text } from "src/components/library";
import { useAuthContext } from "src/context";
import { IPersonalPage } from "utils/pages.interfaces";
import Head from "next/head";

const DynamicAdminPage = dynamic<{ homePageInfo: string }>(
    () => import("src/modules/AdminModule/AdminModule"),
);

const AdminPage = ({ homePageData }: IPersonalPage) => {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return (
            <>
                <Head>
                    <title>Alexey Krupenia Frontend Developer</title>
                    <meta
                        name="description"
                        content="Alexey Krupenia Frontend Developer"
                    />
                </Head>

                <div>
                    <Text
                        style={{ textAlign: "center" }}
                        value="Sorry..."
                    />
                </div>
            </>
        );
    }

    if (!homePageData.info) {
        return (
            <>
                <Head>
                    <title>Alexey Krupenia Frontend Developer</title>
                    <meta
                        name="description"
                        content="Alexey Krupenia Frontend Developer"
                    />
                </Head>

                <div>
                    <Text
                        style={{ textAlign: "center" }}
                        value="Something Wrong with FireBase"
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Admin Page</title>
                <meta
                    name="description"
                    content="Admin Page"
                />
            </Head>
            <DynamicAdminPage homePageInfo={homePageData.info} />
        </>
    );
};

export default AdminPage;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IPersonalPage>> {
    const { cookies } = context.req;
    const acCookie = cookies.ac;

    if (!acCookie) {
        return {
            props: {
                homePageData: {
                    info: null,
                },
            },
        };
    }

    const data = await MainPageService.getHomePageData();

    return {
        props: {
            homePageData: data.homePageData,
        },
    };
}
