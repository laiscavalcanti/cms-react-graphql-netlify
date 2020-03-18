import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from '../../styles/global'
import FooterLayout from "../Footer"
import SideBar from "../SideBar"

import * as S from './styled'

const SimpleLayout = ({children}) => (

<S.LayoutWrapper>
      <GlobalStyles />
    <S.HeaderWrapper>
        <SideBar />
    </S.HeaderWrapper>
        <S.LayoutMain>
            <main>
              {children}
            </main>
        </S.LayoutMain>
    <FooterLayout />
</S.LayoutWrapper>
)
SimpleLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }
export default SimpleLayout 