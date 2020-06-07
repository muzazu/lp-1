import React from "react"
import { Global } from "@emotion/core"
import { useTheme } from "emotion-theming"

export const GlobalStyles = () => {
    const activeTheme = useTheme()
    return (
        <Global
            styles={{
                "*": {
                    boxSizing: "border-box",
                },
                body: {
                    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                    background: activeTheme.colors.smokeGrey,
                    color: "#333",
                },
            }}
        />
    )
}
