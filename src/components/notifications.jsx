import React from "react"
import { FlexWrapper, FlexItem } from "./flex"
import { Button } from "./buttons"
import { useTheme } from "emotion-theming"
import { mq } from "../utils/media-query"

/**
 * @component cookies
 */
export const CookiesConsent = () => {
    const activeTheme = useTheme()
    return (
        <div
            css={{
                padding: "20px",
                backgroundColor: `${activeTheme.colors.smokeGrey}`,
                position: "sticky",
                top: 0,
                zIndex: 2,
            }}
        >
            <FlexWrapper
                css={{
                    maxWidth: "720px",
                    margin: "auto",
                    alignItems: "center",
                }}
            >
                <FlexItem m={7 / 8} s={1 / 1} xs={1 / 1}>
                    By accessing and using this website, you acknowledge that
                    you have read and understand our{" "}
                    <a href="/">Cookie Policy</a>,{" "}
                    <a href="/">Privacy Policy</a>, and our{" "}
                    <a href="/">Terms of Service</a>.
                </FlexItem>
                <FlexItem
                    m={1 / 8}
                    xs={1 / 1}
                    s={1 / 1}
                    css={{
                        [mq(activeTheme.breakPoints.xs)]: {
                            marginTop: "8px",
                        },
                        [mq(activeTheme.breakPoints.s)]: {
                            marginTop: "0px",
                        },
                        [mq(activeTheme.breakPoints.m)]: {
                            marginTop: "0px",
                        },
                    }}
                >
                    <Button color="blue">Got It</Button>
                </FlexItem>
            </FlexWrapper>
        </div>
    )
}
