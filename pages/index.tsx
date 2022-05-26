import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import Head from "next/head";

import { HomeContainer } from "../src/containers/HomeContainer";
import { IGetServerSideDefaultProps } from "../utils/interfaces";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Alexey Krupenia</title>
      <meta name="description" content="Alexey Krupenia" />
    </Head>
    <HomeContainer />
  </>
);

export default Home;

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IGetServerSideDefaultProps>> {
  const { cookies } = context.req;

  return { props: { cookie: cookies } };
}
