import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { Text } from "src/components/library";

import { HomePageService } from "service/HomePageService";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";
import { AuthCookieService } from "service/AuthCookieService";

const DynamicAdminPage = dynamic<{ aboutInfo: string }>(
    () => import("src/modules/AdminModule/AdminModule"),
);

interface IAdminPage extends INextPageDefaultProps {
    homePageData: {
        about: string | null;
    };
    isAuthorized: boolean;
}

const AdminPage = ({
    homePageData,
    isAuthorized,
}: IAdminPage) => {
    if (!isAuthorized) {
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
            <DynamicAdminPage aboutInfo={homePageData.about} />
        </>
    );
};

export default AdminPage;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IAdminPage>> {
    const { cookies } = context.req;

    const CookieService = new AuthCookieService();
    const isAuthorized = CookieService.isAuthorizeByCookie(cookies);
    const isShowAuthButton = CookieService.isShowAuthButton(cookies);

    console.log("cookies", cookies);
    console.log("isAuthorized", isAuthorized);
    console.log("isShowAuthButton", isShowAuthButton);

    if (!isAuthorized) {
        return {
            notFound: true,
        };
    }

    try {
        const HomePageServiceInstance = new HomePageService();
        const { about } = await HomePageServiceInstance.getHomePageData();

        return {
            props: {
                isAuthorized,
                isShowAuthButton,
                homePageData: {
                    about,
                },
            },
        };
    } catch (error) {
        return {
            props: {
                isAuthorized,
                isShowAuthButton,
                homePageData: {
                    about: null,
                },
            },
        };
    }
}
