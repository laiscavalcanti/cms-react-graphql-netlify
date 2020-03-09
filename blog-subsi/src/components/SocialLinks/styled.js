import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav `
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    
`
export const SocialLinksList =styled.ul `
   display: flex;
`
export const SocialLinksItem = styled.li `
    padding: 0px 10px 0px 0px;
    margin: 10px;
`
export const SocialLinksLink = styled.a`
    color: #000723;
    transition: color 0.5s;
    &:hover{
        opacity: 0.5;
        transition: opacity 0.3s, transform 0.3s;
        background: #fff8dc;
    }
`
export const IconWrapper = styled.div `
    fill: #bbb;
    width: 35px;
    height: 35px;
`
export const ProfileC = styled.span`
    padding-top: 5.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.10rem;
    font-family: 'Source Sans Pro', sans-serif;
` 