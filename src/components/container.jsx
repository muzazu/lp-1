import React from "react"

export const Container = (props) => (
    <div css={{ maxWidth: "1366px", padding: "0 16px", margin: "auto" }} {...props}>
        {props.children}
    </div>
)
