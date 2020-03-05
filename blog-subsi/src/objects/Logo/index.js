import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const ImageLogo = () =>{
    const { avatarLogo } = useStaticQuery(
        graphql`
            query {
                avatarLogo: file(relativePath: { eq: "gatsby-icon.png"}) {
                    childImageSharp{
                        fluid(maxWidth: 50, maxHeight:50 ){
                        ...GatsbyImageSharpFluid
                    }
                }

            }
        }
    `
    )
    return <S.LayoutLogo fluid={avatarLogo.childImageSharp.fluid} />
} 


export default ImageLogo