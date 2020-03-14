import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import GlobalStyles from '../../styles/global'
import FooterLayout from "../Footer"

import * as S from './styled'

const Layout = ({children}) => (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
          <Header />
          <S.LayoutMain>
            <main>
              {children}
            </main>
          </S.LayoutMain>
          <FooterLayout />      
      </S.LayoutWrapper>
    </>
  )
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
