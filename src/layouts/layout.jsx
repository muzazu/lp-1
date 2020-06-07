import React from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "../contexts/theme"
import "../libs/fonts"
import { GlobalStyles } from "../components/global-style"

export default (props) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {props.children}
    </ThemeProvider>
)
