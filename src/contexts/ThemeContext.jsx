import propTypes from "prop-types"
import { createContext, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export const ThemeContext = createContext(null)

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage("light", "theme")

    useEffect(toggleDocumentClassName, [theme])

    function toggleTheme() {
        setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
    }

    function toggleDocumentClassName() {
        const html = document.documentElement
        html.className = theme === "dark" ? "dark-mode" : ""
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
ThemeProvider.propTypes = {
    children: propTypes.node
}
