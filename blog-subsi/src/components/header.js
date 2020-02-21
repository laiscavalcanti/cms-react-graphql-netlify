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
      <h1><a href="/home">Logo</a></h1>
    </S.LayoutLogo>
      <S.LayoutList >
          <S.LayoutLink>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/"> Link </a>
            <a href="/about"> Link </a>
          </S.LayoutLink>
        </S.LayoutList>
    </S.LayoutNav>
  </>
)



export default Header
