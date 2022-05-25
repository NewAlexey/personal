import type { NextPage } from 'next';
import Head from 'next/head';

import Container from '../src/containers/Container';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Alexey Krupenia</title>
      <meta name="description" content="Alexey Krupenia" />
    </Head>
    <Container>
      <span>Home page</span>
    </Container>
  </>
);

export default Home;
