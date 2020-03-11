import React from 'react'

import * as S from './styled'

const PostItem = () => (
        <S.PostItemLink to ="/slug/">
            <S.PostItemWrapper>
                <S.PostItemTitle>TITULO</S.PostItemTitle>
                <S.PostItemDate>DATA POST</S.PostItemDate>
                    <S.PostItemDescription>DESCRIPTION</S.PostItemDescription>
                    <S.PostItemTag>TAG</S.PostItemTag>
            </S.PostItemWrapper>
        </S.PostItemLink> 
)

export default PostItem