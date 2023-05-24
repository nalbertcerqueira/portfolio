import { useEffect } from "react"

export default function useIntersectionObserver(targetIdentifier, callback) {
    useEffect(() => {
        const target = document.querySelector(targetIdentifier)
        const observer = new IntersectionObserver(callback, { threshold: 0.5 })
        observer.observe(target)

        return () => observer.disconnect()
    }, [callback, targetIdentifier])
}
