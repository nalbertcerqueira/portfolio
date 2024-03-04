import { HTMLAttributeAnchorTarget, ReactNode } from "react"

interface LinkProps {
    href: string
    children: ReactNode
    target?: HTMLAttributeAnchorTarget
    className?: string
    ariaLabel?: string
}

export default function Link(props: LinkProps) {
    return (
        <a
            className={props.className}
            aria-label={props.ariaLabel}
            href={props.href}
            rel="noreferrer"
            target={props.target || "_blank"}
        >
            {props.children}
        </a>
    )
}
