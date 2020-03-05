import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    background-color: #9e9199;
    margin-top: 28vw;
`
export const ProfileLink = styled(Link)`
    color: #4d1635;
    flex-direction: column;
    transition: color 0.5s;
    margin-top: 10px;
`
export const ProfileTitle = styled.h1`
    font-size: 1.95rem;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 10px;
    a::after{
        content: '____________';
    }
`
export const ProfilePosition = styled.small`
   font-family: 'Source Sans Pro', sans-serif;
   font-weight:600;
   margin-top: 10px;
   font-size: 1.5rem;
`
export const ProfileDescription = styled.p `
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.3rem;
    margin-top: 10px;
`