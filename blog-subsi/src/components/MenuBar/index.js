import React from 'react'

import { ChevronUp as Up } from '@styled-icons/evil/ChevronUp'
import { LightBulb as Light } from '@styled-icons/octicons/LightBulb'

import * as S from './styled'

const MenuBar = () =>(
    <S.MenuBarWrapper>
        <S.MenuBarList>
                <S.MenuBarItem className="theme"to="/" title="mudar o tema">
                    <Light />
                </S.MenuBarItem>
                <S.MenuBarItem className="theme" to="/" title="ir para o topo">
                    <Up />
                </S.MenuBarItem>
        </S.MenuBarList>
    </S.MenuBarWrapper>
)
    
export default MenuBar