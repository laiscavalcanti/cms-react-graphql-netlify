
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
//import "./layout.css"
import Profile from "./Profile"
//import ImageHeader from "./ImageHeader"

const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/
  return (
    <>
      <Header  />     
      <div
        style={{
          /*margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          siteTitle={data.site.siteMetadata.title}*/  
        }}
      >
        <main>{children}</main>
        <footer  style={{
               /*margin: `0 auto`,
               maxWidth: 960,*/
              
            }}>
          <section>
            <Profile />
              © {new Date().getFullYear()}, Cícero Marra.
              {` `}
          </section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
