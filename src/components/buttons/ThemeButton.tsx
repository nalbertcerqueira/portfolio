import { BsMoonStarsFill, FiSun } from "@/libs/react-icons"

interface ThemeButtonProps {
    theme: string
    changeTheme: () => void
}

//Bottão para alterar o tema da página.
export default function ThemeButton({ theme, changeTheme }: ThemeButtonProps) {
    return (
        <button
            onClick={changeTheme}
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
