import React from "react";

import { ContextModule } from "src/modules";
import Head from "next/head";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { INextPageDefaultProps } from "utils/pages/INextPageDefaultProps";

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

    return {
        props: {
            theme: cookies.theme ?? "light",
        },
    };
}
