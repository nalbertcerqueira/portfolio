import type { AppProps } from "next/app"

import MobileMenuProvider from "@/contexts/MobileMenuContext"
import ThemeProvider from "@/contexts/ThemeContext"
import "@/scss/main.scss"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <MobileMenuProvider>
                <Component {...pageProps} />
            </MobileMenuProvider>
        </ThemeProvider>
    )
}
