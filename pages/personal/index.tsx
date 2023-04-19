import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { Text } from "src/components/library";
import { useAuthContext } from "src/context";

import { HomePageService } from "service/HomePageService";
import { INextPageDefaultProps } from "utils/pages.interfaces";

const DynamicAdminPage = dynamic<{ homePageInfo: string }>(
    () => import("src/modules/AdminModule/AdminModule"),
);

interface IPersonalPage2 extends INextPageDefaultProps {
    homePageData: {
        about: string | null;
    };
}

const AdminPage = ({ homePageData }: IPersonalPage2) => {
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

    if (!homePageData.about) {
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
            <DynamicAdminPage homePageInfo={homePageData.about} />
        </>
    );
};

export default AdminPage;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IPersonalPage2>> {
    const { cookies } = context.req;
    const acCookie = cookies.ac;

    if (!acCookie) {
        return {
            props: {
                theme: cookies.theme ?? "light",
                homePageData: {
                    about: null,
                },
            },
        };
    }

    try {
        const HomePageServiceInstance = new HomePageService();
        const { about } = await HomePageServiceInstance.getHomePageData();

        return {
            props: {
                homePageData: {
                    about,
                },
            },
        };
    } catch (error) {
        return {
            props: {
                homePageData: {
                    about: null,
                },
            },
        };
    }
}
