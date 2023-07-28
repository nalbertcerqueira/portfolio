import { SkillsMap } from "@/types/general"
import { motion, Variants } from "framer-motion"
import { JSX, MouseEvent } from "react"

import CssIcon from "./icons/CssIcon"
import ExpressIcon from "./icons/ExpressIcon"
import GithubBigIcon from "./icons/GithubBigIcon"
import GitIcon from "./icons/GitIcon"
import HtmlIcon from "./icons/HtmlIcon"
import JavaScriptIcon from "./icons/JavascriptIcon"
import NextIcon from "./icons/NextIcon"
import NodejsIcon from "./icons/NodejsIcon"
import ReactIcon from "./icons/ReactIcon"
import SassIcon from "./icons/SassIcon"
import TailwindIcon from "./icons/TailwindIcon"
import TypescriptIcon from "./icons/TypescriptIcon"
import WebpackIcon from "./icons/WebpackIcon"

interface StackListProps {
    className: string
    skillsMap: SkillsMap
    animationConfigs: Variants
    onMouseLeave: () => void
    onMouseMove: <Element extends HTMLElement>(e: MouseEvent<Element>) => void
}

interface JSXIcon {
    id: string
    icon: (props: any) => JSX.Element
}

interface IconsMap {
    [key: string]: JSXIcon[]
}

const icons: IconsMap = {
    firstSection: [
        { id: "html", icon: HtmlIcon },
        { id: "react", icon: ReactIcon },
        { id: "sass", icon: SassIcon },
        { id: "css", icon: CssIcon }
    ],
    secondSection: [
        { id: "js", icon: JavaScriptIcon },
        { id: "express", icon: ExpressIcon },
        { id: "tailwind", icon: TailwindIcon },
        { id: "next", icon: NextIcon }
    ],
    thirdSection: [
        { id: "node", icon: NodejsIcon },
        { id: "webpack", icon: WebpackIcon },
        { id: "git", icon: GitIcon },
        { id: "ts", icon: TypescriptIcon },
        { id: "github", icon: GithubBigIcon }
    ]
}

//Lista de tecnologias utilizada em Skills.jsx.
export default function StackList(props: StackListProps) {
    function renderListIcons(icons: JSXIcon[]) {
        return icons.map((item) => (
            <li
                aria-label={props.skillsMap[item.id]?.name}
                data-id={item.id}
                key={item.id}
                className="stacks__tech-item"
            >
                <item.icon className="stacks__tech-icon" />
            </li>
        ))
    }

    return (
        <motion.div variants={props.animationConfigs} className={`stacks ${props.className || ""}`.trim()}>
            <ul
                onMouseLeave={props.onMouseLeave}
                onMouseMove={props.onMouseMove}
                className="stacks__tech-list"
            >
                <ul className="stacks__sub-list">
                    {renderListIcons(icons.firstSection)}
                    {renderListIcons(icons.secondSection)}
                    {renderListIcons(icons.thirdSection)}
                    {renderListIcons(icons.firstSection)}
                    {renderListIcons(icons.secondSection).slice(0, 2)}
                </ul>
                <ul className="stacks__sub-list">
                    {renderListIcons(icons.thirdSection).reverse()}
                    {renderListIcons(icons.secondSection).reverse()}
                    {renderListIcons(icons.firstSection).reverse()}
                    {renderListIcons(icons.thirdSection).reverse()}
                    {renderListIcons(icons.secondSection).reverse().slice(0, 2)}
                </ul>
            </ul>
        </motion.div>
    )
}
