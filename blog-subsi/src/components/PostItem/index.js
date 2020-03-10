import React from 'react'

import * as S from './styled'

const PostItem = () => (

    <S.PostItemLink to ="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag>lais</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>22/02</S.PostItemDate>
                <S.PostItemTitle>sousa</S.PostItemTitle>
                <S.PostItemDescription>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem