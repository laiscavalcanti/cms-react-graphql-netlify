import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 12rem;
    flex-direction: column;
    align-content: flex-start;
    background-color: white;
`
export const ProfileWrapper = styled.section`
    margin:1rem;
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
   color: black;   
`
export const ProfileDescription = styled.p `
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 0.18rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    color: #000723;
`