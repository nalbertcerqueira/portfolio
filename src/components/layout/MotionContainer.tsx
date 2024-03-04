"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import useCustomInView from "@/hooks/useCustomInView"
import { ReactNode } from "react"

type ElementType = "header" | "section" | "div"

interface CustomHTMLMotionProps extends Omit<HTMLMotionProps<ElementType>, "animate" | "ref" | "initial"> {
    initial: "visible" | "hidden"
}

interface MotionContainerProps {
    elementType: ElementType
    elementProps: CustomHTMLMotionProps
    children: ReactNode
    amount?: number
    once?: boolean
}

export default function MotionContainer(props: MotionContainerProps) {
    const { isInView, ref } = useCustomInView({
        amount: props.amount,
        once: props.once
    })
    const Element = motion[props.elementType]

    return (
        <Element {...props.elementProps} ref={ref as any} animate={isInView ? "visible" : "hidden"}>
            {props.children}
        </Element>
    )
}
