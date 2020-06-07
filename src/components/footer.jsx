import React from "react"
import { useTheme } from "emotion-theming"

export const Footer = () => {
    const activeTheme = useTheme()
    return (
        <footer
            css={{
                backgroundColor: activeTheme.colors.footerBg,
                color: '#fff',
                textAlign: "center",
                padding: "24px 0",
                fontSize: ".9em",
            }}
        >
            © {new Date().getFullYear()} Muhammad Zaid. All rights reserved.​
        </footer>
    )
}
