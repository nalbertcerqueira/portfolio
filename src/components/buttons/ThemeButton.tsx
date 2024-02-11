import { BsMoonStarsFill, FiSun } from "@/libs/react-icons"
import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

//Botão para alterar o tema da página entre 'light' e 'dark'.
export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            onClick={toggleTheme}
            className={`btn btn--theme btn--theme--${theme}`}
            aria-label="Alterar o tema da página"
            type="button"
        >
            {theme === "dark" ? (
                <FiSun focusable="false" aria-hidden="true" className={`btn--theme__dark-icon `} />
            ) : (
                <BsMoonStarsFill focusable="false" aria-hidden="true" className="btn--theme__light-icon" />
            )}
        </button>
    )
}
