import React from "react"
import PropType from "prop-types"
import { useTheme } from "emotion-theming"

export const Button = (props) => {
    const { color } = props
    const activeTheme = useTheme()
    return (
        <button
            css={{
                color: "#fff",
                background: activeTheme.colors[color],
                border: "none",
                padding: "12px 16px",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                cursor: "pointer",
            }}
            {...props}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    color: PropType.string.isRequired,
}

export const ButtonOutline = (props) => {
    const { outlineColor, textColor, hoverTextColor } = props

    return (
        <button
            css={{
                padding: "12px 16px",
                borderRadius: "4px",
                whiteSpace: "nowrap",
                background: "transparent",
                border: `1px solid ${outlineColor}`,
                color: textColor,
                cursor: "pointer",
                "&:hover": {
                    color: hoverTextColor,
                    background: outlineColor,
                },
            }}
        >
            {props.children}
        </button>
    )
}

ButtonOutline.PropType = {
    outlineColor: PropType.string.isRequired,
    textColor: PropType.string.isRequired,
    hoverTextColor: PropType.string.isRequired,
}
