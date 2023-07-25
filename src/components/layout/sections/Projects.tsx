import { motion } from "framer-motion"

import ProjectCard from "@/components/ProjectCard"
import useCustomInView from "@/hooks/useCustomInView"
import useToggleProjects from "@/hooks/useToggleProjects"
import { projectsVariants } from "@/libs/framer-motion"
import { MdOutlineKeyboardArrowDown } from "@/libs/react-icons"
import { Project } from "@/types/general"

interface ProjectsProps {
    projectList: Project[]
}

export default function Projects(props: ProjectsProps) {
    const { moreProjects, toggleMoreProjects } = useToggleProjects()
    const { isInView, ref: projectsRef } = useCustomInView({ once: true, amount: 0.1 })

    const buttonIconClassName: string[] = [
        "btn--show-more__icon",
        `${moreProjects === "open" ? "rotate-180" : ""}`
    ]

    function renderProjectsCards() {
        const end = moreProjects === "open" ? props.projectList.length : 4
        return props.projectList.map((project, index) => (
            <ProjectCard
                isVisible={index < end}
                key={project.id}
                index={index + 1}
                name={project.name}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                banner={project.banner}
                techList={project.techList}
            >
                {project.description}
            </ProjectCard>
        ))
    }

    return (
        <motion.section
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={projectsVariants.container}
            ref={projectsRef}
            id="projects"
            className="projects"
        >
            <div className="projects__inner-container">
                <div className="projects__title-box">
                    <motion.h2 variants={projectsVariants.title} className="projects__title">
                        Projetos
                    </motion.h2>
                    <motion.span variants={projectsVariants.titleLine} className="projects__title-line" />
                </div>
                <motion.div variants={projectsVariants.cardsWrapper} className="projects__cards-wrapper">
                    {renderProjectsCards()}
                </motion.div>
                <motion.button
                    variants={projectsVariants.toggleButton}
                    onClick={toggleMoreProjects}
                    type="button"
                    className="btn btn--show-more projects__btn"
                    aria-label={moreProjects === "open" ? "Exibir mais projetos" : "Exibir menos projetos"}
                >
                    <span className="btn--show-more__content">
                        {moreProjects === "open" ? "Recolher" : "Ver Mais"}
                        <MdOutlineKeyboardArrowDown
                            aria-hidden="true"
                            focusable="false"
                            className={buttonIconClassName.join(" ").trim()}
                        />
                    </span>
                </motion.button>
            </div>
        </motion.section>
    )
}
