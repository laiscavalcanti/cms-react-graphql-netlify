import React from 'react'

import SearchPage from "../components/Search"
import SimpleLayout from "../components/SimpleLayout"
import SEO from "../components/seo"

const AboutPage = () =>(
    <SimpleLayout >
        <section>
            <SearchPage />
            <SEO title="Search" />
        </section>
    </SimpleLayout>
)

export default AboutPage
