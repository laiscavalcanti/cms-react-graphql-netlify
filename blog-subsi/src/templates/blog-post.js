import React from 'react'
import { graphql } from 'gatsby'

import SimpleLayout from "../components/SimpleLayout"
import SEO from "../components/seo"
import RecommendedPosts from '../components/RecommendedPosts'

import { Tag } from '@styled-icons/boxicons-regular/Tag'
import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) =>{
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost

    return (
      <SimpleLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <S.PostWrapper>

      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
          
        </S.PostDate>

        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>

        <S.IconWrapper>
          <S.Icon>
              <Tag />
          </S.Icon>
          <S.PostTag>
          {post.frontmatter.tags}
        </S.PostTag>
        </S.IconWrapper>
        
      <RecommendedPosts next={next} previous={previous} />

      </S.PostWrapper>
    </SimpleLayout>
  )
}


export const query = graphql `
 query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields {
        slug
      }
    frontmatter {
      title
      description
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      tags
      }
      html
      timeToRead
    }
  }
`
export default BlogPost
