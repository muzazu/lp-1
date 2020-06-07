import React from 'react'
import Layout from '../layouts/layout'
import { CookiesConsent } from '../components/notifications'
import { Hero } from '../components/hero'

function Home() {
    return (
        <Layout>
            <div className="home">
                <CookiesConsent />
                <Hero />
            </div>
        </Layout>
    )
}

export default Home
