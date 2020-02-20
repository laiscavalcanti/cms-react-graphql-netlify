import React from "react"
import PropTypes from "prop-types"
import * as S from './styled'
import Header from "../header"
import Profile from "../Profile"
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles />
      <S.LayoutWrapper>
        <Header />     
          
      </S.LayoutWrapper>
        <main>{children}</main>
      <S.LayoutFooter>
        <footer>
          <section>
            <Profile />
              
              © {new Date().getFullYear()}, Cícero Marra.
              {` `}
          </section>
        </footer>
      </S.LayoutFooter>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
