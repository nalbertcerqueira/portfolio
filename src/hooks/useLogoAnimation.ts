import { useEffect, useRef, useState } from "react"

//Hook utilizado na animação da logo em Header.jsx
export default function useLogoAnimation(interval: number) {
    const [colorIndex, setColorIndex] = useState<number>(0)
    const colorsList = ["#131313", "#e65656", "#567ce6", "#54e661", "#555555"]
    const timerRef = useRef<NodeJS.Timer | null>(null)

    useEffect(() => {
        return () => {
            timerRef.current && clearInterval(timerRef.current)
        }
    }, [])

    function animationON(): void {
        timerRef.current && clearInterval(timerRef.current)
        setColorIndex(1)

        timerRef.current = setInterval(() => {
            setColorIndex((prevState) => {
                return prevState === colorsList.length - 1 ? 0 : prevState + 1
            })
        }, interval)
    }

    function animationOFF(): void {
        timerRef.current && clearInterval(timerRef.current)
        setColorIndex(0)
    }

    return { colorsList, colorIndex, animationOFF, animationON }
}
