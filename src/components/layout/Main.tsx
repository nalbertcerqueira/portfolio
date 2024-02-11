import { ReactNode, useContext } from "react"
import { MobileMenuContext } from "../../contexts/MobileMenuContext"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {
    const { isOpen } = useContext(MobileMenuContext)

    return (
        <main>
            <>{children}</>
            <div className={`overlay ${isOpen ? "overlay--open" : ""}`.trim()} />
        </main>
    )
}
