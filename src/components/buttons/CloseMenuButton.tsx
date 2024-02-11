import { MobileMenuContext } from "@/contexts/MobileMenuContext"
import { VscClose } from "@/libs/react-icons"
import { useContext } from "react"

//Botão para fechar o menu no layout mobile.
export default function CloseMenuButton() {
    const { setIsOpen } = useContext(MobileMenuContext)

    return (
        <button
            onClick={() => setIsOpen(false)}
            aria-label="Ocultar menu de navegação"
            className="btn header__btn-close"
        >
            <VscClose aria-hidden="true" focusable="false" className="header__close-icon" />
        </button>
    )
}
