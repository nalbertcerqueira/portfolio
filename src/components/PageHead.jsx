import Head from "next/head"

export default function PageHead() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            />
            <title>Portfólio | Nalbert Cerqueira - Desenvolvedor Front-end</title>
            <meta
                name="description"
                content="Desenvolvedor Web Front-end com foco em responsividade, otimizações de SEO, acessibilidade web, performance, e com experiência em React, Next.js, JavaScript, SASS, Tailwind CSS, Node.js e APIs Rest."
            />
            <meta name="copyright" content="Nalbert Cerqueira 2023" />
            <meta property="og:image" content="https://nalbertdev.com/imgs/preview.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1366" />
            <meta property="og:image:height" content="652" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://nalbertdev.com" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Portfólio | Nalbert Cerqueira - Desenvolvedor Front-end"
            />
            <meta
                property="og:description"
                content="Desenvolvedor Web Front-end com foco em responsividade, otimizações de SEO, acessibilidade web, performance, e com experiência em React, Next.js, JavaScript, SASS, Tailwind CSS, Node.js e APIs Rest."
            />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="apple-touch-icon" type="image/svg+xml" href="/icon.svg" />
            <link rel="canonical" href="https://nalbertdev.com" />
        </Head>
    )
}
