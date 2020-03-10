import styled from 'styled-components'

export const SocialLinksWrapper = styled.div `
    width: 100%;
    height: 12rem;
    top: 2rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background-color: #ffe4c4;
    &:hover{
    opacity: 0.5;
    transition: opacity 0.1s, transform 0.3s;
    background: #fff8dc;
}
`
export const SocialLinksList =styled.nav `
   width: 100%;
   display: flex;
   justify-content: flex-end;
   margin: 1rem;
   flex-wrap: wrap;
`
export const SocialLinksItem = styled.li `
    margin: 15px;
    padding-left: 1rem;
    padding-right: 2rem;
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
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 4rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    letter-spacing: 0.10rem;
    font-family: 'Source Sans Pro', sans-serif;
` 