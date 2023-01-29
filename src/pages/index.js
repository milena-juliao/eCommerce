import Conteudo from "../componentes/Conteudo";

import Head from 'next/head';

export default function Home() {
    return(
        <>
            <Head>
                <title>E-commerce</title>
                <link rel="shortcut icon" href="./images/icontitle.png" type="image" />
            </Head>
            <Conteudo/>
        </>
    );
}