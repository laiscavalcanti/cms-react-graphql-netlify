import React from "react"

import links from './content'
import * as S from './styled'
//import Logo from "../Logo"

const SideBar = () =>(
    <S.LayoutNav>
   
        {links.map((link, i)=>(
          <S.LayoutList key={i}>
            <S.LayoutLink to={link.url} activeClassName="active">
              {link.label}
              {link.icon}
            </S.LayoutLink>
          </S.LayoutList>
        ))}
            
    </S.LayoutNav>

) 

export default SideBar