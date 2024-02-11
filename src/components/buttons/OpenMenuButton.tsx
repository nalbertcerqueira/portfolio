import { MobileMenuContext } from "@/contexts/MobileMenuContext"
import { useContext } from "react"

//Botão para abrir o menu no layout mobile.
export default function OpenMenuButton() {
    const { setIsOpen } = useContext(MobileMenuContext)

    return (
        <button
            onClick={() => setIsOpen(true)}
            aria-label="Exibir menu de navegação"
            className="btn btn--hamburger"
            type="button"
        >
            <div className="btn--hamburger__bars">
                <span className="btn--hamburger__bar" />
                <span className="btn--hamburger__bar" />
                <span className="btn--hamburger__bar" />
            </div>
        </button>
    )
}
