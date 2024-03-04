import { ThemeContext } from "@/contexts/ThemeContext"
import Link from "./Link"
import { HTMLAttributeAnchorTarget, ReactNode, useContext } from "react"

interface SideLinkProps {
    lightIcon: ReactNode
    darkIcon: ReactNode
    href: string
    target?: HTMLAttributeAnchorTarget
    ariaLabel?: string
    className?: string
}

export default function SideLink(props: SideLinkProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <Link
            target={props.target}
            className={props.className}
            aria-label={props.ariaLabel}
            href={props.href}
        >
            {theme === "dark" ? props.darkIcon : props.lightIcon}
        </Link>
    )
}
