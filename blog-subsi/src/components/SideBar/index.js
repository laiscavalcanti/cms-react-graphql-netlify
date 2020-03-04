import React from "react"
import * as S from './styled'

const SideBar = () =>(
    <S.LayoutNav>
    <S.LayoutLogo>
      <h1><a href="/home">Logo</a></h1>
    </S.LayoutLogo>
      <S.LayoutList >
          <S.LayoutLink>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/about"> About </a>
          </S.LayoutLink>
        </S.LayoutList>
    </S.LayoutNav>

) 

export default SideBar