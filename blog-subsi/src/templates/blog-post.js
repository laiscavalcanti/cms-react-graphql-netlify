import React from 'react'
import { graphql } from 'gatsby'

import SimpleLayout from "../components/SimpleLayout"
import SEO from "../components/seo"
import RecommendedPosts from '../components/RecommendedPosts'

import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) =>{
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost
    const featuredImgFluid = post.frontmatter.img.childImageSharp.fluid

    return (
    <SimpleLayout>
        <SEO title ={post.frontmatter.title} />
        <S.PostHeader>
            <S.PostDate>
                {post.frontmatter.date} 〰 {post.timeToRead} min de Leitura
            </S.PostDate>
            
            <S.PostImg fluid ={featuredImgFluid} />
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </S.MainContent>
        <RecommendedPosts next={next} previous={previous} />
    </SimpleLayout>
    ) 
}
export const query = graphql `
    query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
            description
            img {
                childImageSharp {
                    fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            date (locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
        html
        timeToRead
        }
    }

    `
export default BlogPost