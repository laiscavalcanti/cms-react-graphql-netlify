import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Logo = () => {
    const { avatarLogo } = useStaticQuery(
        graphql`
            query {
                avatarLogo: file(relativePath: { eq: "logo.png"}) {
                    childImageSharp{
                        fluid(maxWidth: 200, maxHeight: 50 ){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
    )
  
    return <S.LogoLink to='/' >
            <S.LogoWrapper fluid={avatarLogo.childImageSharp.fluid} />
        </S.LogoLink>
}

export default Logo