import propTypes from "prop-types"

export default function Link({ className, ariaLabel, href, target, children }) {
    return (
        <a
            className={className || null}
            aria-label={ariaLabel || null}
            href={href}
            rel="noreferrer"
            target={target || "_blank"}
        >
            {children}
        </a>
    )
}
Link.propTypes = {
    className: propTypes.string,
    ariaLabel: propTypes.string,
    href: propTypes.string,
    target: propTypes.string,
    children: propTypes.node
}
