import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import Profile from "../Profile"
import SideBar from "../SideBar"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles /> 
    <SideBar />  
        <Header />
        <main>{children}</main>
        <footer>
          <Profile />  
              © {new Date().getFullYear()}, subsidiário.
              {` `}
        </footer>
      
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
