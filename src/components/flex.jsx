import React from "react"
import { facepaintMQ } from "../utils/media-query"
import PropType from "prop-types"

/**
 * transform width
 */
const widthTransform = (w) => {
    if (!w) return null

    return w.map((width) => (width ? `${width * 100}%` : null))
}

/**
 * @component flex wrapper component
 * @param {object} props
 */
export const FlexWrapper = (props) => (
    <div
        css={{
            display: "flex",
            flexWrap: "wrap",
        }}
        {...props}
    >
        {props.children}
    </div>
)

/**
 * @component flex item component
 * @param {object} props
 */
export const FlexItem = (props) => {
    const { children, xs, s, m, l, xl, xxl } = props
    return (
        <div
            css={(theme) =>
                facepaintMQ(theme.breakPoints)({
                    width: widthTransform([xs, s, m, l, xl, xxl]),
                })
            }
            {...props}
        >
            {children}
        </div>
    )
}

FlexItem.propTypes = {
    xs: PropType.number,
    s: PropType.number,
    m: PropType.number,
    l: PropType.number,
    xl: PropType.number,
    xxl: PropType.number,
}
