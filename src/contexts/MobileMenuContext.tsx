import propTypes from "prop-types"
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface MobileMenuContext {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface ProviderProps {
    children: ReactNode
}

export const MobileMenuContext = createContext<MobileMenuContext>({} as MobileMenuContext)

export default function MobileMenuProvider({ children }: ProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MobileMenuContext.Provider>
    )
}
MobileMenuProvider.propTypes = {
    children: propTypes.node
}
