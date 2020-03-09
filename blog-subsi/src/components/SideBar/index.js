import React from "react"

import links from './content'
import * as S from './styled'


const SideBar = () =>(
    <S.LayoutNav>
      <S.LayoutLogo ><a href="/"><h1></h1></a></S.LayoutLogo>
        {links.map((link, i)=>(
          <S.LayoutList key={i}>
            <S.LayoutLink to={link.url} activeClassName="active"
            >
              {link.label}
              {link.icon}
            </S.LayoutLink>
          </S.LayoutList>
        ))}
            
    </S.LayoutNav>

) 

export default SideBar