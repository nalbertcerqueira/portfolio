import Head from "next/head"

export default function PageHead() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
            <title>Nalbert Cerqueira | Desenvolvedor Web Front-end</title>
            <meta
                name="description"
                content="Desenvolvedor Front-end com experiência em React, NextJS, JavaScript, TypeScript, SASS, Tailwind CSS, NodeJS, Mongodb e APIs REST."
            />
            <meta name="copyright" content="Nalbert Cerqueira 2023" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Nalbert Cerqueira | Desenvolvedor Web Front-end" />
            <meta
                name="twitter:description"
                content="Desenvolvedor Front-end com experiência em React, NextJS, JavaScript, TypeScript, SASS, Tailwind CSS, NodeJS, Mongodb e APIs REST."
            />
            <meta name="twitter:image" content="https://nalbertdev.com/imgs/preview.webp" />
            <meta property="og:image" content="https://nalbertdev.com/imgs/preview.webp" />
            <meta property="og:image:type" content="image/webp" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="620" />
            <meta property="og:site_name" content="nalbertdev.com" />
            <meta property="og:url" content="https://nalbertdev.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Nalbert Cerqueira | Desenvolvedor Web Front-end" />
            <meta
                property="og:description"
                content="Desenvolvedor Front-end com experiência em React, NextJS, JavaScript, TypeScript, SASS, Tailwind CSS, NodeJS, Mongodb e APIs REST."
            />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="apple-touch-icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="canonical" href="https://nalbertdev.com/" />
        </Head>
    )
}
