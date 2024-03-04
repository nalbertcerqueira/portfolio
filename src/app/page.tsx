import { contentfulClient, ContentfulCMSClient } from "@/libs/contentful-cms"

import Header from "@/components/layout/Header"
import Main from "@/components/layout/Main"
import Hero from "../components/layout/sections/Hero"
import About from "../components/layout/sections/About"
import Projects from "../components/layout/sections/Projects"
import Skills from "../components/layout/sections/Skills"
import Footer from "@/components/layout/Footer"
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton"

export const revalidate = 60

//Buscando as informações dos projetos e habilidades na contenful CMS.
async function fetchData() {
    const [projectEntries, skillEntries, cvURL] = await Promise.all([
        contentfulClient.fetchProjects(),
        contentfulClient.fetchSkills(),
        contentfulClient.getAssetUrl({ "fields.title": "cv-nalbert-cerqueira" })
    ])

    const skillsMap = ContentfulCMSClient.generateSkillsMap(skillEntries)
    const projectList = await ContentfulCMSClient.getFormattedProjectList(projectEntries)

    return { skillsMap, projectList, cvURL }
}

export default async function Home() {
    const { projectList, skillsMap, cvURL } = await fetchData()

    return (
        <>
            <Header />
            <Main>
                <Hero cvURL={cvURL || ""} />
                <About />
                <Projects projectList={projectList || []} />
                <Skills skillsMap={skillsMap || {}} />
            </Main>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}
