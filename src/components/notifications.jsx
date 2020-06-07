import React, { useState, useEffect } from "react"
import { FlexWrapper, FlexItem } from "./flex"
import { Button } from "./buttons"
import { useTheme } from "emotion-theming"
import { mq } from "../utils/media-query"
import { Link } from "./link"

/**
 * @component cookies
 */
export const CookiesConsent = () => {
    const activeTheme = useTheme()
    const [cookiesSeen, setCookiesSeen] = useState()
    const [notificationCSS, setNotificationCSS] = useState({
        padding: "20px",
        backgroundColor: `${activeTheme.colors.smokeGrey}`,
        position: "sticky",
        top: 0,
        zIndex: 2,
        borderBottom: "1px solid #999",
    })

    useEffect(() => {
        setCookiesSeen(localStorage.getItem("cookiesSeen"))
    }, [])

    const handleUpdateSeen = () => {
        localStorage.setItem("cookiesSeen", "1")

        // handle slide up effect notification
        setNotificationCSS((state) => ({
            ...state,
            overflow: "hidden",
            height: 0,
            padding: 0,
            transition: ".3s ease-out",
        }))

        setTimeout(() => {
            setCookiesSeen(1)
        }, 600)
    }

    if (cookiesSeen) return <></>

    return (
        <div css={notificationCSS}>
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
                    <Link href="#">Cookie Policy</Link>,{" "}
                    <Link href="#">Privacy Policy</Link>, and our{" "}
                    <Link href="#">Terms of Service</Link>.
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
                    <Button color="blue" onClick={() => handleUpdateSeen()}>
                        Got It
                    </Button>
                </FlexItem>
            </FlexWrapper>
        </div>
    )
}
