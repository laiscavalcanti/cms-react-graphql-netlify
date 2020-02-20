import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    return <Img fluid={avatarImage.childImageSharp.fluid} />
} 

export default ImageHeader