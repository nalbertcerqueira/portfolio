import useLocalStorage from "./useLocalStorage"

//Hook utilizado para exibir mais ou menos projetos em Projects.jsx
export default function useToggleProjects() {
    const [moreProjects, setMoreProjects] = useLocalStorage("closed", "moreProjects")

    function toggleMoreProjects(): void {
        setMoreProjects((prevState) => {
            return prevState === "open" ? "closed" : "open"
        })
    }

    return {
        moreProjects,
        toggleMoreProjects
    }
}
