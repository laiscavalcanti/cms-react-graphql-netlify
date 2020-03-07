import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.footer`
    display: flex;
    width: 100%;
    padding: 20px;
    background-color: #FFF8DC;
    margin-top: 31vw;
`
export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
`
export const ProfileTitle = styled(Link)`
    font-size: 1.95rem;
    font-weight:700;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 10px;
    color: #000723;
    letter-spacing: 1.5px;
    &:hover{
        opacity: 0.5;
        transition: opacity 0.3s, transform 0.7s;
        background: #fff8dc;
    }
`
export const ProfilePosition = styled.small`
   font-family: 'Source Sans Pro', sans-serif;
   letter-spacing: 1.5px;
   font-weight:600;
   margin-top: 10px;
   font-size: 1.5rem;
   color: #000723;   
`
export const ProfileDescription = styled.p `
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 1.5px;
    font-size: 1.3rem;
    margin-top: 10px;
    color: #000723;
`