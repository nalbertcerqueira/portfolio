interface OpenButtonProps {
    ariaLabel: string
    handleClick: () => void
}

//Botão para abrir o menu no layout mobile.
export default function OpenMenuButton({ handleClick, ariaLabel }: OpenButtonProps) {
    return (
        <button
            onClick={handleClick}
            aria-label={ariaLabel}
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
