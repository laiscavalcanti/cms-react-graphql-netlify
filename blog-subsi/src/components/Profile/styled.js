import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.footer`
    display: flex;
    position: fixed;
    justify-content: flex-start;
    width: 100%;
    bottom: 0;
    right: 0;
    background-color: #BC8F8F;
    height: 12rem;
`
export const ProfileContainer = styled.section`
    display: flex;
    width: 200%;
    flex-direction: column;
    align-content: flex-start;
    background-color: #BC8F8F;
    margin: 15px;
`
export const ProfileTitle = styled(Link)`
    font-size: 2rem;
    font-weight:700;
    font-family: 'Source Sans Pro', sans-serif;
    color: #000723;
    letter-spacing: 0.25rem;
    &:hover{
        opacity: 0.5;
        transition: opacity 0.3s, transform 0.7s;
        background: #BC8F8F;
    }
`
export const ProfilePosition = styled.small`
   display: flex;
   font-family: 'Source Sans Pro', sans-serif;
   letter-spacing: 0.18rem;
   font-weight:600;
   padding-top: 2rem;
   font-size: 1.5rem;
   color: #000723;   
`
export const ProfileDescription = styled.p `
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.18rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    color: #000723;
`