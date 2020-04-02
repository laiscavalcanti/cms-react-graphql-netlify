import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'

export const PostWrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding-left: 2.6rem;
  padding-right: 2.6rem;
  width: 100%;
 `
export const PostGrid = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 50rem;
`
export const PostHeader = styled.header`
  display: block;
  padding: 4.8rem;
  color: black;
`
export const PostTag = styled(Link)`
  display: flex;
  align-items: center;
  color: #757575;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.6;
`
export const PostTitle = styled.h1`
  font-family: 'Gotu', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 3rem 1rem 1rem 1rem;
`
export const PostImg = styled(Img)`

`
export const PostDescription = styled.h2`
  margin: 1rem;
  font-family: 'Gotu', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  font-style: italic;
  color: #757575;
`
export const PostDate = styled.p`
  color: #757575;
  font-size: 0.9rem;
  font-weight: 100; 
  padding-left: 1.5rem;
  margin: 0.5rem;
`
export const IconWrapper = styled.div `
  display: flex;
  justify-content: flex-start;
  max-width: 50rem;
  padding-left: 5rem;
`
export const Icon = styled.div`
  margin: 0.5rem;
  width: 20px;
  height:20px;
  color: #757575;
  opacity: 0.6;
`
export const MainContent = styled.article`
  max-width: 50rem;
  padding-left: 5rem;
  text-align: justify;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    font-family: 'Monteserrat', sans-serif;
    color:black;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.7;
    letter-spacing: 0.0050rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #fff;
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
