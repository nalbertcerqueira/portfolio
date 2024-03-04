import ThemeProvider from "@/contexts/ThemeContext"
import MobileMenuProvider from "@/contexts/MobileMenuContext"
import { PropsWithChildren } from "react"
import PageHead from "../components/PageHead"
import "@/scss/main.scss"

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="pt-br">
            <head>
                <PageHead />
            </head>
            <body>
                <ThemeProvider>
                    <MobileMenuProvider>{children}</MobileMenuProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
