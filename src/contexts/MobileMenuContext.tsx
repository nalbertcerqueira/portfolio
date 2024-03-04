"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react"

interface MobileMenuContext {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface ProviderProps {
    children: ReactNode
}

export const MobileMenuContext = createContext<MobileMenuContext>({} as MobileMenuContext)

export default function MobileMenuProvider({ children }: ProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick)
        return () => removeEventListener("click", handleOutsideClick)
    }, [])

    function handleOutsideClick(e: MouseEvent) {
        const target = e.target as HTMLElement
        const isMobile = window.innerWidth <= 920
        const isButton = target.nodeName === "BUTTON"

        if (isMobile && !isButton && !target.closest(".navbar")) {
            setIsOpen(false)
        }
    }

    return <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>{children}</MobileMenuContext.Provider>
}
