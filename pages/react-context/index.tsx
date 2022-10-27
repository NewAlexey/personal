import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { INextPageDefaultProps } from "utils/interfaces";
import { ContextModule } from "src/modules";

const ReactContext = (): JSX.Element => <ContextModule />;

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
