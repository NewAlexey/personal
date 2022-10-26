import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { INextPageDefaultProps } from "utils/interfaces";
import { ContextContainer } from "src/containers";

const ReactContext = (): JSX.Element => <ContextContainer />;

export default ReactContext;

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<INextPageDefaultProps>> {
    const { cookies } = context.req;

    return {
        props: {
            cookies,
            layoutType: "default",
        },
    };
}
