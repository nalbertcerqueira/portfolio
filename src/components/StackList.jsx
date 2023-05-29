import { motion } from "framer-motion"
import propTypes from "prop-types"

import CssIcon from "./icons/CssIcon"
import ExpressIcon from "./icons/ExpressIcon"
import GitIcon from "./icons/GitIcon"
import GithubBigIcon from "./icons/GithubBigIcon"
import HtmlIcon from "./icons/HtmlIcon"
import JavaScriptIcon from "./icons/JavascriptIcon"
import NextIcon from "./icons/NextIcon"
import NodejsIcon from "./icons/NodejsIcon"
import ReactIcon from "./icons/ReactIcon"
import SassIcon from "./icons/SassIcon"
import TailwindIcon from "./icons/TailwindIcon"
import WebpackIcon from "./icons/WebpackIcon"

const icons = {
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
        { id: "github", icon: GithubBigIcon }
    ]
}

//Lista de tecnologias utilizada em Skills.jsx.
export default function StackList({
    skillsData,
    onMouseMove,
    onMouseLeave,
    className,
    animationConfigs
}) {
    function renderListIcons(icons) {
        return icons.map((item) => (
            <li
                aria-label={skillsData[item.id]?.name}
                data-id={item.id}
                key={item.id}
                className="stacks__tech-item"
            >
                <item.icon className="stacks__tech-icon" />
            </li>
        ))
    }

    return (
        <motion.div
            variants={animationConfigs}
            className={`stacks ${className || ""}`.trim()}
        >
            <ul
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
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
StackList.propTypes = {
    skillsData: propTypes.object,
    onMouseMove: propTypes.func,
    onMouseLeave: propTypes.func,
    className: propTypes.string,
    animationConfigs: propTypes.object
}
