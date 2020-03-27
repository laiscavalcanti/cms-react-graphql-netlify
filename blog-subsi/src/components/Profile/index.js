import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Profile = () => {
    const {
        site: {
            siteMetadata:{title, position, description},
        },
    } = useStaticQuery(graphql`
    query MySiteMetaData {
        site{
          siteMetadata{
            title
            position
            description
          }
        }
      }
    `)
    return (
          <S.ProfileContainer>
            <S.ProfileWrapper>
            <S.ProfileTitle to='/about/' title="voltar para home">
               {title}
            </S.ProfileTitle>
              <S.ProfilePosition>
                {position}
              </S.ProfilePosition>
             <S.ProfileDescription>
               {description}
             </S.ProfileDescription>
             </S.ProfileWrapper>
          </S.ProfileContainer>

    )
}

export default Profile
