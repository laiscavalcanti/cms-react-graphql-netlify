import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import PropTypes from "prop-types"
import Header from "../Header"
import GlobalStyles from '../../styles/global'
import PostItem from "../PostItem"
import FooterLayout from "../Footer"

import * as S from './styled'


const Layout = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
      query postList {
        allMarkdownRemark {
          edges {
            node {
              fields{slug}
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
              title
          }
          timeToRead
      }
    }
  }
}
  `)

const postList = allMarkdownRemark.edges
  return (
    <>
    <S.LayoutWrapper>
      <GlobalStyles />
          <Header />
            <S.LayoutMain>      
              <S.GridContainer>
                <S.GridArea>
                {postList.map(({
                  node: {
                    frontmatter: {category, background, date, description, title},
                    timeToRead,
                    fields: {slug}
                  },
                  })=>(
                    <PostItem 
                    slug={slug}
                    background={background}
                    category={category}
                    date={date}
                    timeToRead={timeToRead}
                    title={title}
                    description={description}
                  />
                  ))}
                  
                </S.GridArea>
              </S.GridContainer>
            </S.LayoutMain>
            <FooterLayout />      
      </S.LayoutWrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
