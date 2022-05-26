import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import Head from "next/head";
import Container from "../../src/containers/Container";

import { IGetServerSideDefaultProps } from "../../utils/interfaces";

const Example = (): JSX.Element => (
  <>
    <Head>
      <title>Alexey Krupenia</title>
      <meta name="description" content="Alexey Krupenia example" />
    </Head>
    <Container>
      <span>Example Page</span>
    </Container>
  </>
);

export default Example;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IGetServerSideDefaultProps>> {
  const { cookies } = context.req;

  return { props: { cookie: cookies } };
}
