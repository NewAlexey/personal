import React from "react";

import { ContextModule } from "src/modules";
import Head from "next/head";

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
