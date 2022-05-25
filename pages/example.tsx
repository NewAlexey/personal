import React from 'react';

import Head from 'next/head';
import Container from '../src/containers/Container';

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
