import { PropsWithChildren } from "react"
import Overlay from "./Overlay"

export default function Main({ children }: PropsWithChildren) {
    return (
        <main>
            <>{children}</>
            <Overlay />
        </main>
    )
}
