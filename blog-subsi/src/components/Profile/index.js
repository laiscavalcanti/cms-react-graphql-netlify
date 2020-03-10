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
        
          <S.ProfileContainer>
            <S.ProfileTitle to='/home' title="voltar para home">
               {title}
            </S.ProfileTitle>
              <S.ProfilePosition>
                {position}
              </S.ProfilePosition>
             <S.ProfileDescription>
               {description}
             </S.ProfileDescription>
             </S.ProfileContainer>
        
    )
}

export default Profile