import React from "react"
import PropTypes from "prop-types"
import * as S from './styled'
import Header from "../header"
import GlobalStyles from '../../styles/global'
import Infos from "../Infos"

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
            <Infos />
              
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
