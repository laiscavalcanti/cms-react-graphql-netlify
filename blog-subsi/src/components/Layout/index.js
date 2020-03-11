import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import PostItem from "../PostItem"
import FooterLayout from "../Footer"

import * as S from './styled'


const Layout = () => {
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
          <Header />
            <S.LayoutMain>      
              <S.GridContainer>
                <S.GridArea>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                </S.GridArea>
              </S.GridContainer>
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
