import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
        <div className="Profile-wrapper" style={{
            background: `violet`
            }}>
             <h1>{title}</h1>
             <h2>{position}</h2>
             <p>{description}</p>
         </div>
    )
}

export default Profile