import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";

import { INextDefaultProps } from "../../utils/interfaces";
import { ContextContainer } from "../../src/containers";

const ReactContext = (): JSX.Element => (
  <>
    <Head>
      <title>Alexey Krupenia</title>
      <meta name="description" content="Alexey Krupenia example" />
    </Head>
    <ContextContainer />
  </>
);

export default ReactContext;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<INextDefaultProps>> {
  const { cookies } = context.req;

  return { props: { cookies } };
}
