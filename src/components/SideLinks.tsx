import { motion } from "framer-motion"
import { IconBaseProps } from "react-icons/lib"
import { BsGithub, BsLinkedin, SiGmail } from "../libs/react-icons"

import SideLink from "./SideLink"
import GithubIcon from "./icons/GithubIcon"
import GmailIcon from "./icons/GmailIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import { CustomVariants } from "@/types/general"

interface SideLinksProps {
    animationConfigs: CustomVariants
}

//Links para mídias sociais utilizados em Hero.jsx.
export default function SideLinks({ animationConfigs }: SideLinksProps) {
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
                    <SideLink
                        className="side-links__link"
                        ariaLabel="Email para contato"
                        href="mailto:nalbertc.p@gmail.com"
                        target="_self"
                        darkIcon={<SiGmail {...defaultIconProps} />}
                        lightIcon={<GmailIcon className="side-links__icon" />}
                    />
                </motion.li>
                <motion.li variants={animationConfigs.listItem}>
                    <SideLink
                        className="side-links__link"
                        ariaLabel="Meu perfil no LinkedIn"
                        href="https://www.linkedin.com/in/nalbert-cerqueira-53981a162/"
                        darkIcon={<BsLinkedin {...defaultIconProps} />}
                        lightIcon={<LinkedinIcon className="side-links__icon" />}
                    />
                </motion.li>
                <motion.li variants={animationConfigs.listItem}>
                    <SideLink
                        className="side-links__link"
                        ariaLabel="Meu perfil no github"
                        href="https://github.com/nalbertcerqueira"
                        darkIcon={<BsGithub {...defaultIconProps} />}
                        lightIcon={<GithubIcon className="side-links__icon" />}
                    />
                </motion.li>
            </ul>
        </motion.div>
    )
}
