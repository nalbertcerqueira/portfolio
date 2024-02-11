import { MobileMenuContext } from "../../contexts/MobileMenuContext"
import { headerVariants } from "@/libs/framer-motion"
import { ThemeContext } from "../../contexts/ThemeContext"
import useLogoAnimation from "../../hooks/useLogoAnimation"
import useCustomInView from "@/hooks/useCustomInView"
import useScrollHeader from "../../hooks/useScrollHeader"
import CloseMenuButton from "../buttons/CloseMenuButton"
import OpenMenuButton from "../buttons/OpenMenuButton"
import ThemeButton from "../buttons/ThemeButton"
import { useContext } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface SectionLink {
    id: number
    href: string
    content: string
}

interface ClassNamesMap {
    [key: string]: string[]
}

const sectionLinks: SectionLink[] = [
    { id: 1, href: "#home", content: "Início" },
    { id: 2, href: "#about", content: "Sobre mim" },
    { id: 3, href: "#projects", content: "Projetos" },
    { id: 4, href: "#skills", content: "Tecnologias" }
]

export default function Header() {
    const { theme } = useContext(ThemeContext)
    const { isOpen } = useContext(MobileMenuContext)

    const { isHidden, isScrollOnTop } = useScrollHeader()
    const { isInView, ref: headerRef } = useCustomInView({ once: true })
    const { colorIndex, colorsList, animationOFF, animationON } = useLogoAnimation(400)

    const classNames: ClassNamesMap = {
        navbar: ["navbar header__navbar", `${isOpen ? "header__navbar--open" : ""}`],
        navBox: ["header__nav-box", `${isOpen ? "header__nav-box--open" : ""}`],
        innerContainer: [
            "header__inner-container",
            `${isScrollOnTop ? "" : "header__inner-container--thin"}`
        ],
        header: ["header", `${isScrollOnTop ? "" : "header--shaded"}`, `${isHidden ? "header--hidden" : ""}`]
    }

    return (
        <motion.header
            style={{ backgroundColor: theme === "dark" ? "#131313cc" : undefined }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants.container}
            ref={headerRef}
            className={classNames.header.join(" ").trim()}
        >
            <div className={classNames.innerContainer.join(" ").trim()}>
                <OpenMenuButton />
                <Link
                    className="header__home"
                    aria-label="início"
                    href="/"
                    onMouseEnter={animationON}
                    onMouseLeave={animationOFF}
                    style={{ backgroundColor: colorsList[colorIndex] }}
                >
                    NC
                </Link>
                <div className={classNames.navBox.join(" ").trim()}>
                    <nav className={classNames.navbar.join(" ").trim()}>
                        <CloseMenuButton />
                        <ul className="navbar__list header__nav-list">
                            {sectionLinks.map((link, i) => (
                                <motion.li
                                    key={link.id}
                                    className="navbar__list-item"
                                    custom={i}
                                    variants={headerVariants.navItems}
                                >
                                    <a className="navbar__link" href={link.href}>
                                        {link.content}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <ThemeButton />
            </div>
        </motion.header>
    )
}
