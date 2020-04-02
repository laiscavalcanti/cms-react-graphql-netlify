import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import ButtonLink from '../ButtonLink'
import PostItem from '../PostItem'


const trackClickAllPosts = () => {
  ReactGA.event({
    category: 'Blog',
    action: 'click',
    label: `Blog - Click to view all posts`
  })
}

const listQuery = graphql`
    query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 2
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`

const BlogList = () => {
  const allBlogList = useStaticQuery(listQuery)
  const list = allBlogList.allMarkdownRemark.edges

  return (
    <S.BlogList>
      <S.Title>Últimas do blog</S.Title>
      <S.Nav>
      {list.map(
          ({
            node: {
              frontmatter: {
                category,
                background,
                date,
                description,
                title,
                image: {
                  childImageSharp: { fluid },
                },
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            
            <PostItem
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={fluid}
            />
        )
        )}
      </S.Nav>  
    <ButtonLink to='/blog/' onClick={() => trackClickAllPosts()}>
    Ver todos os posts
  </ButtonLink>
  </S.BlogList>
  )
}

export default BlogList