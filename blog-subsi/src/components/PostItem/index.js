import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({slug, category, background, date, timeToRead, description, title, image}) => (
        <S.PostItemLink to ={slug}>
            <S.PostItemWrapper>
                    <S.PostItemTitle>{title}</S.PostItemTitle>
                    <S.PostItemDescription>{description}</S.PostItemDescription>
                    
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
    title: PropTypes.string.isRequired,
}

export default PostItem