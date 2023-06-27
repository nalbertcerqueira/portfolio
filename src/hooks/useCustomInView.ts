import { useInView } from "framer-motion"
import { useRef } from "react"

interface UseCustomInViewProps {
    once?: boolean
    amount?: number
}

export default function useCustomInView<TargetElement extends HTMLElement>(
    params: UseCustomInViewProps = { once: false, amount: 0 }
) {
    const ref = useRef<TargetElement | null>(null)
    const isInView = useInView(ref, params)

    return { ref, isInView }
}
