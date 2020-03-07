import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    background-color: #fff8dc;
    margin-top: 31vw;
`
export const ProfileLink = styled(Link)`
   
`
export const ProfileTitle = styled.h1`
    font-size: 1.95rem;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 10px;
    color: #000723;
    letter-spacing: 1.5px;
    flex-direction: column;
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