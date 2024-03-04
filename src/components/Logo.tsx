"use client"

import useLogoAnimation from "@/hooks/useLogoAnimation"

export default function Logo() {
    const { colorIndex, colorsList, animationOFF, animationON } = useLogoAnimation(400)

    return (
        <span
            className="brand"
            onMouseEnter={animationON}
            onMouseLeave={animationOFF}
            style={{ backgroundColor: colorsList[colorIndex] }}
        >
            NC
        </span>
    )
}
