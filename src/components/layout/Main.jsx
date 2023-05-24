import propTypes from "prop-types"
import { useContext } from "react"

import { MobileMenuContext } from "../../contexts/MobileMenuContext"

export default function Main({ children }) {
    const { isOpen } = useContext(MobileMenuContext)
    const overlayClassName = `overlay ${isOpen ? "overlay--open" : ""}`.trim()

    return (
        <main>
            <>{children}</>
            <div className={overlayClassName} />
        </main>
    )
}
Main.propTypes = {
    children: propTypes.node
}
