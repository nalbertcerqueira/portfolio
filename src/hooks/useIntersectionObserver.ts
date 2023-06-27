import { useEffect } from "react"

export default function useIntersectionObserver(
    targetIdentifier: string,
    callback: IntersectionObserverCallback
) {
    useEffect(() => {
        const target = document.querySelector(targetIdentifier)
        const observer = new IntersectionObserver(callback, { threshold: 0.5 })
        target && observer.observe(target)

        return () => observer.disconnect()
    }, [callback, targetIdentifier])
}
