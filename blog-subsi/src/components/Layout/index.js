import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import SideBar from "../SideBar"
import FooterLayout from "../Footer"

import * as S from './styled'
import PostItem from "../PostItem"


const Layout = () => {
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
          <Header />
            <S.LayoutMain>
              <PostItem />
              <PostItem />
              <PostItem />
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
