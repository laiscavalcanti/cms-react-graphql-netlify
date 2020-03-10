import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import SideBar from "../SideBar"
import PostItem from "../PostItem"

import * as S from './styled'
import FooterLayout from "../Footer"

const Layout = () => {
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
        <Header />
          <SideBar />
            <S.LayoutMain>
            </S.LayoutMain>
            <FooterLayout />      
      </S.LayoutWrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
