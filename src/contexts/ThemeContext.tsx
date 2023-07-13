import propTypes from "prop-types"
import { ReactNode, createContext, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

interface ThemeContext {
    theme: string
    toggleTheme: () => void
}

interface ProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export default function ThemeProvider({ children }: ProviderProps) {
    const [theme, setTheme] = useLocalStorage<string>("light", "theme")

    useEffect(toggleDocumentClassName, [theme])

    function toggleTheme(): void {
        setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
    }

    function toggleDocumentClassName(): void {
        const html = document.documentElement
        html.className = theme === "dark" ? "dark-mode" : ""
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
ThemeProvider.propTypes = {
    children: propTypes.node
}
