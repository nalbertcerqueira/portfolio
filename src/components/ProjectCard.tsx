import { motion } from "framer-motion"
import Image from "next/image"
import { ReactNode } from "react"

import { ProjectBanner } from "@/types/general"
import useCustomInView from "../hooks/useCustomInView"
import { projectsVariants } from "../libs/framer-motion"
import { SlSocialGithub, VscLinkExternal } from "../libs/react-icons"
import Link from "./Link"

interface ProjectCardProps {
    name: string
    index: number
    children: ReactNode
    projectUrl: string
    isVisible: boolean
    githubUrl: string
    techList: string[]
    banner: ProjectBanner
}

//Card de projeto utilizado em Projects.jsx.
export default function ProjectCard(props: ProjectCardProps) {
    const { isInView, ref: projectRef } = useCustomInView<HTMLDivElement>({ once: true })

    function renderTechItems(techList: string[]) {
        return techList.map((tech, i) => (
            <li key={i} className="project__tech-item">
                {tech}
            </li>
        ))
    }

    return (
        <motion.div
            custom={props.index % 2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={projectsVariants.projectCard}
            ref={projectRef}
            className={`project ${props.isVisible ? "project--visible" : ""}`.trim()}
        >
            <div className="project__skew">
                <Link
                    className="project__link-banner"
                    ariaLabel={`Link para o projeto ${props.name}`}
                    href={props.projectUrl}
                >
                    <Image
                        sizes="(max-width: 920px) 100vw, 50vw"
                        aria-hidden={true}
                        className="project__banner-img"
                        src={"https:" + props.banner.url}
                        alt={props.banner.alt}
                        height={props.banner.height}
                        width={props.banner.width}
                        placeholder="blur"
                        blurDataURL={props.banner.base64Url}
                    />
                </Link>
                <div className="project__content">
                    <h3>
                        <Link className="project__link-title" href={props.projectUrl}>
                            {props.name}
                        </Link>
                    </h3>
                    <p className="project__description">{props.children}</p>
                    <ul className="project__tech-list">{renderTechItems(props.techList)}</ul>
                    <div className="project__external-links">
                        <Link
                            ariaLabel={`Link para ${props.name} no github`}
                            className="project__ext-link"
                            href={props.githubUrl}
                        >
                            <SlSocialGithub
                                aria-hidden="true"
                                focusable="false"
                                className="project__ext-icon"
                            />
                        </Link>
                        <Link
                            ariaLabel={`Link para o projeto ${props.name}`}
                            className="project__ext-link"
                            href={props.projectUrl}
                        >
                            <VscLinkExternal
                                aria-hidden="true"
                                focusable="false"
                                className="project__ext-icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
