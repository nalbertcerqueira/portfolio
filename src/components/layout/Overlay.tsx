"use client"

import { useContext } from "react"
import { MobileMenuContext } from "@/contexts/MobileMenuContext"

export default function Overlay() {
    const { isOpen } = useContext(MobileMenuContext)

    return <div className={`overlay ${isOpen ? "overlay--open" : ""}`.trim()} />
}
