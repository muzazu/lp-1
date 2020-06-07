import React, { useEffect, useState } from "react"
import { useTheme } from "emotion-theming"
import { FlexWrapper, FlexItem } from "./flex"
import { Button } from "./buttons"

export const SlidingPanel = () => {
    const activeTheme = useTheme()
    const [slidingCSS, setSlidingCSS] = useState({
        padding: "32px",
        maxWidth: "640px",
        background: activeTheme.colors.blue,
        opacity: ".8",
        position: "fixed",
        left: "-1000px",
        bottom: 0,
        color: "#fff",
        transition: ".5s ease-out",
        overflow: "hidden",
    })
    const [isHid, setIsHid] = useState(false)

    // handle get storage
    useEffect(() => {
        const storage = localStorage.getItem("hideSlide")
        if (!storage) {
            setIsHid(() => false)
        }

        const storageDate = new Date(storage)
        const currentDate = new Date()
        const diffTime = Math.abs(currentDate - storageDate)
        const diffMinutes = Math.ceil(diffTime / (1000 * 60))
        // hide sliding panel 
        if (diffMinutes < 10) {
            setIsHid(() => true)
        } else {
            // remove last recorded hideSlide
            localStorage.removeItem("hideSlide")
        }
    }, [])

    // handle visible sliding panel
    useEffect(() => {
        const handleScroll = (e) => {
            const doc = document.documentElement
            const currentY =
                (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
            const docHeight =
                document.height !== undefined
                    ? document.height
                    : document.body.offsetHeight
            // only show if
            if (currentY / docHeight > 0.3 && !isHid) {
                setSlidingCSS((state) => ({
                    ...state,
                    left: "0",
                }))
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [isHid])

    /**
     * handle close
     */
    const handleClose = () => {
        setSlidingCSS((state) => ({
            ...state,
            left: "-1000px",
        }))

        localStorage.setItem("hideSlide", new Date())

        setTimeout(() => {
            setIsHid(true)
        }, 600)
    }

    if (isHid) return <></>

    return (
        <div css={slidingCSS}>
            <i
                className="fa fa-close"
                css={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    color: "#fff",
                    fontSize: "1em",
                    cursor: "pointer",
                    fontWeight: "lighter",
                }}
                onClick={() => handleClose()}
            ></i>

            <h3 css={{ margin: "0 0 16px", fontSize: "1.4em" }}>
                Get latest updates in web technologies
            </h3>
            <p
                css={{
                    margin: "0 0 24px",
                    lineHeight: 1.2,
                    fontWeight: "lighter",
                }}
            >
                I write articles related to web technologies, such as design
                trends, development tools, UI/UX case studies and reviews, and
                more. Sign up to my newsletter to get them all.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
                <FlexWrapper css={{ flexWrap: "nowrap" }}>
                    <FlexItem xs={1 / 1}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            css={{
                                width: "100%",
                                padding: "4px 8px",
                                boxSizing: "border-box",
                            }}
                        />
                    </FlexItem>
                    <FlexItem css={{ alignSelf: "flex-end" }}>
                        <Button
                            css={{ padding: "6px 8px", margin: "0 0 0 8px" }}
                            color="orange"
                        >
                            Count me in
                        </Button>
                    </FlexItem>
                </FlexWrapper>
            </form>
        </div>
    )
}
