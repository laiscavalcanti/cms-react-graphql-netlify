import React, { Fragment } from 'React'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'

const AboutPage = () =>(
    <Layout >
        <section
            style={{
                background: `orange`,
                
              }}
        >
            <SEO title="About" />
            <h1 >About Page</h1>
        </section>
    </Layout>
) 

export default AboutPage