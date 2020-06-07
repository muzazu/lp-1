import React from "react"
import Layout from "../layouts/layout"
import { CookiesConsent } from "../components/notifications"
import { Hero } from "../components/hero"
import { Highlight } from "../components/highlight"
import { Footer } from "../components/footer"
import { SlidingPanel } from "../components/sliding-panel"

function Home() {
    return (
        <Layout>
            <div className="home">
                <CookiesConsent />
                <Hero />
                <Highlight />
                <Footer />
                <SlidingPanel />
            </div>
        </Layout>
    )
}

export default Home
