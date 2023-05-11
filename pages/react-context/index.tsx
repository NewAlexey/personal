import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { ContextModule } from "src/modules";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";
import {
    getThemeFromCookie,
} from "src/context/ThemeContext/getThemeFromCookie";
import { AppSettingsService } from "service/AppSettingsService";

const ReactContext = (): JSX.Element => (
    <>
        <Head>
            <title>Alexey Krupenia Frontend Developer</title>
            <meta
                name="description"
                content="Alexey Krupenia Frontend Developer"
            />
        </Head>
        <ContextModule />
    </>
);

export default ReactContext;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<INextPageDefaultProps>> {
    const { cookies } = context.req;

    const theme = getThemeFromCookie(cookies);

    try {
        const AppSettingsServiceInstance = AppSettingsService.getInstance();
        const { mainColour } = await AppSettingsServiceInstance.getAppSettings();

        return {
            props: {
                theme,
                mainColour,
            },
        };
    } catch (error) {
        return {
            props: {
                theme,
            },
        };
    }
}
