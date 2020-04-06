import React from "react"
import PropTypes from "prop-types"
import ReactGA from 'react-ga'

import * as S from "./styled"
import Category from "../Category"
import BoxHandler from "../BoxHandler"

const trackClick = ({ item, label }) => {
  ReactGA.event({
    category: 'Blog',
    action: 'click',
    label: `${label || 'Blog List'} - Go to ${item}`
  })
}

const PostItem = ({
  slug,
  description,
  title,
  image,
  tags
}) => {
  return (
  <S.PostWrapper >
    <BoxHandler>
    <S.PostItemLink
      to={`/${slug}`}
      cover
      direction="down"
      duration={0.5}
      title={title}
      onClick={() => trackClick(title)}>
    <S.PostItemWrapper>
      <S.PostItemImg fluid={image} />
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemWrapper>
    {tags &&(
        <Category tags={tags} />)}
    </S.PostItemLink>
    </BoxHandler>
  </S.PostWrapper>
  )
}
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default PostItem
