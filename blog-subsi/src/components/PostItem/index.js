import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({slug, category, background, date, timeToRead, description, title}) => (
        <S.PostItemLink to ={slug}>
            <S.PostItemWrapper>
                    <S.PostItemTitle>{title}</S.PostItemTitle>
                    <S.PostItemDate>{date}, {timeToRead}</S.PostItemDate>
                    <S.PostItemDescription>{description}</S.PostItemDescription>
                    <S.PostItemTag background={background}>{category}</S.PostItemTag>
            </S.PostItemWrapper>
        </S.PostItemLink> 
)

PostItem.propTypes={
    slug: PropTypes.string.isRequired,
    category: PropTypes.isRequired,
    background: PropTypes.string,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default PostItem