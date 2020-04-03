import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import Category from "../Category"

const PostItem = ({
  slug,
  description,
  title,
  image,
}) => (
  <S.PostWrapper>
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemImg fluid={image} />
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDescription>{description}</S.PostItemDescription>
      <Category category={category} />
    </S.PostItemWrapper>
  </S.PostItemLink>
  </S.PostWrapper>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.array,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default PostItem
