/**import { Link } from "gatsby"  <Link>{siteTitle}
</Link>*/
import React from "react"
import ImageHeader from "./ImageHeader"
import * as S from './Layout/styled'

const Header = () => (
  <>
  <header>
    <div>
      <h1><ImageHeader /></h1>
    </div>
  </header>
  <S.LayoutNav>
    <S.LayoutLogo>
      <div><a href="/home">Logo</a></div>
    </S.LayoutLogo>
    <div>
      <nav>
        <ul>
          <S.LayoutA >
          <a href="/"> Subsidiário </a>
          <a href="/"> Home Scholling </a>
          <a href="/"> Escritos </a>
          <a href="/"> Cursos </a>
          <a href="/about"> Sobre </a>
          </S.LayoutA>
        </ul>
      </nav>
    </div>
    </S.LayoutNav>  
  </>
)



export default Header
