import propTypes from "prop-types"

import MobileMenuProvider from "@/src/contexts/MobileMenuContext"
import ThemeProvider from "@/src/contexts/ThemeContext"
import "@/src/scss/main.scss"

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <MobileMenuProvider>
                <Component {...pageProps} />
            </MobileMenuProvider>
        </ThemeProvider>
    )
}
App.propTypes = {
    Component: propTypes.any,
    pageProps: propTypes.any
}
