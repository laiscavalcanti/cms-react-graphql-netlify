import React from "react"

import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'

import FooterLayout from "../Footer"
import * as S from './styled'


const Layout = () => (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
          <Header />
           
            <FooterLayout />      
      </S.LayoutWrapper>
    </>
  )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
