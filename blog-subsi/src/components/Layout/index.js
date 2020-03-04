import React from "react"
import PropTypes from "prop-types"
import * as S from '../Header/styled'
import Header from "../Header/header"
import GlobalStyles from '../../styles/global'
import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles /> 
        <Header />     
        <main>{children}</main>
        <footer>
          <Profile />  
              © {new Date().getFullYear()}, Cícero Marra.
              {` `}
        </footer>
      
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
