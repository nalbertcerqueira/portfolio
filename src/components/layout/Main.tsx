import { ReactNode, useContext } from "react"
import { MobileMenuContext } from "../../contexts/MobileMenuContext"

interface MainProps {
    children: ReactNode
}

export default function Main({ children }: MainProps) {
    const { isOpen } = useContext(MobileMenuContext)
    const overlayClassName: string = `overlay ${isOpen ? "overlay--open" : ""}`.trim()

    return (
        <main>
            <>{children}</>
            <div className={overlayClassName} />
        </main>
    )
}
