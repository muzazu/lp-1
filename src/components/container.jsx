import React from "react"

export const Container = (props) => (
    <div css={{ maxWidth: "1366px", padding: "0 16px" }} {...props}>
        {props.children}
    </div>
)
