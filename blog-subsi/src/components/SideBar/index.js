import React from "react"
import * as S from './styled'

const SideBar = () =>(
    <S.LayoutNav>
      <S.LayoutLogo ><a href="/"><h1></h1></a></S.LayoutLogo>
      <S.LayoutList >
          <S.LayoutLink>
            <a href="/"> textos </a>
            <a href="/"> diários </a>
            <a href="/"> cursos </a>
            <a href="/"> contato </a>
            <a href="/about"> sobre </a>
          </S.LayoutLink>
        </S.LayoutList>
    </S.LayoutNav>

) 

export default SideBar