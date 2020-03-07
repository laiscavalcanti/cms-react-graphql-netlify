import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import SocialLinks from '../SocialLinks'

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
          <S.ProfileContainer>
            <a href ="/home"><S.ProfileTitle>
               {title}
              </S.ProfileTitle></a>
              <S.ProfilePosition>{position}</S.ProfilePosition>
             <S.ProfileDescription>{description}</S.ProfileDescription>
             </S.ProfileContainer>
             <SocialLinks />
        </S.ProfileWrapper>
    )
}

export default Profile