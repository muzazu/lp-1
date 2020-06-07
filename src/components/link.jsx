import React from "react"
import { useTheme } from "emotion-theming"
import PropType from "prop-types"

export const Link = (props) => {
    const activeTheme = useTheme()
    const { href, alt } = props
    return (
        <a
            css={{ textDecoration: "none", color: activeTheme.colors.link }}
            href={href}
            alt={alt}
            {...props}
        >
            {props.children}
        </a>
    )
}

Link.PropType = {
    href: PropType.string.isRequired,
    alt: PropType.string,
}
