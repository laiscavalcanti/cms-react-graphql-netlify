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
        <S.ProfileWrapper>
          <S.ProfileLink>
             <S.ProfileTitle>
               {title}
              </S.ProfileTitle>
              </S.ProfileLink>
              <S.ProfilePosition>{position}</S.ProfilePosition>
             <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile