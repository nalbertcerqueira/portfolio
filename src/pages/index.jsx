import propTypes from "prop-types"

import PageHead from "@/src/components/PageHead"
import ScrollToTopButton from "@/src/components/buttons/ScrollToTopButton"
import Footer from "@/src/components/layout/Footer"
import Header from "@/src/components/layout/Header"
import Main from "@/src/components/layout/Main"
import About from "../components/layout/sections/About"
import Hero from "../components/layout/sections/Hero"
import Projects from "../components/layout/sections/Projects"
import Skills from "../components/layout/sections/Skills"

import { getFormattedData, initiateClient } from "../libs/contentful-cms"

//Buscando as informações dos projetos na contenful CMS.
export async function getStaticProps() {
    const contentType = process.env.CMS_CONTENT_TYPE
    const client = initiateClient()

    return client
        .getEntries({
            content_type: contentType,
            order: "fields.slug"
        })
        .then((entries) => {
            if (entries.errors) {
                throw new Error(entries.errors)
            }
            const projects = getFormattedData(entries)
            return { props: { projects }, revalidate: 60 }
        })
}

export default function Home({ projects }) {
    return (
        <>
            <PageHead />
            <>
                <Header />
                <Main>
                    <Hero />
                    <About />
                    <Projects projectsList={projects || []} />
                    <Skills />
                </Main>
                <Footer />
                <ScrollToTopButton />
            </>
        </>
    )
}
Home.propTypes = {
    projects: propTypes.array
}
