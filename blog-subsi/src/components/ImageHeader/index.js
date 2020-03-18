import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const ImageHeader = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "moon.jpg"}) {
                    childImageSharp{
                        fluid(maxWidth: 1350, maxHeight: 250 ){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `
    )
    return <S.ImgWrapperHeader fluid={avatarImage.childImageSharp.fluid} />
} 

export default ImageHeader