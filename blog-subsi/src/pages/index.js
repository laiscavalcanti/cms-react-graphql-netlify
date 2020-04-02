import React from 'react'
import ReactGA from 'react-ga'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import SEO from "../components/seo"

//import GridTemplate from 'components/GridTemplate'
import BlogList from '../components/BlogList'

const trackLanguageClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'click',
      label: `Home - Go to english`
    })
  }
  
  const IndexPage = () => {
    return (
      <Layout>
        <SEO title='Home' />
       
          <ButtonLink
            to="/en/"
            title="View in english"
            onClick={() => trackLanguageClick()}>
           
          </ButtonLink>

          <BlogList />
 
      </Layout>
    )
  }
  
  export default IndexPage