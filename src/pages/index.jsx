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
import {
    initiateClient,
    organizeProjectsData,
    organizeSkillsData
} from "../libs/contentful-cms"

//Buscando as informações dos projetos e habilidades na contenful CMS.
export async function getStaticProps() {
    const client = initiateClient()

    const [projectsEntries, skillsEntries] = await Promise.all([
        client.getEntries({
            content_type: "portfolioProject",
            order: "fields.slug"
        }),
        client.getEntries({
            content_type: "portfolioSkill"
        })
    ])

    return {
        props: {
            projects: organizeProjectsData(projectsEntries),
            skills: organizeSkillsData(skillsEntries)
        },
        revalidate: 60
    }
}

export default function Home({ projects, skills }) {
    return (
        <>
            <PageHead />
            <>
                <Header />
                <Main>
                    <Hero />
                    <About />
                    <Projects projectsList={projects || []} />
                    <Skills skillsCollection={skills || {}} />
                </Main>
                <Footer />
                <ScrollToTopButton />
            </>
        </>
    )
}
Home.propTypes = {
    projects: propTypes.array,
    skills: propTypes.object
}
