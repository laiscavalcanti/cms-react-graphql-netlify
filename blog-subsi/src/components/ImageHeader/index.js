import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImageHeader = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "moon.jpg"}) {
                    childImageSharp{
                        fixed(width: 1350, height: 250 ){
                        ...GatsbyImageSharpFixed
                    }
                }

            }
        }
    `
    )
    return <Img fixed={avatarImage.childImageSharp.fixed} />
} 

export default ImageHeader