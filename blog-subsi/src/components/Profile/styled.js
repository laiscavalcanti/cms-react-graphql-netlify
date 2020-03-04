import styled from "styled-components"
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    background-color: orange;
`
export const ProfileLink = styled(Link)`
    color: black;
    flex-direction: column;
    transition: color 0.5s;
`
export const ProfileTitle = styled.h1`
    font-size: 1.8rem;
`
export const ProfilePosition = styled.small`
   font-size: 1.4rem;
`
export const ProfileDescription = styled.p `
    font-size: 1.2rem;
`