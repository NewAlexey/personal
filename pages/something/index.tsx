import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import Head from "next/head";
import Container from "../../src/containers/Container";
import { IGetServerSideDefaultProps } from "../../utils/interfaces";

const Something = (): JSX.Element => (
  <>
    <Head>
      <title>Alexey Krupenia</title>
      <meta name="description" content="Alexey Krupenia something" />
    </Head>
    <Container>
      <span>Something Page</span>
    </Container>
  </>
);

export default Something;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IGetServerSideDefaultProps>> {
  const { cookies } = context.req;

  return { props: { cookie: cookies } };
}
