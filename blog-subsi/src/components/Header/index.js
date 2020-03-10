import React from "react"
import ImageHeader from "../ImageHeader"
import SideBar from "../SideBar"

import * as S from './styled'

const Header = () => (
  <>
  <S.HeaderWrapper>
    <ImageHeader />
    <SideBar />
  </S.HeaderWrapper>
  </>
)

export default Header
