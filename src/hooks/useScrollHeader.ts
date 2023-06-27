import { useEffect, useRef, useState } from "react"

//Hook utilizado para esconder e exibir o header da página com base na direção
//do scroll.
export default function useScrollHeader() {
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true)
    const oldScrollPosition = useRef<number>(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScrollDirection)
        return () => window.removeEventListener("scroll", handleScrollDirection)
    }, [])

    useEffect(() => {
        const resetScroll = () => (history.scrollRestoration = "manual")
        window.addEventListener("beforeunload", resetScroll)
        return () => window.removeEventListener("beforeunload", resetScroll)
    }, [])

    function handleScrollDirection(): void {
        if (window.innerWidth <= 920) {
            setIsScrollOnTop(true)
            setIsHidden(false)
            return
        }
        setIsScrollOnTop(window.scrollY < 40)
        setIsHidden((prevState) => {
            if (window.scrollY > oldScrollPosition.current) return true
            if (window.scrollY < oldScrollPosition.current) return false
            return prevState
        })

        oldScrollPosition.current = window.scrollY
    }

    return { isHidden, isScrollOnTop }
}
