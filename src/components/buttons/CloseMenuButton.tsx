import { VscClose } from "@/libs/react-icons"

interface CloseButtonProps {
    ariaLabel: string
    handleClick: () => void
}

//Botão para fechar o menu no layout mobile.
export default function CloseMenuButton({ handleClick, ariaLabel }: CloseButtonProps) {
    return (
        <button onClick={handleClick} aria-label={ariaLabel} className="btn header__btn-close">
            <VscClose aria-hidden="true" focusable="false" className="header__close-icon" />
        </button>
    )
}
