import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import Profile from "../Profile"
import SideBar from "../SideBar"
import MenuBar from "../MenuBar"

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <>
    <S.LayoutWrapper>
    <GlobalStyles /> 
      <Header />
      <SideBar />
      <S.LayoutMain>
        <MenuBar />
      </S.LayoutMain>
        <footer>
          <Profile />
              © {new Date().getFullYear()}, subsidiário.
              {` `}
        </footer>
      </S.LayoutWrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
