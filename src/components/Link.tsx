import { ReactNode } from "react"

interface LinkProps {
    className: string
    ariaLabel?: string
    href: string
    target?: "_blank" | "_parent" | "_self" | "_top"
    children: ReactNode
}

export default function Link(props: LinkProps) {
    return (
        <a
            className={props.className || undefined}
            aria-label={props.ariaLabel || undefined}
            href={props.href}
            rel="noreferrer"
            target={props.target || "_blank"}
        >
            {props.children}
        </a>
    )
}
