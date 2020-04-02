import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostItemLink = styled(Link)`
  position: static;
`
export const PostItemWrapper = styled.section`
  color: white;
  background-color: lightgreen;
`
export const PostItemImg = styled(Img)`
    height: 300px;
    width: 300px;
`
export const PostItemTitle = styled.h1`
  margin: 0 auto;
  margin-top: 1rem;
  background-color: lightpink;
`
export const PostItemDescription = styled.p`
  margin: 0 auto;
  margin-top: 1rem;
  background-color: lightsteelblue;
`
