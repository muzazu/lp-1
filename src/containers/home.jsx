import React from "react"
import Layout from "../layouts/layout"
import { CookiesConsent } from "../components/notifications"
import { Hero } from "../components/hero"
import { Highlight } from "../components/highlight"
import { Footer } from "../components/footer"

function Home() {
    return (
        <Layout>
            <div className="home">
                <CookiesConsent />
                <Hero />
                <Highlight />
                <Footer />
            </div>
        </Layout>
    )
}

export default Home
