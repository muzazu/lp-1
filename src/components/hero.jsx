import React from "react"
import Background from "../assets/work-desk__dustin-lee.jpg"
import Logo from "../assets/y-logo-white.png"
import { useTheme } from "emotion-theming"
import { Container } from "./container"
import { ButtonOutline } from "./buttons"
import { mq } from "../utils/media-query"

export const Hero = () => {
    const activeTheme = useTheme()
    return (
        <section
            css={{
                background: `url(${Background}) no-repeat`,
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                position: "relative",
            }}
        >
            <div
                css={{
                    background: activeTheme
                        ? activeTheme.colors.darkBlue
                        : "#007bc1",
                    opacity: 0.6,
                    width: "100%",
                    height: "100vh",
                    position: "absolute",
                }}
            ></div>
            <Container>
                <header css={{ position: "absolute", top: "20px" }}>
                    <h1 css={{ margin: 0, fontWeight: "normal" }}>
                        <a href="/">
                            <img src={Logo} alt="LP1" css={{ width: "48px" }} />
                        </a>
                    </h1>
                </header>
                <div
                    css={{
                        position: "absolute",
                        top: "50%",
                        textAlign: "center",
                        color: "#fff",
                        [mq(activeTheme.breakPoints.s)]: {
                            left: "10%",
                            transform: "translate(-50%, -10%)",
                        },
                        [mq(activeTheme.breakPoints.m)]: {
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        },
                    }}
                >
                    <h2
                        css={{
                            fontWeight: "300",
                            margin: "0 0 12px",
                            fontSize: "1.8em",
                        }}
                    >
                        Hello! I'm Muhammad Zaid
                    </h2>
                    <h3 css={{ margin: "0 0 12px", fontSize: "1.6em" }}>
                        Consult, Design, and Develop Websites
                    </h3>
                    <p css={{ margin: "0 0 8px" }}>
                        Have something great in mind? Feel free to contact me.
                    </p>
                    <p css={{ margin: "0 0 24px" }}>
                        I'll help you to make it happen.
                    </p>

                    <ButtonOutline
                        outlineColor="#fff"
                        textColor="#fff"
                        hoverTextColor={activeTheme.colors.blue}
                    >
                        Let's Make Contact
                    </ButtonOutline>
                </div>
            </Container>
        </section>
    )
}
