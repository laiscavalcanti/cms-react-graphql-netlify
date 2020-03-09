import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.footer`
    display: flex;
    position: absolute;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;

    bottom: 0;
    right: 0;
`
export const ProfileContainer = styled.section`
    flex-direction: column;
    align-content: flex-start;
`
export const ProfileTitle = styled(Link)`
    font-size: 1.95rem;
    font-weight:700;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 10px;
    color: #000723;
    letter-spacing: 0.18rem;
    &:hover{
        opacity: 0.5;
        transition: opacity 0.3s, transform 0.7s;
        background: #fff8dc;
    }
`
export const ProfilePosition = styled.small`
   display: flex;
   font-family: 'Source Sans Pro', sans-serif;
   letter-spacing: 0.18rem;
   font-weight:600;
   margin-top: 10px;
   font-size: 1.5rem;
   color: #000723;   
`
export const ProfileDescription = styled.p `
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.18rem;
    font-size: 1.3rem;
    margin-top: 10px;
    color: #000723;
`