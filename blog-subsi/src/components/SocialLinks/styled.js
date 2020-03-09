import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav `
    width: 100%;
`
export const SocialLinksList =styled.ul `
   display: flex;
   justify-content: flex-end;
`
export const SocialLinksItem = styled.li `
    padding: 90px 15px 0 0px;
    
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
    width: 25px;
    height: 25px;
`