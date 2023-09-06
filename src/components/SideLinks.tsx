import { motion } from "framer-motion"
import { useContext } from "react"
import { IconBaseProps } from "react-icons/lib"

import { CustomVariants } from "@/types/general"
import { ThemeContext } from "../contexts/ThemeContext"
import { BsGithub, BsLinkedin, SiGmail } from "../libs/react-icons"

import Link from "./Link"
import GithubIcon from "./icons/GithubIcon"
import GmailIcon from "./icons/GmailIcon"
import LinkedinIcon from "./icons/LinkedinIcon"

interface SideLinksProps {
    animationConfigs: CustomVariants
}

//Links para mídias sociais utilizados em Hero.jsx.
export default function SideLinks({ animationConfigs }: SideLinksProps) {
    const { theme } = useContext(ThemeContext)

    const defaultIconProps: IconBaseProps = {
        "aria-hidden": true,
        focusable: "false",
        className: "side-links__icon"
    }

    return (
        <motion.div variants={animationConfigs.container} className="side-links">
            <motion.span variants={animationConfigs.line} className="side-links__bar"></motion.span>
            <ul className="side-links__list">
                <motion.li variants={animationConfigs.listItem}>
                    <Link
                        className="side-links__link"
                        ariaLabel="Email para contato"
                        href="mailto:nalbertc.p@gmail.com"
                        target="_self"
                    >
                        {theme === "dark" ? (
                            <SiGmail {...defaultIconProps} />
                        ) : (
                            <GmailIcon className="side-links__icon" />
                        )}
                    </Link>
                </motion.li>
                <motion.li variants={animationConfigs.listItem}>
                    <Link
                        className="side-links__link"
                        ariaLabel="Meu perfil no LinkedIn"
                        href="https://www.linkedin.com/in/nalbert-cerqueira-53981a162/"
                    >
                        {theme === "dark" ? (
                            <BsLinkedin {...defaultIconProps} />
                        ) : (
                            <LinkedinIcon className="side-links__icon" />
                        )}
                    </Link>
                </motion.li>
                <motion.li variants={animationConfigs.listItem}>
                    <Link
                        className="side-links__link"
                        ariaLabel="Meu perfil no github"
                        href="https://github.com/nalbertcerqueira"
                    >
                        {theme === "dark" ? (
                            <BsGithub {...defaultIconProps} />
                        ) : (
                            <GithubIcon className="side-links__icon" />
                        )}
                    </Link>
                </motion.li>
            </ul>
        </motion.div>
    )
}
