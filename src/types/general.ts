import { Variants } from "framer-motion"

export interface CustomVariants {
    [key: string]: Variants
}

export interface ProjectBanner {
    url: string
    base64Url: string
    alt: string
    height: number
    width: number
}

export interface Project {
    name: string
    id: string
    slug?: number
    description: string
    projectUrl: string
    githubUrl: string
    techList: string[]
    banner: ProjectBanner
}

export interface Skill {
    name: string
    description: string
}

export interface SkillsMap {
    [key: string]: Skill
}
