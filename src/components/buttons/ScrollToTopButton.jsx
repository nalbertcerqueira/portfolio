import useIntersectionObserver from "@/src/hooks/useIntersectionObserver"
import { MdKeyboardDoubleArrowUp } from "@/src/libs/react-icons"
import { useCallback, useState } from "react"

//Botão utilizado para retornar ao topo da página.
export default function ScrollToTopButton() {
    const [isShowing, setIsShowing] = useState(true)

    //useCallback para evitar renderizações desnecessárias ao utilizar
    //o hook useIntersectionObserver.
    const callback = useCallback((entries) => {
        const entry = entries[0]
        const isIntersectingOrAboveTarget =
            entry.isIntersecting || entry.boundingClientRect.y < 0

        setIsShowing(isIntersectingOrAboveTarget)
    }, [])

    useIntersectionObserver(".about__right-content", callback)

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
            aria-label="Retornar ao topo da página."
            className={`btn btn--scrolltop ${
                isShowing ? "btn--scrolltop--show" : ""
            }`.trim()}
        >
            <MdKeyboardDoubleArrowUp
                className="btn--scrolltop__icon"
                aria-hidden="true"
                focusable="false"
            />
        </button>
    )
}
