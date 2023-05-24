import { useInView } from "framer-motion"
import { useRef } from "react"

export default function useCustomInView({ once, amount } = { once: false, amount: 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: once, amount: amount })

    return { ref, isInView }
}
