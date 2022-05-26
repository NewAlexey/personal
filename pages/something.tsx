import React from "react";

import Head from "next/head";
import Container from "../src/containers/Container";

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
