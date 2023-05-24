import propTypes from "prop-types"

import { VscClose } from "@/src/libs/react-icons"

//Botão para fechar o menu no layout mobile.
export default function CloseMenuButton({ handleClick, ariaLabel }) {
    return (
        <button
            onClick={handleClick}
            aria-label={ariaLabel}
            className="btn header__btn-close"
        >
            <VscClose
                aria-hidden="true"
                focusable="false"
                className="header__close-icon"
            />
        </button>
    )
}
CloseMenuButton.propTypes = {
    handleClick: propTypes.func,
    ariaLabel: propTypes.string
}
