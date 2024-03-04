"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useContext } from "react"
import { headerVariants } from "@/libs/framer-motion"

import Logo from "../Logo"
import ThemeButton from "../buttons/ThemeButton"
import OpenMenuButton from "../buttons/OpenMenuButton"
import useScrollHeader from "../../hooks/useScrollHeader"
import MotionContainer from "./MotionContainer"
import CloseMenuButton from "../buttons/CloseMenuButton"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MobileMenuContext } from "../../contexts/MobileMenuContext"

interface SectionLink {
    id: number
    href: string
    content: string
}

interface ClassNameMap {
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

    const classNames: ClassNameMap = {
        navbar: ["navbar header__navbar", `${isOpen ? "header__navbar--open" : ""}`],
        navBox: ["header__nav-box", `${isOpen ? "header__nav-box--open" : ""}`],
        innerContainer: [
            "header__inner-container",
            `${isScrollOnTop ? "" : "header__inner-container--thin"}`
        ],
        header: ["header", `${isScrollOnTop ? "" : "header--shaded"}`, `${isHidden ? "header--hidden" : ""}`]
    }

    function renderNavLinks() {
        return sectionLinks.map((link, i) => (
            <motion.li
                key={link.id}
                className="navbar__list-item"
                custom={i}
                variants={headerVariants.navItems}
            >
                <Link className="navbar__link" href={link.href}>
                    {link.content}
                </Link>
            </motion.li>
        ))
    }

    return (
        <MotionContainer
            once={true}
            elementType="header"
            elementProps={{
                initial: "hidden",
                className: classNames.header.join(" ").trim(),
                variants: headerVariants.container,
                style: { backgroundColor: theme === "dark" ? "#131313cc" : undefined }
            }}
        >
            <div className={classNames.innerContainer.join(" ").trim()}>
                <OpenMenuButton />
                <Link aria-label="início" href="/">
                    <Logo />
                </Link>
                <div className={classNames.navBox.join(" ").trim()}>
                    <nav className={classNames.navbar.join(" ").trim()}>
                        <CloseMenuButton />
                        <ul className="navbar__list header__nav-list">{renderNavLinks()}</ul>
                    </nav>
                </div>
                <ThemeButton />
            </div>
        </MotionContainer>
    )
}
