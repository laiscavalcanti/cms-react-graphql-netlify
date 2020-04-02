import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostWrapper =  styled.div`
   display: flex; 
`
export const PostItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin: 2rem;
`
export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: white;
`
export const PostItemImg = styled(Img)`
  max-width: 20rem;
  min-height: 10rem;
`
export const PostItemTitle = styled.h1`
  display: flex-start;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: lightpink;
`
export const PostTag = styled.section`
  display: flex;
`
export const PostItemDescription = styled.p`
  max-width: 20rem;
  margin-top: 1rem;
  background-color: lightsteelblue;
`
