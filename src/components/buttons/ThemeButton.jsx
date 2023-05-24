import propTypes from "prop-types"

import { BsMoonStarsFill, FiSun } from "@/src/libs/react-icons"

//Bottão para alterar o tema da página.
export default function ThemeButton({ theme, changeTheme }) {
    return (
        <button
            onClick={changeTheme}
            className={`btn btn--theme btn--theme--${theme}`}
            aria-label="Alterar o tema da página"
            type="button"
        >
            {theme === "dark" ? (
                <FiSun className={`btn--theme__dark-icon `} />
            ) : (
                <BsMoonStarsFill className="btn--theme__light-icon" />
            )}
        </button>
    )
}
ThemeButton.propTypes = {
    theme: propTypes.string,
    changeTheme: propTypes.func
}
