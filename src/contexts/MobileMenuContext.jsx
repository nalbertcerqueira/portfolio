import propTypes from "prop-types"
import { createContext, useState } from "react"

export const MobileMenuContext = createContext(null)

export default function MobileMenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MobileMenuContext.Provider>
    )
}
MobileMenuProvider.propTypes = {
    children: propTypes.node
}
