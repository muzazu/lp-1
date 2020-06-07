import React, { useState } from "react"
import { Container } from "./container"
import { FlexWrapper, FlexItem } from "./flex"
import PropType from "prop-types"

/**
 * @component highlight item
 * @param {object} props
 */
export const HighlightItem = (props) => {
    const { title, icon, desc } = props
    return (
        <div
            css={{
                border: "1px solid #b9b9b9",
                boxShadow: "0 0 8px #fff inset",
                position: "relative",
                padding: "24px 12px",
            }}
            {...props}
        >
            <i
                className={`fa fa-${icon}`}
                css={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontSize: "24px",
                    color: "#acadb7",
                }}
            ></i>
            <h3 css={{ margin: "0 0 8px" }}>{title}</h3>
            <p css={{ fontSize: ".9em", lineHeight: "1.2" }}>{desc}</p>
        </div>
    )
}

HighlightItem.PropType = {
    title: PropType.string.isRequired,
    desc: PropType.string.isRequired,
    icon: PropType.string.isRequired,
}

/**
 * @component highlight
 * @param {object} props
 */
export const Highlight = () => {
    const [highlights] = useState([
        {
            title: "Consult",
            icon: "comments-o",
            desc:
                "Co-create, design thinking; strengthen infrastructure resist granular.Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.",
        },
        {
            title: "Design",
            icon: "paint-brush",
            desc:
                "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.",
        },
        {
            title: "Develop",
            icon: "cubes",
            desc:
                "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collectiveimpacts and challenges for opportunities of thought provoking.",
        },
        {
            title: "Marketing",
            icon: "bullhorn",
            desc:
                "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcomeinjustice resilient, uplift social transparent effective.",
        },
        {
            title: "Manage",
            icon: "server",
            desc:
                "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism,effective altruism invest optimism corporate social.",
        },
        {
            title: "Evolve",
            icon: "line-chart",
            desc:
                "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.",
        },
    ])
    return (
        <section css={{ padding: "32px 0" }}>
            <Container>
                <div
                    css={{
                        textAlign: "center",
                        maxWidth: "720px",
                        margin: "auto",
                    }}
                >
                    <h2>How Can I Help You?</h2>
                    <p css={{ fontSize: "1.2em" }}>
                        Our work then targeted, best practices outcomes social
                        innovation synergy.
                        <br />
                        Venture philanthropy, revolutionary inclusive
                        policymaker relief. User-centered program areas scale.
                    </p>
                </div>

                <FlexWrapper>
                    {highlights.map((data) => (
                        <FlexItem
                            l={1 / 3}
                            s={1 / 2}
                            xs={1 / 1}
                            key={data.title}
                        >
                            <HighlightItem
                                title={data.title}
                                desc={data.desc}
                                icon={data.icon}
                                css={{ margin: "8px" }}
                            />
                        </FlexItem>
                    ))}
                </FlexWrapper>
            </Container>
        </section>
    )
}
